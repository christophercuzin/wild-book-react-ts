export interface IWilderProps {
  name: string;
  city: string;
  id: number;
  skills: ISkillProps[];
}

export interface ISkillProps {
  name: string;
  id: number;
  wilderId: number
}

export interface IWilderContextProps {
  wilders: IWilderProps[];
  skills: ISkillProps[];
  fetchWilders: () => void;
  handleOpenModal: (arg: any) => void;
  handleCloseModal: () => void;
}

export interface IInputProps {
  inputName: string;
  label: string;
  type: string;
  value: string;
  setter: (arg: string) => void;
}

