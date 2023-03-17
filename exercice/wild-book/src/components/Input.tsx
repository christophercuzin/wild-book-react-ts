import { IInputProps } from "../interface/IInput";


const Input = ({ register, label, type, regexp }: IInputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      <input
        {...register(label, {
          required: `Field ${label} is required`,
          pattern: regexp,
        })}
        className="input"
        type={type}
      />
    </div>
  );
};

export default Input