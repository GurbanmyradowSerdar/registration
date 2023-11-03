import { IAsideTextComponent } from "../types";

const AsideTextComponent = ({ className, text }: IAsideTextComponent) => {
  return (
    <article
      className={`${className} flex flex-col pl-20 pr-28 pt-16 aside-component flex-[0_0_40%] text-[#fff] relative gap-64`}
    >
      <div className="absolute w-full h-full left-0 top-0 bg-[rgba(21,101,216,0.8)] aside-component-bg-icons"></div>
      <nav className="z-10 flex items-end justify-start gap-2">
        <img src="./logo.svg" alt="logo" />
        <h2 className="font-Roboto">Oasis.</h2>
      </nav>
      <div className="z-10 flex flex-col gap-5">
        <div className="flex flex-col">
          <p className="font-Gayathri text-8xl leading-[0px] text-[#00DAF7]">
            “
          </p>
          <p className="font-Inter text-xl leading-9 pb-5">{text}</p>
          <div className="flex items-center gap-2">
            <p className="font-Inter text-lg font-medium">Vincent Obi</p>
            <img src="./check.svg" alt="check" className="w-5 h-5" />
          </div>
        </div>
        <img
          src="./semi-rectangle.svg"
          alt="shape"
          className="w-10 h-10 self-end"
        />
      </div>
    </article>
  );
};

export default AsideTextComponent;
