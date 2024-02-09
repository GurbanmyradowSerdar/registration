import { SetterOrUpdater } from "recoil";
import {
  TFormInputsSecondPage,
  TFormInputsThirdPage,
  TPageIndexState,
} from "types";

function getPrevPageIndex(
  pageIndex: TPageIndexState,
  setCredentials: SetterOrUpdater<TFormInputsSecondPage>,
  setInfo: SetterOrUpdater<TFormInputsThirdPage>
): TPageIndexState {
  switch (pageIndex) {
    case 1:
      setCredentials({
        email: "",
        fullName: "",
        password: "",
        toggle: false,
      });
      setInfo({
        address: "",
        countryOfResidence: "",
        phoneNumber: "",
      });
      return 0;

    case 2:
      setInfo({
        address: "",
        countryOfResidence: "",
        phoneNumber: "",
      });
      return 1;

    case 3:
      return 2;
    default:
      return pageIndex;
  }
}

export { getPrevPageIndex };
