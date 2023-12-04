import { memo } from "react";
import { ICustomInputProps } from "../../types";

const CustomInput = ({
  name,
  onChange,
  type,
  value,
  label,
  placeholder,
  maxLength,
  error,
  anotherInput,
  className,
}: ICustomInputProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={name}
        className="font-medium text-bold-gray
      max-2xl:text-sm"
      >
        {label}{" "}
        <span className="text-red-500 text-sm max-2xl:text-xs">{error}</span>
      </label>
      {anotherInput || (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className="border border-bold-gray px-6 py-4 rounded-lg duration-300 transition-all 
        placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl
        max-2xl:px-5 max-2xl:py-3"
        />
      )}
    </div>
  );
};

export default memo(CustomInput);
