import { useCallback, useRef } from "react";

interface Props {
  cardsQuantity: number;
  transitionTime: number; // miliseconds
  responsiveWidth: () => number;
  setTranslateBand: React.Dispatch<React.SetStateAction<number>>;
  carouselPosition: React.MutableRefObject<number>;
  setBandTransition: React.Dispatch<React.SetStateAction<string>>;
}

const useInfiniteHandler = ({
  cardsQuantity,
  transitionTime,
  responsiveWidth,
  setTranslateBand,
  carouselPosition,
  setBandTransition,
}: Props) => {
  const disableNavigation = useRef<boolean>(false);

  const infiniteHandler = useCallback(() => {
    const handleReposition = (newTranslate: number, newPosition: number) => {
      disableNavigation.current = true;

      setTimeout(() => {
        setBandTransition("unset");
        setTranslateBand(newTranslate);
        carouselPosition.current = newPosition;
      }, transitionTime - 20);

      setTimeout(() => {
        setBandTransition(`${transitionTime}ms all`);
        disableNavigation.current = false;
      }, transitionTime + 20);
    };

    if (cardsQuantity < 2) return;

    if (carouselPosition.current === 0) {
      const newTranslate = responsiveWidth() * (cardsQuantity - 2);
      handleReposition(newTranslate, cardsQuantity - 2);
      return;
    }

    if (carouselPosition.current > cardsQuantity - 2) {
      handleReposition(responsiveWidth(), 1);
      return;
    }
  }, [
    carouselPosition,
    cardsQuantity,
    transitionTime,
    setTranslateBand,
    responsiveWidth,
    setBandTransition,
  ]);

  return { infiniteHandler, disableNavigation };
};

export default useInfiniteHandler;
