import { FC, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "next-i18next";
import { Tooltip, WhatsAppAnchor } from "components/Atoms";
import { Container, StyledIconButton } from "./styledComponents";
import useDragControllers from "./useDragControllers";

const WhatsAppFloating: FC = () => {
  const [displayTooltip, setDisplayTooltip] = useState(false);
  const dragControllers = useDragControllers();
  const { top, left, touchStart, isDragging, tooltipPosition } =
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
        e.preventDefault();
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
      <WhatsAppAnchor
        onClick={(e) => {
          if (isDragging.current) e.preventDefault();
        }}
      >
        <StyledIconButton>
          <WhatsAppIcon />
        </StyledIconButton>
        {displayTooltip ? (
          <Tooltip tooltipPosition={tooltipPosition}>
            {t("whatsAppContact") as string}
          </Tooltip>
        ) : (
          <></>
        )}
      </WhatsAppAnchor>
    </Container>
  );
};

export default WhatsAppFloating;
