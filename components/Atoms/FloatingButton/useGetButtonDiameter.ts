import { useState, useEffect, useRef, useMemo } from "react";

const useGetButtonDiameter = () => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [buttonDiameter, setButtonDiameter] = useState(1160);

  const observer = useMemo(() => {
    if (typeof window === "undefined" || typeof ResizeObserver === "undefined")
      return null;

    return new ResizeObserver(([entry]) => {
      setButtonDiameter(entry.contentRect.width);
    });
  }, []);

  useEffect(() => {
    if (!buttonRef.current || !observer) return;

    observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, [observer]);

  return { buttonRef, buttonDiameter };
};

export default useGetButtonDiameter;
