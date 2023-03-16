import blank_profile from "../assets/blank_profile.png";
import { wildersService } from "../service/wildersService/wildersService";
import { IWilderProps } from "../interface/Interface";
import Skill from "../components/Skill";
import Modal from "../components/Modal";
import { useContext } from "react";
import { wildersContext } from "../contexts/WildersContext";

const WilderCard = ({ name, city, id, skills }: IWilderProps) => {

  const { fetchWilders, handleOpenModal } = useContext(wildersContext);
  const handleDeleteClick = async () => {
    await wildersService.removeWilder(id);
    fetchWilders();
  };

  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>
        Bonjour, je m'appelle {name}, j'habite a {city}.
      </p>
      <h4>Wild Skills</h4>
      {
        <ul className="skills">
          {skills.map((skill) => {
            return (
              <Skill
                key={skill.name}
                wilderId={id}
                id={skill.id}
                name={skill.name}
              />
            );
          })}
        </ul>
      }
      <button type="button" onClick={handleDeleteClick}>
        remove
      </button>
      <button id={id.toString()} type="button" onClick={handleOpenModal}>
        Add skill
      </button>
      <Modal id={id} />
    </article>
  );
};

export default WilderCard;
