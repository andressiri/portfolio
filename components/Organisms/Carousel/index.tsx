import React, { FC, useEffect, useRef, useState } from "react";
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
  CustomBulletsContainer,
  CustomBulletContainer,
  BulletsContainer,
  Bullet,
} from "./styledComponents";
import useSetupChildrenArray from "./useSetupChildrenArray";
import useCarouselControllers from "./useCarouselControllers";
import { CSSObject } from "@mui/material";

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
  customBullets?: {
    array: JSX.Element[];
    container: CSSObject;
    bulletContainer: CSSObject;
  };
  auto?: boolean;
  autoTime?: number;
  transitionTime?: number; // miliseconds
  initialSlide?: number;
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
  customBullets,
  auto = true,
  autoTime = 10000,
  transitionTime = 500,
  initialSlide = 1,
  children,
}) => {
  const { t } = useTranslation("Carousel");
  const disableNav = useRef<boolean>(disableNavigation);
  const [forceReload, setForceReload] = useState<number>(1); // required to avoid error because of differences between SSR and CSR

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
    initialSlide,
  });

  useEffect(() => {
    setForceReload((prev: number) => prev + 1);
  }, []);

  return (
    <Container
      sidesSpace={sidesSpace}
      navButtons={navButtons && !disableNav.current}
    >
      <ButtonsAndBandContainer
        cardWidth={cardWidth}
        sidesSpace={sidesSpace}
        navButtons={navButtons && !disableNav.current}
      >
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
          sidesSpace={sidesSpace}
        >
          <ConveyorBand
            translateBand={forceReload > 1 ? translateBand : 0}
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
      {customBullets ? (
        <CustomBulletsContainer customStyles={customBullets.container}>
          {customBullets.array.map((bullet: JSX.Element, id: number) => {
            return (
              <CustomBulletContainer
                onClick={() => handleBullet(id + 1)}
                customStyles={customBullets.bulletContainer}
                transitionTime={transitionTime}
                selected={handleSelectedBullet(id + 1)}
                bullets={bullets && !disableNav.current}
                key={`carouselCustomBullet${id}`}
              >
                {bullet}
              </CustomBulletContainer>
            );
          })}
        </CustomBulletsContainer>
      ) : (
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
      )}
    </Container>
  );
};

export default Carousel;
