import { FC } from "react";
import { NavbarContainer, ASLogo, Name } from "./styledComponents";
import ASLogoSrc from "public/favicon.ico";

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <ASLogo src={ASLogoSrc} alt="AS logo" />
      <Name>Andrés Siri</Name>
    </NavbarContainer>
  );
};

export default Navbar;
