import { FC, useState } from "react";
import { useTranslation } from "next-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GITHUB_URL, LINKEDIN_URL } from "config/constants";
import { Tooltip } from "components/Atoms";
import { Container, StyledAnchor } from "./styledComponents";

const HeroSocialMedia: FC = () => {
  const [linkedInTooltip, setLinkedInTooltip] = useState<boolean>(false);
  const [gitHubTooltip, setGitHubTooltip] = useState<boolean>(false);
  const { t } = useTranslation("buttons");
  return (
    <Container>
      <StyledAnchor
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setLinkedInTooltip(true)}
        onMouseLeave={() => setLinkedInTooltip(false)}
      >
        {linkedInTooltip ? (
          <Tooltip
            top={"-28px"}
            left={"-19px"}
            width={"90px"}
            color={"contrastsSecondary"}
          >
            {t("linkedIn") as string}
          </Tooltip>
        ) : (
          <></>
        )}
        <LinkedInIcon
          sx={{ transform: "scale(1.15) translate(4.5px, 0.5px)" }}
        ></LinkedInIcon>
      </StyledAnchor>
      <StyledAnchor
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setGitHubTooltip(true)}
        onMouseLeave={() => setGitHubTooltip(false)}
      >
        {gitHubTooltip ? (
          <Tooltip top={"-29px"} width={"90px"} color="contrastsSecondary">
            {t("gitHub") as string}
          </Tooltip>
        ) : (
          <></>
        )}
        <GitHubIcon />
      </StyledAnchor>
    </Container>
  );
};

export default HeroSocialMedia;
