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
    max-xl:pt-10 max-xl:pr-20"
    >
      <NavigationComponent
        hasBackButton={pageIndex === 0 ? false : true}
        info={navigationInfoArr[pageIndex].info}
        step={navigationInfoArr[pageIndex].step}
        className="pl-14
        max-xl:pl-12"
      />
      <div
        className="pl-36 pb-3
      max-xl:pl-20"
      >
        {children}
      </div>
    </div>
  );
};

export default InteractiveWrapperComponent;
