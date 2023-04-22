import { FC, useState } from "react";
import { useTranslation } from "next-i18next";
import { Tooltip } from "components/Atoms";
import { Container, StyledIconContainer } from "./styledComponents";
import useDragControllers from "./useDragControllers";
import { TooltipProps } from "typings/tooltip";
import { CSSObject } from "@mui/material";
import { useScrollingLock } from "utils/hooks";

interface Props {
  icon: JSX.Element;
  tooltipText: string;
  tooltipProps?: TooltipProps;
  href?: string;
  onClick?: () => void;
  sx?: CSSObject;
  initialPosition?: "topLeft" | "topRight" | "bottomRight" | "bottomLeft";
}
const FloatingButton: FC<Props> = ({
  icon,
  tooltipText,
  tooltipProps,
  href,
  onClick,
  sx,
  initialPosition = "bottomRight",
}) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);
  const dragControllers = useDragControllers();
  const { top, left, touchStart, isDragging, tooltipPosition } =
    dragControllers;
  const { t } = useTranslation("buttons");
  const scrollingLock = useScrollingLock();

  return (
    <Container
      onMouseEnter={() => {
        if (isDragging.current) return;
        setDisplayTooltip(true);
      }}
      onMouseLeave={() => setDisplayTooltip(false)}
      onTouchStart={(e) => {
        scrollingLock();
        setDisplayTooltip(false);
        touchStart(e);
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        setDisplayTooltip(false);
        touchStart(e);
      }}
      topPosition={top}
      leftPosition={left}
      initialPosition={initialPosition}
      sx={sx}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
        aria-label={t(tooltipText) as string}
        onClick={(e) => {
          if (isDragging.current || (!href && onClick)) e.preventDefault();

          if (onClick && !isDragging.current) onClick();
        }}
      >
        <StyledIconContainer>{icon}</StyledIconContainer>
        {displayTooltip ? (
          <Tooltip {...tooltipProps} tooltipPosition={tooltipPosition}>
            {t(tooltipText) as string}
          </Tooltip>
        ) : (
          <></>
        )}
      </a>
    </Container>
  );
};

export default FloatingButton;
