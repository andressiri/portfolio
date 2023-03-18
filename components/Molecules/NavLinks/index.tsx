import { FC } from "react";
import { useTranslation } from "next-i18next";
import AttributionIcon from "@mui/icons-material/Attribution";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { ContactButton } from "components/Atoms";
import { ContainerList, StyledItem, NavItemButton } from "./styledComponents";

interface Props {
  isDrawer?: boolean;
  isDrawerOpen?: boolean;
}

const NavLinks: FC<Props> = ({ isDrawer, isDrawerOpen }) => {
  const { t } = useTranslation("navbar");

  return (
    <ContainerList isDrawer={isDrawer}>
      <StyledItem
        isDrawer={isDrawer}
        isDrawerOpen={isDrawerOpen}
        appearingTime={620}
      >
        <NavItemButton disableRipple startIcon={<AttributionIcon />}>
          {t("skills")}
        </NavItemButton>
      </StyledItem>
      <StyledItem
        isDrawer={isDrawer}
        isDrawerOpen={isDrawerOpen}
        appearingTime={680}
      >
        <NavItemButton disableRipple startIcon={<BuildCircleIcon />}>
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
                transition: "0.3s all",
                transform: "rotate(-360deg)",
              },
            },
          }}
        />
      </StyledItem>
    </ContainerList>
  );
};

export default NavLinks;
