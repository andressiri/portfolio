import React, { useCallback, useEffect, useRef } from "react";

interface Props {
  disableNav: React.MutableRefObject<boolean>;
  children: JSX.Element | JSX.Element[];
}

const useSetupChildrenArray = ({ disableNav, children }: Props) => {
  const bulletsArray = useRef<number[]>([]);

  const createChildrenArray = useCallback((): JSX.Element[] => {
    if ("props" in children) {
      if ("children" in children.props) return children.props.children;
      return [children];
    }

    return children.map((child: JSX.Element) => child);
  }, [children]);

  const childrenArray = useRef(createChildrenArray());

  useEffect(() => {
    if (childrenArray.current.length < 2) {
      disableNav.current = true;
      return;
    }

    if (childrenArray.current.length === createChildrenArray().length + 2)
      return;

    childrenArray.current.unshift({
      ...childrenArray.current[childrenArray.current.length - 1],
      key: "addLastReviewCardAtStart",
    } as JSX.Element);

    childrenArray.current.push({
      ...childrenArray.current[1],
      key: "addFirstReviewCardAtEnd",
    } as JSX.Element);

    console.log("childrenArray inside  effect");
    console.log(childrenArray.current);
    for (let i = 1; i < childrenArray.current.length - 1; i++) {
      bulletsArray.current.push(i);
    }
  }, [disableNav, createChildrenArray]);

  return {
    childrenArray,
    bulletsArray,
  };
};

export default useSetupChildrenArray;
