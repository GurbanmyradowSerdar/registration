import { useCallback, useState } from "react";
import { TVisible } from "types";

export const usePasswordVisibility = () => {
  const [visible, setVisible] = useState<TVisible>("password");

  const togglePasswordVisibility = useCallback(() => {
    setVisible((prev) => (prev === "text" ? "password" : "text"));
  }, []);

  return {
    visible,
    togglePasswordVisibility,
  };
};
