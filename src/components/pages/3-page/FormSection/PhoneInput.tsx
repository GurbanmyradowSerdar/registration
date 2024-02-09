import { useCallback } from "react";
import {
  getCountries,
  getCountryCallingCode,
  Country as CountryCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import Input from "react-phone-number-input/input";
import { IPhoneInputProps } from "types";
import { isPossiblePhoneNumber } from "react-phone-number-input";

export default function PhoneInput({
  country,
  setCountry,
  register,
  getValues,
  setValue,
  error,
}: IPhoneInputProps) {
  const handleChangeCountryCode = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCountry(e.target.value as CountryCode);
      setValue(
        "phoneNumber",
        `+${getCountryCallingCode(e.target.value as CountryCode)}`
      );
    },
    []
  );

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={"phoneNumber"}
        className="font-medium text-bold-gray
    max-2xl:text-sm"
      >
        Phone number{" "}
        {error && (
          <span className="text-red-500 text-sm max-2xl:text-xs">{error}</span>
        )}
      </label>
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
          value={getValues("phoneNumber")}
          className="border border-bold-gray pr-6 pl-44 py-4 rounded-lg duration-300 transition-all
          placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl
          relative w-full max-2xl:pr-5 max-2xl:py-3"
          {...register("phoneNumber", {
            required: {
              message: "Required",
              value: true,
            },
            validate: (value) => {
              if (!isPossiblePhoneNumber(value)) {
                return "Phone number not valid";
              }
            },
          })}
          onChange={(e: string) => setValue("phoneNumber", e)}
        />
      </div>
    </div>
  );
}
