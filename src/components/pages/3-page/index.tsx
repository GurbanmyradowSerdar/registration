import { useFormik } from "formik";
import Divider from "../../common/Divider";
import MainTitle from "../../common/text/MainTitle";
import SubtitleTextComponent from "../../common/text/SubtitleTextComponent";
import { TFormikInitialValuesThirdPage } from "../../../types";
import { validate } from "./validation";
import CustomInput from "../../common/CustomInput";
import Input from "react-phone-number-input/input";
import {
  getCountries,
  getCountryCallingCode,
  Country as CountryCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import { useState } from "react";
import PrimaryButton from "../../common/buttons/PrimaryButton";
import { countries } from "../../../data";
import UnderPrimaryButton from "../../common/buttons/UnderPrimaryButton";

const ThirdPageComponent = () => {
  const [country, setCountry] = useState<CountryCode>("TM");
  const [isOpen, setIsOpen] = useState(false);
  const formik = useFormik<TFormikInitialValuesThirdPage>({
    initialValues: {
      address: "",
      countryOfResidence: "",
      phoneNumber: `+${getCountryCallingCode(country)}`,
    },
    validate,
    onSubmit: (values) => {
      alert(` 
        phone number: ${values.phoneNumber}
        address: ${values.address}
        country of residence : ${values.countryOfResidence}`);
    },
  });

  return (
    <div className="mt-14 space-y-4 max-w-md">
      <div className="space-y-3">
        <MainTitle text="Complete Your Profile!" />
        <SubtitleTextComponent text="For the purpose of industry regulation, your details are required." />
        <Divider />
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <CustomInput
          label="Phone number"
          name="phoneNumber"
          className="flex"
          error={formik.errors.phoneNumber}
          anotherInput={
            <div className="relative">
              <select
                className="absolute top-2/4 -translate-y-2/4 left-1 z-10 flex w-40 outline-none"
                value={country}
                onChange={(event) => {
                  setCountry(event.target.value as CountryCode);
                  formik.setValues(
                    {
                      ...formik.values,
                      phoneNumber: `+${getCountryCallingCode(
                        event.target.value as CountryCode
                      )}`,
                    },
                    false
                  );
                }}
              >
                {getCountries().map((country) => (
                  <option key={country} value={country}>
                    {en[country]} +{getCountryCallingCode(country)}
                  </option>
                ))}
              </select>
              <Input
                id="phoneNumber"
                placeholder="Enter phone number"
                value={formik.values.phoneNumber}
                className="border border-bold-gray pr-6 pl-44 py-4 rounded-lg duration-300 transition-all 
                placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl
                relative w-full"
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    phoneNumber: e as string,
                  });
                }}
              />
            </div>
          }
        />
        <CustomInput
          label="Your address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          placeholder="Enter address"
          type="text"
          error={formik.errors.address}
        />

        <CustomInput
          label="Country of residence"
          name="countryOfResidence"
          error={formik.errors.countryOfResidence}
          anotherInput={
            <div className="relative">
              <select
                className="appearance-none w-full border border-bold-gray px-6 py-4 rounded-lg duration-300 transition-all 
            placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                id="countryOfResidence"
                value={formik.values.countryOfResidence}
                onChange={formik.handleChange}
              >
                {countries.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <img
                src="./select-arrow.svg"
                alt="arrow"
                className="absolute top-2/4 right-8 transition-all duration-300"
                style={{
                  rotate: isOpen ? "180deg" : "0deg",
                }}
              />
            </div>
          }
        />
        <div className="pt-3 space-y-4">
          <PrimaryButton text="Save & Continue" />
          <UnderPrimaryButton />
        </div>
      </form>
    </div>
  );
};

export default ThirdPageComponent;
