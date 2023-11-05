import { ITextProps } from "../../../types";

const MainTitle = ({ text, className }: ITextProps) => {
  return (
    <h1
      className={`text-black text-3xl font-bold font-Inter ${className}
    max-2xl:text-2xl
    max-xl:text-xl`}
    >
      {text}
    </h1>
  );
};

export default MainTitle;
