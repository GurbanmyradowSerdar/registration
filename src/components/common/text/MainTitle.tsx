import { ITextProps } from "types";
import { twMerge as tw } from "tailwind-merge";
import { memo } from "react";

const MainTitle = ({ text, className }: ITextProps) => {
  return (
    <h1
      className={tw(
        `text-black text-3xl font-bold font-Inter
    max-2xl:text-2xl
    max-xl:text-xl`,
        className
      )}
    >
      {text}
    </h1>
  );
};

export default memo(MainTitle);
