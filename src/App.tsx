import { useState } from "react";
import AsideTextComponent from "./components/AsideTextComponent";
import InteractiveWrapperComponent from "./components/InteractiveWrapperComponent";
import { textBlocks } from "./data";
import ThirdPageComponent from "./components/pages/3-page";
// import FirstPageContent from "./components/pages/1-page";
// import SecondPageContent from "./components/pages/2-page";

function App() {
  const [pageIndex, setPageIndex] = useState(2);
  return (
    <main className="flex min-h-screen">
      <AsideTextComponent text={textBlocks[pageIndex]} />
      <InteractiveWrapperComponent pageIndex={pageIndex}>
        {/* <FirstPageContent /> */}
        {/* <SecondPageContent /> */}
        <ThirdPageComponent />
      </InteractiveWrapperComponent>
    </main>
  );
}

export default App;
