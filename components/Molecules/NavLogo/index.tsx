import { FC, useContext } from "react";
import { useTranslation } from "next-i18next";
import { goToElement } from "utils/helpers";
import ASLogo from "assets/logos/ASLogo";
import { Container, ASLogoContainer, Name } from "./styledComponents";
import { GeneralContext } from "contexts";

const NavLogo: FC = () => {
  const { heroRef } = useContext(GeneralContext);
  const { t } = useTranslation("navbar");

  return (
    <Container onClick={() => goToElement(heroRef.current as HTMLElement)}>
      <ASLogoContainer>
        <ASLogo />
      </ASLogoContainer>
      <Name>{t("name")}</Name>
    </Container>
  );
};

export default NavLogo;
