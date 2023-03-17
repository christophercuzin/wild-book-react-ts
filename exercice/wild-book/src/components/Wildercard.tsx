import blank_profile from "../assets/blank_profile.png";
import { wildersService } from "../service/wildersService/wildersService";
import { IWilderProps } from "../interface/IWilder";
import Skill from "../components/Skill";
import Modal from "../components/Modal";
import { useContext } from "react";
import { wildersContext } from "../contexts/WildersContext";
import Select from "./Select";

const WilderCard = ({ name, city, id, skills, picture }: IWilderProps) => {

  const { fetchWilders, handleOpenModal } = useContext(wildersContext);
  const handleDeleteClick = async () => {
    await wildersService.removeWilder(id);
    fetchWilders();
  };

  return (
    <article className="card">
      <img
        src={`/images/${picture}.png`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = blank_profile;
        }}
        alt={`${name} profile`}
      />
      <h3>{name}</h3>
      <p>
        Bonjour, je m'appelle {name}, j'habite a {city}.
      </p>
      <h4>Wild Skills</h4>
      {
        <ul className="skills">
          {skills.map((skill) => {
            return <Skill key={skill.name} {...skill} wilderId={id} />;
          })}
        </ul>
      }
      <button
        type="button"
        className="deleteButton"
        onClick={handleDeleteClick}
      >
        remove
      </button>
      <button id={id.toString()} type="button" onClick={handleOpenModal}>
        Add skill
      </button>
      <Modal id={id}>
        <Select id={id} />
      </Modal>
    </article>
  );
};

export default WilderCard;
