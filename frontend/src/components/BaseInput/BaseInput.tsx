import "../../styles/typography.css";
import "./BaseInput.css";

interface BaseInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="base-input-container">
      <h5 className="base-input-label">{label}</h5>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="base-input"
      />
    </div>
  );
};

export default BaseInput;
