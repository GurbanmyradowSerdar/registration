import { ITextProps } from "../../../types";

const SubtitleTextComponent = ({ text, className }: ITextProps) => {
  return (
    <p className={`text-bold-gray text-lg font-Inter leading-8 ${className}`}>
      {text}
    </p>
  );
};

export default SubtitleTextComponent;
