import { useCallback, useRef, useState } from "react";
import { useScrollingLock, useScrollingUnlock } from "utils/hooks";

interface Props {
  cardsQuantity: number;
  autoTime: number;
  transitionTime: number; // miliseconds
  setBandTransition: React.Dispatch<React.SetStateAction<string>>;
  carouselPosition: React.MutableRefObject<number>;
  disableNavigation: React.MutableRefObject<boolean>;
  handleInterval: () => void;
  handleBackwards: () => void;
  handleForward: () => void;
}

interface IPosition {
  x: number;
  y: number;
}

const useGetTouchControllers = ({
  cardsQuantity,
  autoTime,
  transitionTime,
  carouselPosition,
  setBandTransition,
  disableNavigation,
  handleInterval,
  handleBackwards,
  handleForward,
}: Props) => {
  const startPosition = useRef<IPosition>({ x: 0, y: 0 });
  const isDragging = useRef<boolean>(false);
  const slideHold = useRef<NodeJS.Timeout | null>(null);
  const [dragTranslate, setDragTranslate] = useState<number>(0);
  const scrollingLock = useScrollingLock();
  const scrollingUnlock = useScrollingUnlock();

  const getPosition = useCallback(
    (
      event:
        | React.TouchEvent<HTMLDivElement>
        | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      return event.type.includes("mouse")
        ? {
            x: (event as React.MouseEvent<HTMLDivElement, MouseEvent>).pageX,
            y: (event as React.MouseEvent<HTMLDivElement, MouseEvent>).pageY,
          }
        : {
            x: Math.floor(
              (event as React.TouchEvent<HTMLDivElement>).touches[0].clientX
            ),
            y: Math.floor(
              (event as React.TouchEvent<HTMLDivElement>).touches[0].clientY
            ),
          };
    },
    []
  );

  const touchEnd = useCallback(
    (positionXDif?: number) => {
      if (!isDragging.current) return;

      isDragging.current = false;

      setBandTransition(`${transitionTime}ms all`);
      if (positionXDif) {
        if (positionXDif < -99) handleBackwards();
        if (positionXDif > 99) handleForward();
      }

      // reset
      startPosition.current = { x: 0, y: 0 };
      clearInterval(slideHold.current as NodeJS.Timeout);
      slideHold.current = null;
      scrollingUnlock();
      setDragTranslate(0);
    },
    [
      transitionTime,
      handleBackwards,
      handleForward,
      scrollingUnlock,
      setBandTransition,
    ]
  );

  const touchStart = useCallback(
    (
      event:
        | React.TouchEvent<HTMLDivElement>
        | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (
        disableNavigation.current ||
        carouselPosition.current <= 0 ||
        carouselPosition.current >= cardsQuantity - 1
      )
        return;

      startPosition.current = getPosition(event);
      isDragging.current = true;
      setBandTransition("unset");
      handleInterval();

      //handle slide hold
      slideHold.current = setInterval(() => {
        handleInterval();
      }, autoTime / 2);
    },
    [
      cardsQuantity,
      autoTime,
      carouselPosition,
      getPosition,
      handleInterval,
      setBandTransition,
      disableNavigation,
    ]
  );

  const touchMove = useCallback(
    (
      event:
        | React.TouchEvent<HTMLDivElement>
        | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (!isDragging.current) return;

      const isTouch = !event.type.includes("mouse");

      handleInterval();
      const currentPosition = getPosition(event);
      const positionXDif = startPosition.current.x - currentPosition.x;
      const positionYDif = startPosition.current.y - currentPosition.y;

      if (isTouch && Math.abs(positionYDif) > Math.abs(positionXDif)) {
        scrollingUnlock();
        setDragTranslate(0);
      }

      if (positionXDif < -100 || positionXDif > 100) {
        setDragTranslate(positionXDif);
        touchEnd(positionXDif);
        return;
      }

      if (Math.abs(positionXDif) > 10) {
        if (isTouch) scrollingLock();
        setDragTranslate(positionXDif);
      }
    },
    [getPosition, touchEnd, handleInterval, scrollingLock, scrollingUnlock]
  );

  return {
    dragTranslate,
    touchEnd,
    touchStart,
    touchMove,
  };
};

export default useGetTouchControllers;
