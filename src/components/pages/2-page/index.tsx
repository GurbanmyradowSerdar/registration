import TitleSection from "components/pages/3-page/TitleSection";
import FormSection from "components/pages/2-page/FormSection";

const SecondPageContent = () => {
  return (
    <div
      className="mt-14 space-y-4 max-w-md
    max-xl:max-w-sm
    max-sm:max-w-md"
    >
      <TitleSection />
      <FormSection />
    </div>
  );
};

export default SecondPageContent;
