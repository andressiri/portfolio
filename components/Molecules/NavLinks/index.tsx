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
  drawerHandler?: (e: React.SyntheticEvent<object, Event>) => void;
}

const NavLinks: FC<Props> = ({ isDrawer, isDrawerOpen, drawerHandler }) => {
  const { skillsRef, projectsRef, contactRef } = useContext(GeneralContext);
  const { t } = useTranslation("navbar");

  const handleNavigation = (
    ref: HTMLElement,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (drawerHandler && isDrawer) drawerHandler(e);

    goToElement(ref);
  };

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
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleNavigation(skillsRef.current as HTMLElement, e)
          }
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
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleNavigation(projectsRef.current as HTMLElement, e)
          }
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
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleNavigation(contactRef.current as HTMLElement, e)
          }
        />
      </StyledItem>
    </ContainerList>
  );
};

export default NavLinks;
