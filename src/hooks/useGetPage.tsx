import FirstPageContent from "components/pages/1-page";
import SecondPageContent from "components/pages/2-page";
import ThirdPageComponent from "components/pages/3-page";
import FourthPageComponent from "components/pages/4-page";

export const useGetPage = (index: number) => {
  switch (index) {
    case 0:
      return <FirstPageContent />;
    case 1:
      return <SecondPageContent />;
    case 2:
      return <ThirdPageComponent />;
    case 3:
      return <FourthPageComponent />;
    default:
      return <FirstPageContent />;
  }
};
