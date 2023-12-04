import { TFormikInitialValuesThirdPage } from "../../../types";
import { isPossiblePhoneNumber } from "react-phone-number-input";

export const validate = ({
  address,
  countryOfResidence,
  phoneNumber,
}: TFormikInitialValuesThirdPage) => {
  const errors: Partial<TFormikInitialValuesThirdPage> = {};
  // if(address)
  if (phoneNumber.length === 0) {
    errors.phoneNumber = "Required";
  }

  if (!isPossiblePhoneNumber(phoneNumber)) {
    errors.phoneNumber = "Phone number not valid";
  }

  if (address.length === 0) {
    errors.address = "Required";
  }

  if (countryOfResidence.length === 0) {
    errors.countryOfResidence = "Required";
  }

  return errors;
};
