import { useCallback } from "react";

const useScrollingUnlock = () => {
  const scrollingUnlock = useCallback(() => {
    const temporaryStylesheet = document.getElementById(
      "temporary-lock-scrolling-stylesheet"
    );
    if (temporaryStylesheet) document.head.removeChild(temporaryStylesheet);
  }, []);

  return scrollingUnlock;
};

export default useScrollingUnlock;
