import { IInteractiveWrapperProps } from "../types";
import NavigationComponent from "./common/NavigationComponent";
import { navigationInfoArr } from "../data";

const InteractiveWrapperComponent = ({
  children,
  pageIndex,
}: IInteractiveWrapperProps) => {
  return (
    <div className="flex-1 pt-[75px] pr-[91px] flex flex-col">
      <NavigationComponent
        hasBackButton={pageIndex === 0 ? false : true}
        info={navigationInfoArr[pageIndex].info}
        step={navigationInfoArr[pageIndex].step}
        className="pl-14"
      />
      <div className="pl-36">{children}</div>
    </div>
  );
};

export default InteractiveWrapperComponent;
