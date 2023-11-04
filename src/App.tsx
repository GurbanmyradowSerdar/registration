import { useState } from "react";
import AsideTextComponent from "./components/AsideTextComponent";
import InteractiveWrapperComponent from "./components/InteractiveWrapperComponent";
import { textBlocks } from "./data";
// import FirstPageContent from "./components/1-page";
import SecondPageContent from "./components/2-page";

function App() {
  const [pageIndex, setPageIndex] = useState(1);
  return (
    <main className="flex min-h-screen">
      <AsideTextComponent text={textBlocks[pageIndex]} />
      <InteractiveWrapperComponent pageIndex={pageIndex}>
        {/* <FirstPageContent /> */}
        <SecondPageContent />
      </InteractiveWrapperComponent>
    </main>
  );
}

export default App;
