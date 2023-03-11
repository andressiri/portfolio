import { FC } from "react";
import { useTranslation } from "next-i18next";
import AttributionIcon from "@mui/icons-material/Attribution";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { ContactButton } from "components/Atoms";
import { ContainerList, NavItemButton } from "./styledComponents";

const NavLinks: FC = () => {
  const { t } = useTranslation("navbar");

  return (
    <ContainerList>
      <li>
        <NavItemButton disableRipple startIcon={<AttributionIcon />}>
          {t("skills")}
        </NavItemButton>
      </li>
      <li>
        <NavItemButton disableRipple startIcon={<BuildCircleIcon />}>
          {t("projects")}
        </NavItemButton>
      </li>
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
    </ContainerList>
  );
};

export default NavLinks;
