import React, { FC, useRef } from "react";
import { useTranslation } from "next-i18next";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Container,
  ButtonsAndBandContainer,
  BackwardsButton,
  ForwardButton,
  BandContainer,
  ConveyorBand,
  ChildContainer,
  BulletsContainer,
  Bullet,
} from "./styledComponents";
import useSetupChildrenArray from "./useSetupChildrenArray";
import useCarouselControllers from "./useCarouselControllers";

interface Props {
  cardWidth?: number;
  cardHeight?: number;
  color?: string;
  background?: string;
  disableNavigation?: boolean;
  navButtons?: boolean;
  animatedButtons?: boolean;
  leftMargin?: number;
  rightMargin?: number;
  bullets?: boolean;
  auto?: boolean;
  autoTime?: number;
  transitionTime?: number; // miliseconds
  children: JSX.Element | JSX.Element[];
}

const Carousel: FC<Props> = ({
  cardWidth = 800,
  cardHeight = 300,
  color,
  background,
  disableNavigation = false,
  navButtons = true,
  animatedButtons = true,
  leftMargin = 0,
  rightMargin = 0,
  bullets = true,
  auto = true,
  autoTime = 10000,
  transitionTime = 500,
  children,
}) => {
  const { t } = useTranslation("Carousel");
  const disableNav = useRef<boolean>(disableNavigation);

  const { childrenArray, bulletsArray } = useSetupChildrenArray({
    disableNav,
    children,
  });

  const {
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
  } = useCarouselControllers({
    cardWidth,
    leftMargin,
    rightMargin,
    buttonsVisible: !disableNav.current && navButtons,
    cardsQuantity: childrenArray.current.length,
    auto,
    autoTime,
    transitionTime,
  });

  return (
    <Container>
      <ButtonsAndBandContainer cardWidth={cardWidth} sidesSpace={sidesSpace}>
        <BackwardsButton
          onClick={handleBackwards}
          disabled={disableNavButtons}
          cardHeight={cardHeight}
          colorChosen={color}
          navButtons={navButtons && !disableNav.current}
          animatedButtons={animatedButtons}
          aria-label={t("backwardsButton") as string}
        >
          <KeyboardArrowLeftIcon />
        </BackwardsButton>
        <BandContainer
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          background={background}
        >
          <ConveyorBand
            translateBand={translateBand}
            dragTranslate={dragTranslate}
            bandTransition={bandTransition}
          >
            {childrenArray.current.map((child: JSX.Element, id: number) => {
              return (
                <ChildContainer
                  onTouchEnd={() => touchEnd()}
                  onTouchStart={(e) => touchStart(e)}
                  onTouchMove={(e) => touchMove(e)}
                  onMouseUp={() => touchEnd()}
                  onMouseLeave={() => touchEnd()}
                  onMouseDown={(e) => touchStart(e)}
                  onMouseMove={(e) => touchMove(e)}
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  sidesSpace={sidesSpace}
                  key={`carouselChild${id}`}
                >
                  {child}
                </ChildContainer>
              );
            })}
          </ConveyorBand>
        </BandContainer>
        <ForwardButton
          onClick={handleForward}
          disabled={disableNavButtons}
          cardHeight={cardHeight}
          colorChosen={color}
          navButtons={navButtons && !disableNav.current}
          animatedButtons={animatedButtons}
          aria-label={t("forwardButton") as string}
        >
          <KeyboardArrowRightIcon />
        </ForwardButton>
      </ButtonsAndBandContainer>
      <BulletsContainer>
        {bulletsArray.current.map((i: number, id: number) => {
          return (
            <Bullet
              onClick={() => handleBullet(i)}
              transitionTime={transitionTime}
              selected={handleSelectedBullet(i)}
              bullets={bullets && !disableNav.current}
              color={color}
              key={`reviewCardBullet${i}${id}`}
            />
          );
        })}
      </BulletsContainer>
    </Container>
  );
};

export default Carousel;
