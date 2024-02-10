import { IBankNumberInputThirdPageProps } from "types";

const BankNumberInput = ({
  props,
  label,
  error,
  name,
  register,
  options,
  isCorrectAnswer,
}: IBankNumberInputThirdPageProps) => {
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

      <div className="relative">
        <input
          id={name}
          {...props}
          {...register(name, options)}
          className="w-full border border-bold-gray px-6 py-4 rounded-lg duration-300 transition-all 
        placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl
        max-2xl:px-5 max-2xl:py-3"
        />
        <img
          src="./check.svg"
          alt="check"
          className="w-6 h-6 absolute top-2/4 right-6
    opacity-0  transition-all duration-300"
          style={{
            opacity: isCorrectAnswer ? 1 : 0,
            transform: `translateY(-50%) ${
              isCorrectAnswer ? "scale(1)" : "scale(0.5)"
            }`,
          }}
        />
      </div>
    </div>
  );
};

export default BankNumberInput;

// <div className="relative">
// <input
//   maxLength={12}
//   name="bvn"
//   id="bvn"
//   type="tel"
//   placeholder="Enter BVN"
//   value={formik.values.bvn}
//   onChange={handleChangeInput}
//   className="w-full border border-bold-gray px-6 py-4 rounded-lg duration-300 transition-all
//     placeholder:text-sm focus-within:outline focus-within:outline-primary-color focus-within:shadow-xl
//     max-2xl:px-5 max-2xl:py-3"
// />
// <img
//   src="./check.svg"
//   alt="check"
//   className="w-6 h-6 absolute top-2/4 right-6
//     opacity-0  transition-all duration-300"
//   style={{
//     opacity: isRightInput ? 1 : 0,
//     transform: `translateY(-50%) ${
//       isRightInput ? "scale(1)" : "scale(0.5)"
//     }`,
//   }}
// />
// </div>
