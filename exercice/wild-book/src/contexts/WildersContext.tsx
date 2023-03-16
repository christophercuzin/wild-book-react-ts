import { createContext, useState, useEffect } from "react";
import { wildersService } from "../service/wildersService/wildersService";
import { skillService } from "../service/skillService/skillService";
import {
  ISkillProps,
  IWilderContextProps,
  IWilderProps,
} from "../interface/Interface";

// on défini un nouveau context
export const wildersContext = createContext<IWilderContextProps>({
  wilders: [],
  skills: [],
  fetchWilders: () => {},
  handleOpenModal: (arg) => {},
  handleCloseModal: () => {},

});

export const WildersProvider = ({ children }: any) => {
  const [wilders, setWilders] = useState<IWilderProps[]>([]);
  const [skills, setSkills] = useState<ISkillProps[]>([]);

  const handleOpenModal = (e: any) => {
    const modal = document.getElementById(`${e.target.id}modal`);
    if (modal) {
      modal.classList.remove("modalHidden");
      modal.classList.add("modalShow");
    }
      
  }

  const handleCloseModal = () => {
    const modal = document.querySelector(".modalShow"); 
    if (modal) {
      modal.classList.add("modalHidden")
      modal.classList.remove("modalShow")
    }
  }

  const fetchWilders = async () => {
    const wilders = await wildersService.getWilders();
    setWilders(wilders.data);
  };

  const fetchSkills = async () => {
    const skills = await skillService.getSkills();
    setSkills(skills.data);
  };
  useEffect(() => {
    fetchWilders();
    fetchSkills();
  }, []);

  return (
    <wildersContext.Provider
      value={{
        wilders,
        skills,
        fetchWilders,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </wildersContext.Provider>
  );
};
