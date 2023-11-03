import { ITextProps } from "../types";

const SubtitleTextComponent = ({ text, className }: ITextProps) => {
  return (
    <p className={`text-[#8692A6] text-lg font-Inter leading-8 ${className}`}>
      {text}
    </p>
  );
};

export default SubtitleTextComponent;
