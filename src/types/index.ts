import React from "react";
import {
  RegisterOptions,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { Country as CountryCode } from "react-phone-number-input";

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

// ! 2 page content
export type TFormInputsSecondPage = {
  fullName: string;
  email: string;
  password: string;
  toggle: boolean;
};

// ! main input props
export interface IMainInputSecondPageProps {
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

export type TVisible = "text" | "password";

// ! custom inputs props as password, checkbox
export interface ICustomInputProps1 {
  register: UseFormRegister<TFormInputsSecondPage>;
  error?: string | undefined | null;
}

// ! 3 page content
export type TFormInputsThirdPage = {
  phoneNumber: string;
  address: string;
  countryOfResidence: string;
};

// ! main input props
export interface IMainInputThirdPageProps {
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label: string;
  error?: string | undefined;
  register: UseFormRegister<TFormInputsThirdPage>;
  name: TThirdPageFormNames;
  options?:
    | RegisterOptions<TFormInputsThirdPage, TThirdPageFormNames>
    | undefined;
}

type TThirdPageFormNames = "phoneNumber" | "address" | "countryOfResidence";

export interface IPhoneInputProps {
  register: UseFormRegister<TFormInputsThirdPage>;
  setCountry: React.Dispatch<React.SetStateAction<CountryCode>>;
  country: CountryCode;
  error?: string;
  setValue: UseFormSetValue<TFormInputsThirdPage>;
  getValues: UseFormGetValues<TFormInputsThirdPage>;
}

export interface ILocationInputProps {
  register: UseFormRegister<TFormInputsThirdPage>;
  error?: string;
  getValues: UseFormGetValues<TFormInputsThirdPage>;
}

// ! atoms store
export type TPageIndexState = 0 | 1 | 2 | 3;

// ! 4 page content
export interface IFormInputsFourthPage {
  bvn: string;
}

export interface IBankNumberInputThirdPageProps {
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label: string;
  error?: string | undefined;
  register: UseFormRegister<IFormInputsFourthPage>;
  name: "bvn";
  options?: RegisterOptions<IFormInputsFourthPage, "bvn"> | undefined;
  isCorrectAnswer: boolean;
}
