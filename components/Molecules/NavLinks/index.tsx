import { FC, useContext } from "react";
import { GeneralContext } from "contexts";
import { useTranslation } from "next-i18next";
import AttributionIcon from "@mui/icons-material/Attribution";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { ContactButton } from "components/Atoms";
import { goToElement } from "utils/helpers";
import { ContainerList, StyledItem, NavItemButton } from "./styledComponents";

interface Props {
  isDrawer?: boolean;
  isDrawerOpen?: boolean;
}

const NavLinks: FC<Props> = ({ isDrawer, isDrawerOpen }) => {
  const { skillsRef } = useContext(GeneralContext);
  const { t } = useTranslation("navbar");

  return (
    <ContainerList isDrawer={isDrawer}>
      <StyledItem
        isDrawer={isDrawer}
        isDrawerOpen={isDrawerOpen}
        appearingTime={620}
      >
        <NavItemButton
          disableRipple
          startIcon={<AttributionIcon />}
          isDrawer={isDrawer}
          onClick={() => goToElement(skillsRef.current as HTMLElement)}
        >
          {t("skills")}
        </NavItemButton>
      </StyledItem>
      <StyledItem
        isDrawer={isDrawer}
        isDrawerOpen={isDrawerOpen}
        appearingTime={680}
      >
        <NavItemButton
          disableRipple
          startIcon={<BuildCircleIcon />}
          isDrawer={isDrawer}
          onClick={() => goToElement(skillsRef.current as HTMLElement)}
        >
          {t("projects")}
        </NavItemButton>
      </StyledItem>
      <StyledItem
        isDrawer={isDrawer}
        isDrawerOpen={isDrawerOpen}
        appearingTime={740}
      >
        <ContactButton
          sx={{
            "&:hover, &:focus, &:active": {
              "& svg": {
                transition: "300ms transform !important",
                transform: "rotate(-360deg)",
              },
            },
          }}
          onClick={() => goToElement(skillsRef.current as HTMLElement)}
        />
      </StyledItem>
    </ContainerList>
  );
};

export default NavLinks;
