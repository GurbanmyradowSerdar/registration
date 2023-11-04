import { TFormikInitialValuesSecondPage } from "../../types";

export const validate = (values: TFormikInitialValuesSecondPage) => {
  const errors: Partial<TFormikInitialValuesSecondPage> = {};
  if (values.fullName.length <= 0) {
    errors.fullName = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (values.password.length <= 0) {
    errors.password = "Required";
  } else if (values.password.length < 15) {
    errors.password = "Password must be at least 15 characters";
  } else if (
    !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]/.test(
      values.password
    )
  ) {
    errors.password = "Use these too : A-Z, 0-9 and signs";
  }

  if (!values.toggle) {
    errors.toggle = true;
  }

  return errors;
};
