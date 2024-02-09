import Divider from "components/common/Divider";
import MainTitle from "components/common/text/MainTitle";
import SubtitleTextComponent from "components/common/text/SubtitleTextComponent";
import { memo } from "react";

function TitleSection() {
  return (
    <div className="space-y-3">
      <MainTitle text="Complete Your Profile!" />
      <SubtitleTextComponent text="For the purpose of industry regulation, your details are required." />
      <Divider />
    </div>
  );
}

export default memo(TitleSection);
