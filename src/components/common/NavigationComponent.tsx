import { INavigationComponent } from "../../types";

const NavigationComponent = ({
  hasBackButton,
  info,
  step,
  className,
}: INavigationComponent) => {
  return hasBackButton ? (
    <div
      className={`flex items-center justify-between font-Inter ${className}`}
    >
      <button className="flex items-center justify-center gap-2 group">
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.86251 2.225L8.37918 0.75L0.137512 9L8.38751 17.25L9.86251 15.775L3.08751 9L9.86251 2.225Z"
            className="fill-bold-gray transition-colors duration-300 group-hover:fill-[#626973] group-active:fill-bold-gray"
          />
        </svg>
        <p className="text-bold-gray font-semibold text-lg transition-colors duration-300 group-hover:text-[#626973] group-active:text-bold-gray">
          Back
        </p>
      </button>
      <div className="flex flex-col gap-1">
        <p className="text-[#BDBDBD] font-medium text-sm uppercase">
          step {step}/03
        </p>
        <p className="text-bold-gray font-semibold">{info}</p>
      </div>
    </div>
  ) : (
    <div className={`${className} flex items-center justify-end font-Inter`}>
      <p className="text-bold-gray text-lg">
        Already have an account?{" "}
        <span className="text-[#1565D8] font-medium cursor-pointer">
          Sign in
        </span>
      </p>
    </div>
  );
};

export default NavigationComponent;