import { IParentComponent } from "../types";
import NavigationComponent from "./NavigationComponent";

const InteractiveWrapperComponent = ({ children }: IParentComponent) => {
  return (
    <div className="flex-1 pt-[75px] pr-[91px] flex flex-col">
      <NavigationComponent
        hasBackButton={false}
        info="12"
        step="12"
        className="pl-14"
      />
      <div className="pl-32">{children}</div>
    </div>
  );
};

export default InteractiveWrapperComponent;
