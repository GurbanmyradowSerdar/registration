import { countries } from "data";
import { useState } from "react";
import { ILocationInputProps } from "types";

export default function LocationSelect({
  register,
  error,
  getValues,
}: ILocationInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isSelected = getValues("countryOfResidence").length <= 0;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={"countryOfResidence"}
        className="font-medium text-bold-gray
    max-2xl:text-sm"
      >
        Country of residence{" "}
        {error && (
          <span className="text-red-500 text-sm max-2xl:text-xs">{error}</span>
        )}
      </label>
      <div className="relative">
        <select
          className="appearance-none w-full bg-transparent border border-bold-gray px-6 py-4 rounded-lg duration-300 transition-all
            placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl
            max-2xl:px-5 max-2xl:py-3"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          id="countryOfResidence"
          {...register("countryOfResidence", {
            required: {
              message: "Required",
              value: true,
            },
          })}
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
        {isSelected && (
          <p className="absolute top-2/4 left-5 -translate-y-2/4 text-gray-400 -z-10">
            Turkmenistan
          </p>
        )}
      </div>
    </div>
  );
}
