import { IInputProps } from "../interface/Interface";

const Input = ({ inputName, label, type, value, setter }: IInputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={inputName}>{label}</label>
      <input
        id={inputName}
        className="input"
        type={type}
        value={value}
        onChange={(e) => {
          setter(e.target.value);
        }}
      />
    </div>
  );
};

export default Input