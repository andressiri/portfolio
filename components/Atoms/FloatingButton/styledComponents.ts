import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

interface ContainerProps {
  topPosition: number | null;
  leftPosition: number | null;
  initialPosition: "topLeft" | "topRight" | "bottomRight" | "bottomLeft";
}

const setInitialPosition = ({
  topPosition,
  leftPosition,
  initialPosition,
}: ContainerProps) => {
  const positioning =
    initialPosition === "topLeft"
      ? {
          top: topPosition ? `${topPosition}px` : "20px",
          left: leftPosition ? `${leftPosition}px` : "20px",
          bottom: "unset",
          right: "unset",
        }
      : initialPosition === "topRight"
      ? {
          top: topPosition ? `${topPosition}px` : "20px",
          left: leftPosition ? `${leftPosition}px` : "unset",
          bottom: "unset",
          right: leftPosition ? "unset" : "20px",
        }
      : initialPosition === "bottomRight"
      ? {
          top: topPosition ? `${topPosition}px` : "unset",
          left: leftPosition ? `${leftPosition}px` : "unset",
          bottom: topPosition ? "unset" : "20px",
          right: leftPosition ? "unset" : "20px",
        }
      : {
          top: topPosition ? `${topPosition}px` : "unset",
          left: leftPosition ? `${leftPosition}px` : "20px",
          bottom: topPosition ? "unset" : "20px",
          right: "unset",
        };

  return positioning;
};

export const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    !["topPosition", "leftPosition", "initialPosition"].includes(
      prop as string
    ),
})<ContainerProps>(({ theme, topPosition, leftPosition, initialPosition }) => {
  const positioning = setInitialPosition({
    topPosition,
    leftPosition,
    initialPosition,
  });

  return {
    zIndex: 999999,
    position: "fixed",
    top: positioning.top,
    left: positioning.left,
    bottom: positioning.bottom,
    right: positioning.right,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "50%",
    overflow: "visible !important",
    touchAction: "none",
    "& svg": {
      width: "80%",
      height: "80%",
    },
  };
});

export const StyledIconContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: "60px",
  height: "60px",
  padding: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: theme.palette.primary.contrastText,
  overflow: "visible !important",
  "&:hover": {
    background: theme.palette.primary.contrastText,
    opacity: "1",
  },
  "@media (max-width: 1149px)": {
    width: "50px",
    height: "50px",
  },
  "@media (max-width: 550px)": {
    width: "45px",
    height: "45px",
  },
}));
