import { ITextProps } from "../../../types";

const SubtitleTextComponent = ({ text, className }: ITextProps) => {
  return (
    <p
      className={`text-bold-gray text-lg font-Inter leading-8 ${className}
    max-2xl:text-base max-2xl:leading-7
    max-xl:text-sm max-xl:leading-6`}
    >
      {text}
    </p>
  );
};

export default SubtitleTextComponent;
