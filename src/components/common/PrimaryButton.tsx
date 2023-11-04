import { ITextProps } from "../../types";

const PrimaryButton = ({ text }: ITextProps) => {
  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-lg bg-primary-color font-Inter font-medium py-4 px-32
      text-white duration-300 transition-all hover:bg-[#1566d8ea] focus-visible:outline focus-visible:outline-2 
      focus-visible:outline-offset-2 focus-visible:outline-primary-color active:bg-primary-color"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
