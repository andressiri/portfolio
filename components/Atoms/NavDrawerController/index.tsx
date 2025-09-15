import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "./styledComponents";
import FloatingButton from "../FloatingButton";

interface Props {
  isDrawerOpen: boolean;
  handleDrawer: () => void;
  isNavbarVisible: boolean;
}

const NavDrawerController: FC<Props> = ({
  isDrawerOpen,
  handleDrawer,
  isNavbarVisible,
}) => {
  return (
    <Container isNavbarVisible={isNavbarVisible}>
      <FloatingButton
        icon={isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
        tooltipText={isDrawerOpen ? "closeMenu" : "openMenu"}
        tooltipProps={{ width: "80px" }}
        onClick={handleDrawer}
        initialPosition="topRight"
      />
    </Container>
  );
};

export default NavDrawerController;
