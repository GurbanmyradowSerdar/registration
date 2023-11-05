import { useRecoilValue } from "recoil";
import AsideTextComponent from "./components/AsideTextComponent";
import InteractiveWrapperComponent from "./components/InteractiveWrapperComponent";
import { textBlocks } from "./data";
import ThirdPageComponent from "./components/pages/3-page";
import FourthPageComponent from "./components/pages/4-page";
import FirstPageContent from "./components/pages/1-page";
import SecondPageContent from "./components/pages/2-page";
import { pageIndexState } from "./store/atoms";

function App() {
  const index = useRecoilValue(pageIndexState);
  function getPageComponent() {
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
  }
  return (
    <main
      className="flex min-h-screen
    max-lg:items-center max-lg:justify-center
    max-sm:items-start"
    >
      <AsideTextComponent text={textBlocks[index]} />
      <InteractiveWrapperComponent pageIndex={index}>
        {getPageComponent()}
      </InteractiveWrapperComponent>
    </main>
  );
}

export default App;
