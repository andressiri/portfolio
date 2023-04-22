import { useCallback } from "react";

const useScrollingLock = () => {
  const scrollingLock = useCallback(() => {
    const alreadyExists = document.getElementById(
      "temporary-lock-scrolling-stylesheet"
    );
    if (alreadyExists) return;

    const temporaryStylesheet = document.createElement("style");
    temporaryStylesheet.setAttribute(
      "id",
      "temporary-lock-scrolling-stylesheet"
    );
    temporaryStylesheet.innerHTML = `
    * {
      overflow: visible;
      overscroll-behavior: none;
    }
    `;
    document.head.appendChild(temporaryStylesheet);
  }, []);

  return scrollingLock;
};

export default useScrollingLock;
