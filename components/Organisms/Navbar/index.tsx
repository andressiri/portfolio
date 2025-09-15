import { Dispatch, FC, SetStateAction } from "react";
import { NavLogo, NavLinks, Options } from "components/Molecules";
import { NavbarContainer, RightContainer } from "./styledComponents";
import useNavbarVisibility from "./useNavbarVisibility";

interface Props {
  visibilitySetter: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FC<Props> = ({ visibilitySetter }) => {
  const { navbarRef } = useNavbarVisibility(visibilitySetter);

  return (
    <NavbarContainer ref={navbarRef}>
      <NavLogo />
      <RightContainer>
        <NavLinks />
        <Options />
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
