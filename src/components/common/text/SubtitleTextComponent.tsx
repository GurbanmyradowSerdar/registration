import { ITextProps } from "types";
import { twMerge as tw } from "tailwind-merge";
import { memo } from "react";

const SubtitleTextComponent = ({ text, className }: ITextProps) => {
  return (
    <p
      className={tw(
        `text-bold-gray text-lg font-Inter leading-8
    max-2xl:text-base max-2xl:leading-7
    max-xl:text-sm max-xl:leading-6`,
        className
      )}
    >
      {text}
    </p>
  );
};

export default memo(SubtitleTextComponent);
