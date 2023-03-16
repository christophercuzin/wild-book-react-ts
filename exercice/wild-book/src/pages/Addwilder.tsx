import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import Input from "../components/Input"
import { wildersService } from "../service/wildersService/wildersService";
import { wildersContext } from '../contexts/WildersContext';

const AddWilder = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { fetchWilders } = useContext(wildersContext);

  return (
    <div className="form-container">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await wildersService.createWilder(name, email, city);
          fetchWilders();
          navigate("/");
        }}
        className="form"
      >
        <Input
          value={name}
          inputName="name"
          label="Name"
          type="text"
          setter={setName}
        />
        <Input
          value={email}
          inputName="email"
          label="Email"
          type="email"
          setter={setEmail}
        />
        <Input
          value={city}
          inputName="city"
          label="City"
          type="text"
          setter={setCity}
        />
        <div className="input-container">
          <button type="submit">Add Wilder</button>
        </div>
      </form>
    </div>
  );
}

export default AddWilder