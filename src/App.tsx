import { useRecoilValue } from "recoil";
import AsideTextComponent from "components/AsideTextComponent";
import InteractiveWrapperComponent from "components/InteractiveWrapperComponent";
import { pageIndexState } from "store/atoms";
import { useGetPage } from "hooks/useGetPage";

function App() {
  const index = useRecoilValue(pageIndexState);
  const PageComponent = useGetPage(index);

  return (
    <main
      className="flex min-h-screen
    max-lg:items-center max-lg:justify-center
    max-sm:items-start"
    >
      <AsideTextComponent />
      <InteractiveWrapperComponent>{PageComponent}</InteractiveWrapperComponent>
    </main>
  );
}

export default App;
