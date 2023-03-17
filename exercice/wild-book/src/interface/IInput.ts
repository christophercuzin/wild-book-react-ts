import { ChangeEvent } from "react";
import { Path, UseFormRegister } from "react-hook-form";


export interface IInputProps {
  type: string;
  setter?: (e: ChangeEvent<HTMLInputElement>) => void;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  value?: string;
  regexp?: RegExp;
}

export interface IFormValues {
  name: string;
  email: string;
  city: string;
  picture: File[];
}

