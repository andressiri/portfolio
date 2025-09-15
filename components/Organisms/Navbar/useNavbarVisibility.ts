import { Dispatch, useRef, useEffect, useMemo, SetStateAction } from "react";

const useNavbarVisibility = (
  visibilitySetter: Dispatch<SetStateAction<boolean>>
) => {
  const navbarRef = useRef<HTMLElement | null>(null);

  const observer = useMemo(() => {
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    )
      return null;

    return new IntersectionObserver(([entry]) => {
      visibilitySetter(entry.isIntersecting);
    });
  }, [visibilitySetter]);

  useEffect(() => {
    if (!navbarRef.current || !observer) return;

    observer.observe(navbarRef.current);

    return () => observer.disconnect();
  }, [observer]);

  return { navbarRef };
};

export default useNavbarVisibility;
