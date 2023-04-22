import { useEffect, useRef } from "react";

interface Props {
  cardWidth: number;
  cardsQuantity: number;
  transitionTime: number; // miliseconds
  responsiveWidth: () => number;
  translateBand: number;
  setTranslateBand: React.Dispatch<React.SetStateAction<number>>;
  carouselPosition: React.MutableRefObject<number>;
  setBandTransition: React.Dispatch<React.SetStateAction<string>>;
}

const useInfiniteHandler = ({
  cardWidth,
  cardsQuantity,
  transitionTime,
  responsiveWidth,
  translateBand,
  setTranslateBand,
  carouselPosition,
  setBandTransition,
}: Props) => {
  const disableNavigation = useRef<boolean>(false);

  useEffect(() => {
    const handleReposition = (newTranslate: number, newPosition: number) => {
      disableNavigation.current = true;

      setTimeout(() => {
        setBandTransition("unset");
        setTranslateBand(newTranslate);
        carouselPosition.current = newPosition;
      }, transitionTime);

      setTimeout(() => {
        setBandTransition(`${transitionTime}ms all`);
        disableNavigation.current = false;
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
    carouselPosition,
    cardWidth,
    cardsQuantity,
    transitionTime,
    setTranslateBand,
    responsiveWidth,
    setBandTransition,
  ]);

  return { disableNavigation };
};

export default useInfiniteHandler;
