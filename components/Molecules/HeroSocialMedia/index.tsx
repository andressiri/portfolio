import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GITHUB_URL, LINKEDIN_URL } from "config/constants";
import { IconWithTooltip } from "components/Atoms";
import { Container, StyledAnchor } from "./styledComponents";

const HeroSocialMedia: FC = () => {
  const { t } = useTranslation("buttons");
  const theme = useTheme();

  return (
    <Container>
      <StyledAnchor
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("linkedIn") as string}
      >
        <IconWithTooltip
          icon={
            <LinkedInIcon
              sx={{ transform: "scale(1.15) translate(4.5px, 0.5px)" }}
            />
          }
          color={theme.palette.secondary.contrastText}
          background="transparent"
          tooltipText={t("linkedIn") as string}
          tooltipProps={{
            width: "90px",
            color: "contrastsSecondary",
            left: "-19px",
          }}
          tabIndex={-1}
        />
      </StyledAnchor>
      <StyledAnchor
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("gitHub") as string}
      >
        <IconWithTooltip
          icon={<GitHubIcon />}
          color={theme.palette.secondary.contrastText}
          background="transparent"
          tooltipText={t("gitHub") as string}
          tooltipProps={{ width: "90px", color: "contrastsSecondary" }}
          tabIndex={-1}
        />
      </StyledAnchor>
    </Container>
  );
};

export default HeroSocialMedia;
