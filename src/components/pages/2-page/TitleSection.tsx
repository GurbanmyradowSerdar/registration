import Divider from "../../common/Divider";
import MainTitle from "../../common/text/MainTitle";
import SubtitleTextComponent from "../../common/text/SubtitleTextComponent";
import { memo } from "react";

function TitleSection() {
  return (
    <>
      <div className="space-y-2">
        <MainTitle text="Register Individual Accaunt!" />
        <SubtitleTextComponent text="For the purpose of industry regulation, your details are required." />
      </div>
      <Divider />
    </>
  );
}

export default memo(TitleSection);
