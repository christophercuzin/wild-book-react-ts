import { useState, useContext, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { skillService } from "../service/skillService/skillService";
import { wildersContext } from "../contexts/WildersContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormValues } from "../interface/IInput";
import { ErrorMessage } from "@hookform/error-message";

const AddSkill = () => {
  const [fields, setFields] = useState({
    name: ""
  });
  const setter = (e: ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const { fetchSkills } = useContext(wildersContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    await skillService.createSkill(data.name);
    fetchSkills();
    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Input
          register={register}
          label="name"
          type="text"
          value={fields.name}
          required
          setter={setter}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <p className="formErrorMessage">{message}</p>
          )}
        />
        <div className="input-container">
          <button type="submit">Add skill</button>
        </div>
      </form>
    </div>
  );
};

export default AddSkill;
