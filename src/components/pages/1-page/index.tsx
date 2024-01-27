import { pageIndexState } from "store/atoms";
import MainTitle from "components/common/text/MainTitle";
import SubtitleTextComponent from "components/common/text/SubtitleTextComponent";
import { useSetRecoilState } from "recoil";
import { OptionButton } from "components/pages/1-page/OptionButton";

const FirstPageContent = () => {
  const setIndex = useSetRecoilState(pageIndexState);

  function handleClickIndividualButton() {
    setIndex(1);
  }

  function handleClickBusinessButton() {
    alert("not implemented yet");
  }

  return (
    <div
      className="flex flex-col max-w-md gap-9 mt-36
    max-2xl:gap-7 max-2xl:mt-24
    max-xl:gap-5 max-xl:mt-16
    max-md:max-w-lg
    max-sm:max-w-md"
    >
      {/* Title */}
      <div className="flex flex-col gap-2">
        <MainTitle text="Join us!" />
        <SubtitleTextComponent
          className="leading-9"
          text="To begin this journey, tell us what type of account you’d be opening."
        />
      </div>
      {/* Buttons */}
      <div className="flex flex-col gap-7">
        <OptionButton
          title="Individual"
          text="Personal account to manage all you activities."
          hasUserIcon
          props={{
            onClick: handleClickIndividualButton,
          }}
        />
        <OptionButton
          props={{
            onClick: handleClickBusinessButton,
          }}
          title="Business"
          text="Own or belong to a company, this is for you."
          hasUserIcon={false}
        />
      </div>
    </div>
  );
};

export default FirstPageContent;
