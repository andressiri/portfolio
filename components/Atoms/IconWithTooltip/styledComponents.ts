import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const Container = styled(Box)(() => ({
  position: "relative",
}));

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) =>
    !["color", "background", "cursor"].includes(prop as string),
})<{ colour?: string; background?: string; cursor: string }>(
  ({ theme, colour, background, cursor }) => ({
    padding: "0px",
    background: background ? background : theme.palette.primary.main,
    color: colour ? colour : theme.palette.primary.contrastText,
    cursor,
    "&:hover": {
      background: background ? background : theme.palette.primary.main,
    },
  })
);
