import { ISkillProps } from "./ISkill";
import { IWilderProps } from "./IWilder";

export interface IWilderContextProps {
  wilders: IWilderProps[];
  skills: ISkillProps[];
  fetchWilders: () => void;
  handleOpenModal: (arg: any) => void;
  handleCloseModal: () => void;
  fetchSkills: () => void;
}
