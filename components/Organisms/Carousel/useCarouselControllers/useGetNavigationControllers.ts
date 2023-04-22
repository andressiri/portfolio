import { useCallback } from "react";

interface Props {
  cardsQuantity: number;
  responsiveWidth: () => number;
  translateBand: number;
  setTranslateBand: React.Dispatch<React.SetStateAction<number>>;
  carouselPosition: React.MutableRefObject<number>;
  disableNavigation: React.MutableRefObject<boolean>;
  infiniteHandler: () => void;
  handleInterval: () => void;
}

const useGetNavigationControllers = ({
  cardsQuantity,
  responsiveWidth,
  translateBand,
  setTranslateBand,
  carouselPosition,
  disableNavigation,
  infiniteHandler,
  handleInterval,
}: Props) => {
  const handleForward = useCallback(() => {
    if (disableNavigation.current) return;

    setTranslateBand((prev: number) => prev + responsiveWidth());
    handleInterval();
    carouselPosition.current++;
    infiniteHandler();
  }, [
    carouselPosition,
    disableNavigation,
    handleInterval,
    responsiveWidth,
    setTranslateBand,
    infiniteHandler,
  ]);

  const handleBackwards = useCallback(() => {
    if (disableNavigation.current) return;

    setTranslateBand((prev: number) => prev - responsiveWidth());
    handleInterval();
    carouselPosition.current--;
    infiniteHandler();
  }, [
    carouselPosition,
    disableNavigation,
    handleInterval,
    responsiveWidth,
    setTranslateBand,
    infiniteHandler,
  ]);

  const handleBullet = useCallback(
    (position: number) => {
      if (disableNavigation.current) return;

      setTranslateBand(position * responsiveWidth());
      handleInterval();
      carouselPosition.current = position;
    },
    [
      carouselPosition,
      disableNavigation,
      handleInterval,
      responsiveWidth,
      setTranslateBand,
    ]
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

  return {
    handleForward,
    handleBackwards,
    handleBullet,
    handleSelectedBullet,
  };
};

export default useGetNavigationControllers;
