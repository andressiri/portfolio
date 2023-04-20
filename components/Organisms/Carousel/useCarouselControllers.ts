import React, {
  useEffect,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { GeneralContext } from "contexts";
import { useTheme } from "@mui/material";

interface Props {
  cardWidth: number;
  leftMargin: number;
  rightMargin: number;
  buttonsVisible: boolean;
  cardsQuantity: number;
  auto: boolean;
  autoTime: number;
  transitionTime: number; // miliseconds
  initialSlide: number;
  scrollbarWidth: number;
}

const useCarouselControllers = ({
  cardWidth,
  leftMargin,
  rightMargin,
  buttonsVisible,
  cardsQuantity,
  auto,
  autoTime,
  transitionTime,
  initialSlide,
  scrollbarWidth,
}: Props) => {
  const { viewportWidth } = useContext(GeneralContext);
  const theme = useTheme();

  // Handle options props and changes
  const sidesSpace = useMemo(() => {
    const space = buttonsVisible
      ? theme.custom.navButtons.height * 2 +
        leftMargin +
        rightMargin +
        scrollbarWidth
      : leftMargin + rightMargin + scrollbarWidth;

    return space;
  }, [
    leftMargin,
    rightMargin,
    scrollbarWidth,
    buttonsVisible,
    theme.custom.navButtons.height,
  ]);

  const responsiveWidth = useCallback(() => {
    if (viewportWidth >= cardWidth + sidesSpace) return cardWidth;
    return viewportWidth - sidesSpace;
  }, [viewportWidth, cardWidth, sidesSpace]);

  // Variables
  const [translateBand, setTranslateBand] = useState<number>(
    cardsQuantity < 2 ? 0 : responsiveWidth()
  );
  const carouselPosition = useRef<number>(initialSlide ? initialSlide : 1);
  const [bandTransition, setBandTransition] = useState<string>(
    `${transitionTime}ms all`
  );
  const [disableNavButtons, setDisableNavButtons] = useState<boolean>(false);
  const [restartInterval, setRestartInterval] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTranslateBand(cardsQuantity < 2 ? 0 : responsiveWidth() * initialSlide);
  }, [cardsQuantity, initialSlide, responsiveWidth]);

  // Reposition for infinite carousel
  useEffect(() => {
    const handleReposition = (newTranslate: number, newPosition: number) => {
      setDisableNavButtons(true);
      setTimeout(() => {
        setBandTransition("unset");
        setTranslateBand(newTranslate);
        carouselPosition.current = newPosition;
      }, transitionTime);
      setTimeout(() => {
        setBandTransition(`${transitionTime}ms all`);
        setDisableNavButtons(false);
      }, transitionTime + 20);
    };

    if (cardsQuantity < 2) return;

    if (translateBand === 0) {
      const newTranslate = responsiveWidth() * (cardsQuantity - 2);
      handleReposition(newTranslate, cardsQuantity - 2);
      return;
    }

    if (translateBand >= responsiveWidth() * (cardsQuantity - 1)) {
      handleReposition(responsiveWidth(), 1);
      return;
    }
  }, [
    translateBand,
    cardWidth,
    cardsQuantity,
    transitionTime,
    responsiveWidth,
  ]);

  // Carousel automation
  useEffect(() => {
    if (cardsQuantity < 2 || !auto) return;

    intervalRef.current = setInterval(() => {
      setTranslateBand((prev: number) => prev + responsiveWidth());
      carouselPosition.current++;
    }, autoTime);

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [
    restartInterval,
    cardWidth,
    cardsQuantity,
    auto,
    autoTime,
    responsiveWidth,
  ]);

  const handleInterval = useCallback(() => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    if (auto) setRestartInterval((prev: number) => prev + 1);
  }, [auto]);

  // Handle viewport resizing
  useEffect(() => {
    setTranslateBand(responsiveWidth() * carouselPosition.current);
    handleInterval();
  }, [viewportWidth, handleInterval, responsiveWidth]);

  useEffect(() => {
    if (translateBand !== responsiveWidth() * carouselPosition.current) {
      setTranslateBand(responsiveWidth() * carouselPosition.current);
    }
  }, [translateBand, responsiveWidth]);

  // Controllers
  const handleForward = useCallback(() => {
    setTranslateBand((prev: number) => prev + responsiveWidth());
    handleInterval();
    carouselPosition.current++;
  }, [handleInterval, responsiveWidth]);

  const handleBackwards = useCallback(() => {
    setTranslateBand((prev: number) => prev - responsiveWidth());
    handleInterval();
    carouselPosition.current--;
  }, [handleInterval, responsiveWidth]);

  const handleBullet = useCallback(
    (position: number) => {
      setTranslateBand(position * responsiveWidth());
      handleInterval();
      carouselPosition.current = position;
    },
    [handleInterval, responsiveWidth]
  );

  const handleSelectedBullet = useCallback(
    (id: number) => {
      if (id === 1) {
        return (
          translateBand / responsiveWidth() === id ||
          translateBand === responsiveWidth() * (cardsQuantity - 1)
        );
      }

      if (id === cardsQuantity - 2) {
        return translateBand / responsiveWidth() === id || translateBand === 0;
      }

      return translateBand / responsiveWidth() === id;
    },
    [translateBand, cardsQuantity, responsiveWidth]
  );

  // Grab/swipe slide and hold controllers
  const startPosition = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const slideHold = useRef<NodeJS.Timeout | null>(null);
  const [dragTranslate, setDragTranslate] = useState<number>(0);

  const getPositionX = useCallback(
    (
      event:
        | React.TouchEvent<HTMLDivElement>
        | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      return event.type.includes("mouse")
        ? (event as React.MouseEvent<HTMLDivElement, MouseEvent>).pageX
        : (event as React.TouchEvent<HTMLDivElement>).touches[0].clientX;
    },
    []
  );

  const touchEnd = useCallback(() => {
    if (!isDragging.current) return;

    startPosition.current = 0;
    isDragging.current = false;
    setBandTransition(`${transitionTime}ms all`);
    clearInterval(slideHold.current as NodeJS.Timeout);
    slideHold.current = null;

    if (dragTranslate < -50) handleBackwards();
    if (dragTranslate > 50) handleForward();
    if (dragTranslate !== 0) setDragTranslate(0);
  }, [dragTranslate, transitionTime, handleBackwards, handleForward]);

  const touchStart = useCallback(
    (
      event:
        | React.TouchEvent<HTMLDivElement>
        | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      startPosition.current = getPositionX(event);
      isDragging.current = true;
      setBandTransition("unset");
      handleInterval();

      //handle slide hold
      slideHold.current = setInterval(() => {
        handleInterval();
      }, autoTime / 2);
    },
    [autoTime, getPositionX, handleInterval]
  );

  const touchMove = useCallback(
    (
      event:
        | React.TouchEvent<HTMLDivElement>
        | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (!isDragging.current) return;

      handleInterval();
      const currentPosition = getPositionX(event);
      const positionDif = startPosition.current - currentPosition;

      if (positionDif < -100 || positionDif > 100) {
        touchEnd();
        return;
      }

      setDragTranslate(positionDif);
    },
    [getPositionX, touchEnd, handleInterval]
  );

  return {
    translateBand,
    bandTransition,
    disableNavButtons,
    sidesSpace,
    dragTranslate,
    handleForward,
    handleBackwards,
    handleBullet,
    handleSelectedBullet,
    touchEnd,
    touchStart,
    touchMove,
  };
};

export default useCarouselControllers;
