import { FC } from "react";
import { NavLogo, NavLinks, Options } from "components/Molecules";
import { NavbarContainer, RightContainer } from "./styledComponents";

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavLogo />
      <RightContainer>
        <NavLinks />
        <Options />
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
