import { SetterOrUpdater } from "recoil";
import {
  TFormInputsSecondPage,
  TFormikInitialValuesThirdPage,
  TPageIndexState,
} from "types";

function getPrevPageIndex(
  pageIndex: TPageIndexState,
  setCredentials: SetterOrUpdater<TFormInputsSecondPage>,
  setInfo: SetterOrUpdater<TFormikInitialValuesThirdPage>
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
