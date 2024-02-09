import { IMainInputThirdPageProps } from "types";

const MainInput = ({
  props,
  label,
  error,
  name,
  register,
  options,
}: IMainInputThirdPageProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-medium text-bold-gray
      max-2xl:text-sm"
      >
        {label}{" "}
        {error && (
          <span className="text-red-500 text-sm max-2xl:text-xs">{error}</span>
        )}
      </label>
      <input
        id={name}
        {...props}
        {...register(name, options)}
        className="border border-bold-gray px-6 py-4 rounded-lg duration-300 transition-all 
        placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl
        max-2xl:px-5 max-2xl:py-3"
      />
    </div>
  );
};

export default MainInput;
