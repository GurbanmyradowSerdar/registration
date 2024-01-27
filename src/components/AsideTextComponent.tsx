import { IClassName } from "types";
import { twMerge as tw } from "tailwind-merge";
import { pageIndexState } from "store/atoms";
import { useRecoilValue } from "recoil";
import { textBlocks } from "data";

const AsideTextComponent = ({ className }: IClassName) => {
  const index = useRecoilValue(pageIndexState);
  const text = textBlocks[index];

  return (
    <article
      className={tw(
        `flex flex-col pl-20 pr-28 pt-16 aside-component flex-[0_0_40%] text-[#fff] relative gap-64
      max-2xl:pl-16 max-2xl:pr-24 max-2xl:gap-48 
      max-xl:pr-16 max-xl:gap-40 max-xl:pt-10
      max-lg:hidden`,
        className
      )}
    >
      <div className="absolute w-full h-full left-0 top-0 bg-[rgba(21,101,216,0.8)] aside-component-bg-icons"></div>
      <nav className="z-10 flex items-end justify-start gap-2">
        <img src="./logo.svg" alt="logo" className="max-xl:w-9 max-xl:h-9" />
        <h2 className="font-Roboto">Oasis.</h2>
      </nav>
      <div className="z-10 flex flex-col gap-5 aside-text-animation" key={text}>
        <div className="flex flex-col">
          <p
            className="font-Gayathri text-8xl leading-[0px] text-[#00DAF7]
          max-xl:text-7xl max-xl:leading-[0px]"
          >
            “
          </p>
          <p
            className="font-Inter text-xl leading-9 pb-5
          max-2xl:leading-8 max-xl:text-lg"
          >
            {text}
          </p>
          <div className="flex items-center gap-2">
            <p
              className="font-Inter text-lg font-medium
            max-xl:text-base"
            >
              Vincent Obi
            </p>
            <img
              src="./check.svg"
              alt="check"
              className="w-5 h-5
            max-xl:w-4 max-xl:h-4"
            />
          </div>
        </div>
        <img
          src="./semi-rectangle.svg"
          alt="shape"
          className="w-10 h-10 self-end
          max-2xl:w-9 max-2xl:h-9 max-xl:w-8 max-xl:h-8"
        />
      </div>
    </article>
  );
};

export default AsideTextComponent;
