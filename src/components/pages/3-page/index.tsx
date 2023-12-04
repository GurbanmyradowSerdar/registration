import { useFormik } from "formik";
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
import { useState, useCallback } from "react";
import PrimaryButton from "../../common/buttons/PrimaryButton";
import { countries } from "../../../data";
import UnderPrimaryButton from "../../common/buttons/UnderPrimaryButton";
import { useSetRecoilState, useRecoilState } from "recoil";
import { pageIndexState, additionalInfoState } from "../../../store/atoms";
import TitleSection from "./TitleSection";

const ThirdPageComponent = () => {
  const [country, setCountry] = useState<CountryCode>("TM");
  const [isOpen, setIsOpen] = useState(false);
  const setIndex = useSetRecoilState(pageIndexState);
  const [info, setInfo] = useRecoilState(additionalInfoState);
  const [disabled, setDisabled] = useState(false);

  const formik = useFormik<TFormikInitialValuesThirdPage>({
    initialValues: {
      address: info.address,
      countryOfResidence: info.countryOfResidence,
      phoneNumber:
        info.phoneNumber.length > 0
          ? info.phoneNumber
          : `+${getCountryCallingCode(country)}`,
    },
    validate,
    onSubmit: (values) => {
      setDisabled(true);
      alert(` 
        phone number: ${values.phoneNumber}
        address: ${values.address}
        country of residence : ${values.countryOfResidence}`);
      // ! going to next page
      setIndex(3);
      setInfo({
        address: values.address,
        countryOfResidence: values.countryOfResidence,
        phoneNumber: values.phoneNumber,
      });
    },
  });

  const handleChangeInput = useCallback(formik.handleChange, []);

  const handleChangePhoneNumber = useCallback(
    (e: string) =>
      formik.setValues({
        ...formik.values,
        phoneNumber: e as string,
      }),
    []
  );

  const handleChangeCountryCode = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCountry(e.target.value as CountryCode);
      formik.setValues(
        {
          ...formik.values,
          phoneNumber: `+${getCountryCallingCode(
            e.target.value as CountryCode
          )}`,
        },
        false
      );
    },
    []
  );

  return (
    <div
      className="mt-14 space-y-4 max-w-md
    max-2xl:mt-12
    max-xl:max-w-sm
    max-sm:max-w-xs"
    >
      <TitleSection />
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-6
      max-2xl:space-y-5"
      >
        <CustomInput
          label="Phone number"
          name="phoneNumber"
          className="flex"
          error={formik.errors.phoneNumber}
          anotherInput={
            <div className="relative">
              <select
                className="absolute top-2/4 -translate-y-2/4 left-1 z-10 flex w-40 outline-none bg-transparent"
                value={country}
                onChange={handleChangeCountryCode}
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
                relative w-full
                max-2xl:pr-5 max-2xl:py-3"
                onChange={handleChangePhoneNumber}
              />
            </div>
          }
        />
        <CustomInput
          label="Your address"
          name="address"
          value={formik.values.address}
          onChange={handleChangeInput}
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
                className="appearance-none w-full bg-transparent border border-bold-gray px-6 py-4 rounded-lg duration-300 transition-all 
            placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl
            max-2xl:px-5 max-2xl:py-3"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                id="countryOfResidence"
                value={formik.values.countryOfResidence}
                onChange={handleChangeInput}
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
          <PrimaryButton text="Save & Continue" disabled={disabled} />
          <UnderPrimaryButton />
        </div>
      </form>
    </div>
  );
};

export default ThirdPageComponent;
