import TitleSection from "components/pages/3-page/TitleSection";
import FormSection from "components/pages/3-page/FormSection";

const ThirdPageComponent = () => {
  return (
    <div
      className="mt-14 space-y-4 max-w-md
    max-2xl:mt-12
    max-xl:max-w-sm
    max-sm:max-w-md"
    >
      <TitleSection />
      <FormSection />
    </div>
  );
};

export default ThirdPageComponent;
