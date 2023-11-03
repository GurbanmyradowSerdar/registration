import { useState } from "react";
import AsideTextComponent from "./components/AsideTextComponent";
import InteractiveWrapperComponent from "./components/InteractiveWrapperComponent";
import { textBlocks } from "./data";
import FirstPageContent from "./components/1-page";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <main className="flex min-h-screen">
      <AsideTextComponent text={textBlocks[pageIndex]} />
      <InteractiveWrapperComponent>
        <FirstPageContent />
      </InteractiveWrapperComponent>
    </main>
  );
}

export default App;
