import { ChangeEvent, HTMLInputTypeAttribute } from "react";

// ! class name interface
export interface IClassName {
  className?: string;
}

// ! with children prop
export interface IParentComponent extends IClassName {
  children: React.ReactNode;
}

// ! navigation component
export interface INavigationComponent extends IClassName {
  hasBackButton: boolean;
  info: string;
  step: string;
}

// ! aside
export interface IAsideTextComponent extends IClassName {
  text: string;
}

// ! main content
export interface ITextProps extends IClassName {
  text: string;
}

// ! interactive wrapper component
export interface IInteractiveWrapperProps extends IParentComponent {
  pageIndex: number;
}

// ! custom input
export interface ICustomInputProps extends IClassName {
  name: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  label: string;
  placeholder?: string;
  maxLength?: number;
  error?: string;
  anotherInput?: React.ReactNode;
}

// ! 2 page content
export type TFormikInitialValuesSecondPage = {
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
