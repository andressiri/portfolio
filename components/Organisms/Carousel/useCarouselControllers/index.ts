import { useEffect, useRef, useState } from "react";
import useResponsiveWidth from "./useResponsiveWidth";
import useInfiniteHandler from "./useInfiniteHandler";
import useAutomaticCarousel from "./useAutomaticCarousel";
import useHandleViewportResizing from "./useHandleViewportResizing";
import useGetNavigationControllers from "./useGetNavigationControllers";
import useGetTouchControllers from "./useGetTouchControllers";

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
  const { sidesSpace, responsiveWidth } = useResponsiveWidth({
    cardWidth,
    leftMargin,
    rightMargin,
    buttonsVisible,
    scrollbarWidth,
  });

  // Variables
  const [translateBand, setTranslateBand] = useState<number>(
    cardsQuantity < 2 ? 0 : responsiveWidth()
  );
  const carouselPosition = useRef<number>(initialSlide ? initialSlide : 1);
  const [bandTransition, setBandTransition] = useState<string>(
    `${transitionTime}ms all`
  );

  useEffect(() => {
    setTranslateBand(cardsQuantity < 2 ? 0 : responsiveWidth() * initialSlide);
  }, [cardsQuantity, initialSlide, responsiveWidth]);

  const { infiniteHandler, disableNavigation } = useInfiniteHandler({
    cardsQuantity,
    transitionTime,
    responsiveWidth,
    setTranslateBand,
    carouselPosition,
    setBandTransition,
  });

  const { handleInterval } = useAutomaticCarousel({
    cardWidth,
    cardsQuantity,
    auto,
    autoTime,
    responsiveWidth,
    setTranslateBand,
    carouselPosition,
    infiniteHandler,
  });

  useHandleViewportResizing({
    responsiveWidth,
    translateBand,
    setTranslateBand,
    carouselPosition,
    handleInterval,
  });

  const { handleForward, handleBackwards, handleBullet, handleSelectedBullet } =
    useGetNavigationControllers({
      cardsQuantity,
      responsiveWidth,
      translateBand,
      setTranslateBand,
      carouselPosition,
      disableNavigation,
      infiniteHandler,
      handleInterval,
    });

  const { dragTranslate, touchEnd, touchStart, touchMove } =
    useGetTouchControllers({
      cardsQuantity,
      autoTime,
      transitionTime,
      carouselPosition,
      setBandTransition,
      disableNavigation,
      handleInterval,
      handleBackwards,
      handleForward,
    });

  return {
    translateBand,
    bandTransition,
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
