import { useRecoilState } from "recoil";
import { credentialsState } from "store/atoms";

export const useGetStatesForSecondPage = () => {
  const [credentials, setCredentials] = useRecoilState(credentialsState);

  return {
    credentials,
    setCredentials,
  };
};
