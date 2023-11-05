import { pageIndexState } from "../../../store/atoms";
import MainTitle from "../../common/text/MainTitle";
import SubtitleTextComponent from "../../common/text/SubtitleTextComponent";
import { useSetRecoilState } from "recoil";
import { OptionButton } from "./OptionButton";

const FirstPageContent = () => {
  const setIndex = useSetRecoilState(pageIndexState);

  return (
    <div className="flex flex-col max-w-md gap-9 mt-36">
      <div className="flex flex-col gap-2">
        <MainTitle text="Join us!" />
        <SubtitleTextComponent
          className="leading-9"
          text="To begin this journey, tell us what type of account you’d be opening."
        />
      </div>
      <div className="flex flex-col gap-7">
        <OptionButton
          title="Individual"
          text="Personal account to manage all you activities."
          hasUserIcon
          props={{
            onClick: () => {
              setIndex(1);
            },
          }}
        />
        <OptionButton
          props={{
            onClick: () => {
              alert("not implemented yet");
            },
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
