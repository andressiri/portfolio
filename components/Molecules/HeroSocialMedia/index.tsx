import { FC } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Container } from "./styledComponents";
import { GITHUB_URL, LINKEDIN_URL } from "config/constants";

const HeroSocialMedia: FC = () => {
  return (
    <Container>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon sx={{ transform: "translateY(3px)" }} />
      </a>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </Container>
  );
};

export default HeroSocialMedia;
