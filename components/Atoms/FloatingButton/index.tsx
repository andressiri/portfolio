import { FC, useState } from "react";
import { useTranslation } from "next-i18next";
import { Tooltip } from "components/Atoms";
import { Container, StyledIconContainer } from "./styledComponents";
import useDragControllers from "./useDragControllers";
import { TooltipProps } from "typings/tooltip";

interface Props {
  icon: JSX.Element;
  tooltipText: string;
  tooltipProps?: TooltipProps;
  href?: string;
  onClick?: () => void;
}
const FloatingButton: FC<Props> = ({
  icon,
  tooltipText,
  tooltipProps,
  href,
  onClick,
}) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);
  const dragControllers = useDragControllers();
  const { top, left, touchStart, lockScrolling, isDragging, tooltipPosition } =
    dragControllers;
  const { t } = useTranslation("buttons");

  return (
    <Container
      onMouseEnter={() => {
        if (isDragging.current) return;
        setDisplayTooltip(true);
      }}
      onMouseLeave={() => setDisplayTooltip(false)}
      onTouchStart={(e) => {
        lockScrolling();
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
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
        aria-label={t(tooltipText) as string}
        onClick={(e) => {
          if (isDragging.current || (!href && onClick)) e.preventDefault();

          if (onClick) onClick();
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
