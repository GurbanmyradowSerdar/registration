import { useRecoilState, useSetRecoilState } from "recoil";
import { credentialsState, pageIndexState } from "store/atoms";

export const useGetStatesFromSecondPage = () => {
  const setIndex = useSetRecoilState(pageIndexState);
  const [credentials, setCredentials] = useRecoilState(credentialsState);

  return {
    setIndex,
    credentials,
    setCredentials,
  };
};
