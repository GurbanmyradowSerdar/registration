import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

// ! class name interface
export interface IClassName {
  className?: string;
}

// ! with children prop
export interface IParentComponent extends IClassName {
  children: React.ReactNode;
}

// ! main content
export interface ITextProps extends IClassName {
  text: string;
}

// ! Option buttons props
export interface IOptionButtonProps {
  title: string;
  text: string;
  hasUserIcon: boolean;
  props?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

// ! custom input
export interface ICustomInputProps extends IClassName {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: React.ChangeEvent<unknown>) => void;
  label: string;
  placeholder?: string;
  maxLength?: number;
  error?: string;
  anotherInput?: React.ReactNode;
}

// ! main input props
export interface IMainInputProps {
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label: string;
  error?: string | undefined;
  register: UseFormRegister<TFormInputsSecondPage>;
  name: TSecondPageFormNames;
  options?:
    | RegisterOptions<TFormInputsSecondPage, TSecondPageFormNames>
    | undefined;
}

type TSecondPageFormNames = "email" | "fullName" | "password" | "toggle";

// ! 2 page content
export type TFormInputsSecondPage = {
  fullName: string;
  email: string;
  password: string;
  toggle: boolean;
};

export type TVisible = "text" | "password";

// ! 3 page content
export type TFormikInitialValuesThirdPage = {
  phoneNumber: string;
  address: string;
  countryOfResidence: string;
};

// ! atoms store
export type TPageIndexState = 0 | 1 | 2 | 3;

// ! 2 page form section props
export interface ISecondPageFormProps {}

// ! custom inputs props as password, checkbox
export interface ICustomInputProps1 {
  register: UseFormRegister<TFormInputsSecondPage>;
  error?: string | undefined | null;
}
