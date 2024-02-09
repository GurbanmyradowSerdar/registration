import { atom } from "recoil";
import {
  TFormInputsSecondPage,
  TFormInputsThirdPage,
  TPageIndexState,
} from "types";

export const pageIndexState = atom<TPageIndexState>({
  key: "pageIndex",
  default: 0,
  effects: [
    ({ onSet, setSelf }) => {
      onSet((param) => {
        localStorage.setItem("pageIndex", JSON.stringify(param));
      });
      setSelf(() => {
        const returnValue: TPageIndexState =
          localStorage.getItem("pageIndex") !== null
            ? JSON.parse(localStorage.getItem("pageIndex") as string)
            : 0;
        return returnValue;
      });
    },
  ],
});

export const credentialsState = atom<TFormInputsSecondPage>({
  key: "credentials",
  default: {
    toggle: false,
    fullName: "",
    email: "",
    password: "",
  },
  effects: [
    ({ onSet, setSelf }) => {
      onSet((param) => {
        localStorage.setItem("credentials", JSON.stringify(param));
      });
      setSelf(() => {
        const returnValue: TFormInputsSecondPage =
          localStorage.getItem("credentials") !== null
            ? JSON.parse(localStorage.getItem("credentials") as string)
            : {
                email: "",
                fullName: "",
                password: "",
                toggle: false,
              };
        return returnValue;
      });
    },
  ],
});

export const additionalInfoState = atom<TFormInputsThirdPage>({
  key: "additionalInfo",
  default: {
    phoneNumber: "",
    address: "",
    countryOfResidence: "",
  },
  effects: [
    ({ onSet, setSelf }) => {
      onSet((param) => {
        localStorage.setItem("additionalInfo", JSON.stringify(param));
      });
      setSelf(() => {
        const returnValue: TFormInputsThirdPage =
          localStorage.getItem("additionalInfo") !== null
            ? JSON.parse(localStorage.getItem("additionalInfo") as string)
            : {
                address: "",
                countryOfResidence: "",
                phoneNumber: "",
              };
        return returnValue;
      });
    },
  ],
});
