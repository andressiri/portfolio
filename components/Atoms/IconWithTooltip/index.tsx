import { FC, useState } from "react";
import { Tooltip } from "../../../components/Atoms";
import { Container, StyledIconButton } from "./styledComponents";
import { TooltipProps } from "typings/tooltip";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: JSX.Element;
  color?: string;
  background?: string;
  cursor?: string;
  tabIndex?: number;
  tooltipText: string;
  tooltipProps?: TooltipProps;
}

const IconWithTooltip: FC<Props> = ({
  onClick,
  icon,
  color,
  background,
  cursor = "pointer",
  tabIndex = 0,
  tooltipText,
  tooltipProps,
}) => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <Container
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      {tooltip ? <Tooltip {...tooltipProps}>{tooltipText}</Tooltip> : <></>}
      <StyledIconButton
        onClick={onClick}
        colour={color}
        background={background}
        cursor={cursor}
        tabIndex={tabIndex}
      >
        {icon}
      </StyledIconButton>
    </Container>
  );
};

export default IconWithTooltip;
