import { styled } from "@mui/material/styles";
import { Box, Divider, IconButton, SwipeableDrawer } from "@mui/material";

export const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  "& .MuiPaper-root": {
    width: "320px",
    padding: "24px",
    background: theme.palette.primary.contrastText,
    color: "inherit",
  },
}));

export const CloseContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["isDrawerOpen", "appearingTime"].includes(prop as string),
})<{ isDrawerOpen?: boolean; appearingTime: number }>(
  ({ isDrawerOpen, appearingTime }) => ({
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    opacity: !isDrawerOpen ? "0" : "1",
    transition: `${appearingTime}ms all`,
  })
);

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: "35px",
  height: "35px",
  marginRight: "-5px",
  color: theme.palette.secondary.contrastText,
  "& svg": {
    fontSize: "35px !important",
  },
}));

export const LogoContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["isDrawerOpen", "appearingTime"].includes(prop as string),
})<{ isDrawerOpen?: boolean; appearingTime: number }>(
  ({ isDrawerOpen, appearingTime }) => ({
    margin: "20px 0px",
    transform: !isDrawerOpen ? "translateX(400%)" : "translateX(0%)",
    opacity: !isDrawerOpen ? "0.00001" : "1",
    transition: `${appearingTime}ms all`,
  })
);

export const StyledDivider = styled(Divider, {
  shouldForwardProp: (prop) =>
    !["isDrawerOpen", "appearingTime"].includes(prop as string),
})<{ isDrawerOpen?: boolean; appearingTime: number }>(
  ({ theme, isDrawerOpen, appearingTime }) => ({
    width: "100%",
    margin: "10px 0px",
    background: "rgba(255, 255, 255, 1)",
    color: theme.palette.secondary.contrastText,
    transform: !isDrawerOpen ? "translateX(400%)" : "translateX(0%)",
    opacity: !isDrawerOpen ? "0.00001" : "1",
    transition: `${appearingTime}ms all`,
  })
);

export const OptionsContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["isDrawerOpen", "appearingTime"].includes(prop as string),
})<{ isDrawerOpen?: boolean; appearingTime: number }>(
  ({ theme, isDrawerOpen, appearingTime }) => ({
    width: "100%",
    margin: "15px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.secondary.contrastText,
    transform: !isDrawerOpen ? "translateX(400%)" : "translateX(0%)",
    opacity: !isDrawerOpen ? "0.00001" : "1",
    transition: `${appearingTime}ms all`,
  })
);
