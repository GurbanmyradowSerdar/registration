import { useSetRecoilState } from "recoil";
import { pageIndexState } from "store/atoms";

export const useChangeIndexPage = () => {
  const setIndex = useSetRecoilState(pageIndexState);

  return {
    setIndex,
  };
};
