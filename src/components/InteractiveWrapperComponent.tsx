import { IInteractiveWrapperProps } from "../types";
import NavigationComponent from "./common/NavigationComponent";
import { navigationInfoArr } from "../data";

const InteractiveWrapperComponent = ({
  children,
  pageIndex,
}: IInteractiveWrapperProps) => {
  return (
    <div
      className="flex-1 pt-[75px] pr-[91px] flex flex-col
    max-xl:pt-10 max-xl:pr-20
    max-lg:pt-0 max-lg:pr-0"
    >
      <NavigationComponent
        hasBackButton={pageIndex === 0 ? false : true}
        info={navigationInfoArr[pageIndex].info}
        step={navigationInfoArr[pageIndex].step}
        className="pl-14
        max-xl:pl-12
        max-lg:pr-20 max-lg:mt-5
        max-sm:flex max-sm:items-center max-sm:justify-center max-sm:p-0 max-sm:px-4"
      />
      <div
        className="pl-36 pb-3
      max-xl:pl-20
      max-lg:flex max-lg:items-center max-lg:justify-center max-lg:pl-0 max-lg:pb-10
      max-sm:px-4"
      >
        {children}
      </div>
    </div>
  );
};

export default InteractiveWrapperComponent;
