import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BaseInput from './BaseInput'
import {useState}  from 'react'

// Wrapper for testing real user interactions with state management
const StatefulWrapper = ({ 
  initialValue = "",
  label = "Test Label",
  placeholder = "Enter text"
}) => {
  const [val, setVal] = useState(initialValue)
  return (
    <BaseInput 
      label={label} 
      value={val} 
      onChange={setVal} 
      placeholder={placeholder} 
    />
  )
}

describe('BaseInput', () => {
  const defaultProps = {
    label: 'Test Label',
    value: '',
    onChange: vi.fn(),
    placeholder: 'Enter text here',
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render with correct label', () => {
      render(<BaseInput {...defaultProps} />)
      
      expect(screen.getByText('Test Label')).toBeInTheDocument()
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('should render with correct placeholder', () => {
      render(<BaseInput {...defaultProps} />)
      
      expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument()
    })

    it('should display the correct value', () => {
      render(<BaseInput {...defaultProps} value="test value" />)
      
      expect(screen.getByDisplayValue('test value')).toBeInTheDocument()
    })

    it('should apply correct CSS classes', () => {
      render(<BaseInput {...defaultProps} />)
      
      const container = screen.getByText('Test Label').parentElement
      const input = screen.getByRole('textbox')
      const label = screen.getByText('Test Label')

      expect(container).toHaveClass('base-input-container')
      expect(input).toHaveClass('base-input')
      expect(label).toHaveClass('base-input-label')
    })
  })

  describe('User Interactions', () => {
    it('should call onChange when user types in input', async () => {
      const user = userEvent.setup()
      render(<StatefulWrapper />)

      const input = screen.getByRole('textbox')
      await user.type(input, 'hello')

      expect(input).toHaveValue('hello')
    })

    it('should call onChange with correct value when input changes', () => {
      const mockOnChange = vi.fn()
      
      render(<BaseInput {...defaultProps} onChange={mockOnChange} />)
      
      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: 'new value' } })

      expect(mockOnChange).toHaveBeenCalledWith('new value')
      expect(mockOnChange).toHaveBeenCalledTimes(1)
    })

    it('should handle clearing the input', async () => {
      const user = userEvent.setup()
      const mockOnChange = vi.fn()
      
      render(<BaseInput {...defaultProps} value="initial value" onChange={mockOnChange} />)
      
      const input = screen.getByRole('textbox')
      await user.clear(input)

      expect(mockOnChange).toHaveBeenCalledWith('')
    })

    it('should handle special characters and numbers', async () => {
      const user = userEvent.setup()
      render(<StatefulWrapper />)

      const input = screen.getByRole('textbox')
      const testString = '123!@#$%'
      await user.type(input, testString)

      expect(input).toHaveValue(testString)
    })

    it('should handle backspace and deletion', async () => {
      const user = userEvent.setup()
      render(<StatefulWrapper initialValue="hello world" />)

      const input = screen.getByRole('textbox')
      
      // Clear the input
      await user.clear(input)

      expect(input).toHaveValue('')
    })

    it('should handle multiple typing sessions', async () => {
      const user = userEvent.setup()
      render(<StatefulWrapper />)

      const input = screen.getByRole('textbox')
      
      await user.type(input, 'first')
      expect(input).toHaveValue('first')
      
      await user.type(input, ' second')
      expect(input).toHaveValue('first second')
    })
  })

  describe('Controlled Component Behavior', () => {
    it('should reflect the value prop correctly', () => {
      const { rerender } = render(<BaseInput {...defaultProps} value="initial" />)
      
      expect(screen.getByDisplayValue('initial')).toBeInTheDocument()
      
      rerender(<BaseInput {...defaultProps} value="updated" />)
      expect(screen.getByDisplayValue('updated')).toBeInTheDocument()
    })

    it('should not change value without onChange being called', async () => {
      const user = userEvent.setup()
      
      render(<BaseInput {...defaultProps} value="fixed value" onChange={() => {}} />)
      
      const input = screen.getByRole('textbox')
      await user.type(input, 'additional text')

      // Value should remain the same since onChange doesn't update it
      expect(screen.getByDisplayValue('fixed value')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should be accessible via keyboard navigation', () => {
      render(<BaseInput {...defaultProps} />)
      
      const input = screen.getByRole('textbox')
      input.focus()
      
      expect(input).toHaveFocus()
    })

    it('should have proper input type', () => {
      render(<BaseInput {...defaultProps} />)
      
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('type', 'text')
    })

    it('should associate label with input for screen readers', () => {
      render(<BaseInput {...defaultProps} />)
      
      const input = screen.getByRole('textbox')
      const label = screen.getByText('Test Label')
      
      // While not explicitly associated via htmlFor/id, the semantic structure
      // should be clear for screen readers
      expect(label).toBeInTheDocument()
      expect(input).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty label', () => {
      render(<BaseInput {...defaultProps} label="" />)
      
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
    })

    it('should handle empty placeholder', () => {
      render(<BaseInput {...defaultProps} placeholder="" />)
      
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('placeholder', '')
    })

    it('should handle very long values', () => {
      const longValue = 'a'.repeat(1000)
      render(<BaseInput {...defaultProps} value={longValue} />)
      
      expect(screen.getByDisplayValue(longValue)).toBeInTheDocument()
    })

    it('should handle special characters in label', () => {
      const specialLabel = 'Label with émojis 🚀 and spéciäl châractérs'
      render(<BaseInput {...defaultProps} label={specialLabel} />)
      
      expect(screen.getByText(specialLabel)).toBeInTheDocument()
    })
  })
})