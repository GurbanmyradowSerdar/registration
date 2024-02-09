import { useRecoilState } from "recoil";
import { additionalInfoState } from "store/atoms";

export const useGetStateForThirdPage = () => {
  const [info, setInfo] = useRecoilState(additionalInfoState);

  return {
    info,
    setInfo,
  };
};
