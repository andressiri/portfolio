import { FC } from "react";
import { NavDrawerController } from "components/Atoms";
import { NavLogo, NavLinks, Options } from "components/Molecules";
import { NavbarContainer, RightContainer } from "./styledComponents";

interface Props {
  handleDrawerOpen: () => void;
}

const Navbar: FC<Props> = ({ handleDrawerOpen }) => {
  return (
    <NavbarContainer>
      <NavLogo />
      <RightContainer>
        <NavLinks />
        <Options />
      </RightContainer>
      <NavDrawerController handleDrawerOpen={handleDrawerOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
