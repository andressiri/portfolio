import { FC } from "react";
import { SwipeableDrawerProps } from "@mui/material";
import { NavLinks, NavLogo, Options } from "components/Molecules";
import CloseIcon from "@mui/icons-material/Close";
import {
  StyledSwipeableDrawer,
  CloseContainer,
  StyledIconButton,
  LogoContainer,
  StyledDivider,
  OptionsContainer,
} from "./styledComponents";

const NavigationDrawer: FC<SwipeableDrawerProps> = (props) => {
  return (
    <StyledSwipeableDrawer {...props} anchor="right">
      <CloseContainer isDrawerOpen={props.open} appearingTime={700}>
        <StyledIconButton onClick={(e) => props.onClose(e)}>
          <CloseIcon />
        </StyledIconButton>
      </CloseContainer>
      <LogoContainer
        onClick={(e) => props.onClose(e)}
        isDrawerOpen={props.open}
        appearingTime={500}
      >
        <NavLogo />
      </LogoContainer>
      <StyledDivider isDrawerOpen={props.open} appearingTime={530} />
      <OptionsContainer isDrawerOpen={props.open} appearingTime={560}>
        <Options isDrawer={true} />
      </OptionsContainer>
      <StyledDivider isDrawerOpen={props.open} appearingTime={590} />
      <NavLinks isDrawer={true} isDrawerOpen={props.open} />
    </StyledSwipeableDrawer>
  );
};

export default NavigationDrawer;
