import { FC } from "react";
import { NavDrawerController } from "components/Atoms";
import { NavLogo, NavLinks } from "components/Molecules";
import { NavbarContainer, RightContainer } from "./styledComponents";

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavLogo />
      <RightContainer>
        <NavLinks />
        <NavDrawerController />
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
