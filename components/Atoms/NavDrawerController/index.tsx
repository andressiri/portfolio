import { FC } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Container, StyledIconButton } from "./styledComponents";

const NavDrawerController: FC = () => {
  return (
    <Container>
      <StyledIconButton>
        <SettingsIcon />
      </StyledIconButton>
    </Container>
  );
};

export default NavDrawerController;
