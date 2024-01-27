import { IClassName } from "types";
import { useRecoilValue } from "recoil";
import { pageIndexState } from "store/atoms";
import ComponentWithButton from "components/common/NavigationComponent/ComponentWithButton";
import ComponentWithoutButton from "components/common/NavigationComponent/ComponentWithoutButton";

const NavigationComponent = ({ className }: IClassName) => {
  const index = useRecoilValue(pageIndexState);
  const hasBackButton = index === 0 ? false : true;

  if (hasBackButton) {
    return <ComponentWithButton className={className} />;
  }

  return <ComponentWithoutButton className={className} />;
};

export default NavigationComponent;
