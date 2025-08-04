import "./TargetOutput.css";
interface TargetOutputProps {
  label: string;
  value: string;
  currency: string;
}

const TargetOutput: React.FC<TargetOutputProps> = ({ label, value, currency }) => {
  return (
    <div className="target-output-container">
      <h5 className="target-output-label">{label}</h5>
      <p className="target-output-value">
        {value} {currency}
      </p>
    </div>
  );
};

export default TargetOutput;