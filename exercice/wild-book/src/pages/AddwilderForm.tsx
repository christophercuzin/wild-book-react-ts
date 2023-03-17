import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import Input from "../components/Input"
import { wildersService } from "../service/wildersService/wildersService";
import { wildersContext } from '../contexts/WildersContext';
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormValues } from "../interface/IInput";
import { ErrorMessage } from "@hookform/error-message";


const AddWilder = () => {
  const navigate = useNavigate();
  const { fetchWilders } = useContext(wildersContext);
  const { register, formState: { errors }, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const formData = new FormData()
    formData.append("picture", data.picture[0]);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("city", data.city);
    await wildersService.createWilder(formData);
    fetchWilders();
    navigate("/")
  };


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Input
          register={register}
          label="picture"
          type="file"
          required
        />
        <ErrorMessage
          errors={errors}
          name="picture"
          render={({ message }) => (
            <p className="formErrorMessage">{message}</p>
          )}
        />
        <Input
          register={register}
          label="name"
          type="text"
          required
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <p className="formErrorMessage">{message}</p>
          )}
        />
        <Input
          register={register}
          label="email"
          required
          type="email"
          regexp={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <p className="formErrorMessage">{message}</p>
          )}
        />
        <Input
          register={register}
          label="city"
          type="text"
          required
        />
        <ErrorMessage
          errors={errors}
          name="city"
          render={({ message }) => (
            <p className="formErrorMessage">{message}</p>
          )}
        />
        <div className="input-container">
          <button type="submit">Add Wilder</button>
        </div>
      </form>
    </div>
  );
}

export default AddWilder