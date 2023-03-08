import { FC } from "react";
import { useTranslation } from "next-i18next";
import { Container, ASLogoContainer, Name } from "./styledComponents";
import ASLogo from "assets/ASLogo";

const NavLogo: FC = () => {
  const { t } = useTranslation("navbar");

  return (
    <Container>
      <ASLogoContainer>
        <ASLogo />
      </ASLogoContainer>
      <Name>{t("name")}</Name>
    </Container>
  );
};

export default NavLogo;
