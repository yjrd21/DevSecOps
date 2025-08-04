import "./Dropdown.css";
interface DropDownProps {
  options: string[];
  value: string;
  onSelect: (option: string) => void;
  placeHolder: string;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  value,
  onSelect,
  placeHolder,
}) => {
  return (
    <div className="dropdown-container">
      <h5 className="dropdown-label">{placeHolder}</h5>
      <select
        value={value}
        onChange={(e) => onSelect(e.target.value)}
        className="dropdown"
      >
        <option value="" disabled>
          {placeHolder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
