import { useEffect, useCallback, useRef, useState } from "react";

interface Props {
  cardWidth: number;
  cardsQuantity: number;
  auto: boolean;
  autoTime: number;
  responsiveWidth: () => number;
  setTranslateBand: React.Dispatch<React.SetStateAction<number>>;
  carouselPosition: React.MutableRefObject<number>;
  infiniteHandler: () => void;
}

const useAutomaticCarousel = ({
  cardWidth,
  cardsQuantity,
  auto,
  autoTime,
  responsiveWidth,
  setTranslateBand,
  carouselPosition,
  infiniteHandler,
}: Props) => {
  const [restartInterval, setRestartInterval] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (cardsQuantity < 2 || !auto) return;

    intervalRef.current = setInterval(() => {
      setTranslateBand((prev: number) => prev + responsiveWidth());
      carouselPosition.current++;
      infiniteHandler();
    }, autoTime);

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [
    restartInterval,
    carouselPosition,
    cardWidth,
    cardsQuantity,
    auto,
    autoTime,
    responsiveWidth,
    setTranslateBand,
    infiniteHandler,
  ]);

  const handleInterval = useCallback(() => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    if (auto) setRestartInterval((prev: number) => prev + 1);
  }, [auto]);

  return { handleInterval };
};

export default useAutomaticCarousel;
