interface ErrorDisplayProps {
  message: string | null;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="error-display">
      <p className="error-message">{message}</p>
    </div>
  );
};

export default ErrorDisplay;