import { useState } from "react";
import AsideTextComponent from "./components/AsideTextComponent";
import InteractiveWrapperComponent from "./components/InteractiveWrapperComponent";
import { textBlocks } from "./data";
// import ThirdPageComponent from "./components/pages/3-page";
import FourthPageComponent from "./components/pages/4-page";
// import FirstPageContent from "./components/pages/1-page";
// import SecondPageContent from "./components/pages/2-page";

function App() {
  const [pageIndex, setPageIndex] = useState(3);
  return (
    <main className="flex min-h-screen">
      <AsideTextComponent text={textBlocks[pageIndex]} />
      <InteractiveWrapperComponent pageIndex={pageIndex}>
        {/* <FirstPageContent /> */}
        {/* <SecondPageContent /> */}
        {/* <ThirdPageComponent /> */}
        <FourthPageComponent />
      </InteractiveWrapperComponent>
    </main>
  );
}

export default App;
