import { INavigationComponent } from "../types";

const NavigationComponent = ({
  hasBackButton,
  info,
  step,
  className,
}: INavigationComponent) => {
  return hasBackButton ? (
    <></>
  ) : (
    <div className={`${className} flex items-center justify-end font-Inter`}>
      <p className="text-[#8692A6] text-lg">
        Already have an account?{" "}
        <span className="text-[#1565D8] font-medium cursor-pointer">
          Sign in
        </span>
      </p>
    </div>
  );
};

export default NavigationComponent;
