import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, StyledIconButton } from "./styledComponents";

interface Props {
  handleDrawerOpen: () => void;
}

const NavDrawerController: FC<Props> = ({ handleDrawerOpen }) => {
  return (
    <Container>
      <StyledIconButton onClick={handleDrawerOpen}>
        <MenuIcon />
      </StyledIconButton>
    </Container>
  );
};

export default NavDrawerController;
