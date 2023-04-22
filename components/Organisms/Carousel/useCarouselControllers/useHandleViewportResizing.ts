import { useEffect, useContext } from "react";
import { GeneralContext } from "contexts";

interface Props {
  responsiveWidth: () => number;
  translateBand: number;
  setTranslateBand: React.Dispatch<React.SetStateAction<number>>;
  carouselPosition: React.MutableRefObject<number>;
  handleInterval: () => void;
}

const useHandleViewportResizing = ({
  responsiveWidth,
  translateBand,
  setTranslateBand,
  carouselPosition,
  handleInterval,
}: Props) => {
  const { viewportWidth } = useContext(GeneralContext);

  useEffect(() => {
    setTranslateBand(responsiveWidth() * carouselPosition.current);
    handleInterval();
  }, [
    viewportWidth,
    carouselPosition,
    responsiveWidth,
    setTranslateBand,
    handleInterval,
  ]);

  useEffect(() => {
    if (translateBand !== responsiveWidth() * carouselPosition.current) {
      setTranslateBand(responsiveWidth() * carouselPosition.current);
    }
  }, [translateBand, carouselPosition, responsiveWidth, setTranslateBand]);
};

export default useHandleViewportResizing;
