import MainTitle from "components/common/text/MainTitle";
import SubtitleTextComponent from "components/common/text/SubtitleTextComponent";
import BusinessIcon from "components/pages/1-page/OptionButton/BusinessIcon";
import UserIcon from "components/pages/1-page/OptionButton/UserIcon";
import { IOptionButtonProps } from "types";

export function OptionButton({
  hasUserIcon,
  text,
  title,
  props,
}: IOptionButtonProps) {
  return (
    <button
      {...props}
      className="group shadow-xl rounded-lg p-7 flex items-center justify-between transition-all duration-300 outline outline-[#fff] 
    hover:outline-2 hover:outline-primary-color hover:bg-[#F5F9FF]
    max-2xl:p-6"
    >
      <div
        className="flex items-center justify-center gap-7
      max-lg:gap-12"
      >
        <div className="flex items-center justify-center relative">
          <svg
            width="50"
            height="48"
            viewBox="0 0 50 48"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 fill-[#000]/0 duration-300 transition-all
            group-hover:fill-primary-color"
          >
            <path
              d="M1.09543 18.2329L25 0.865247L48.9046 18.2329L39.7738 46.3344H10.2262L1.09543 18.2329Z"
              stroke="#1565D8"
              strokeWidth="1.4"
            />
          </svg>
          {hasUserIcon ? <UserIcon /> : <BusinessIcon />}
        </div>
        <div className="flex flex-col text-left max-w-[280px]">
          <MainTitle
            text={title}
            className="text-base max-2xl:text-[15px]
          max-xl:text-[15px]"
          />
          <SubtitleTextComponent
            text={text}
            className="text-sm leading-6 max-2xl:text-[13px]
            max-xl:text-[13px]"
          />
        </div>
      </div>
      <img
        src="./arrow-right.svg"
        alt="arrow"
        className="opacity-0 duration-300 transition-opacity group-hover:opacity-100 w-6"
      />
    </button>
  );
}
