import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useTheme } from "@mui/material";
import { IconWithTooltip } from "components/Atoms";
import { Container, StyledAnchor } from "./styledComponents";
import useGetSocialMedia from "./useGetSocialMedia";
import { ISocialMedia } from "typings/socialMedia";

interface Props {
  isFooter?: boolean;
}

const HeroSocialMedia: FC<Props> = ({ isFooter }) => {
  const { t } = useTranslation("buttons");
  const theme = useTheme();
  const socialMediaArray = useGetSocialMedia(isFooter);

  return (
    <Container isFooter={isFooter}>
      {socialMediaArray.map((socialMedia: ISocialMedia, id: number) => {
        return (
          <StyledAnchor
            href={socialMedia.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(socialMedia.text) as string}
            key={`socialMedia${isFooter ? "Footer" : ""}${
              socialMedia.text
            }${id}`}
          >
            <IconWithTooltip
              icon={socialMedia.icon}
              color={theme.palette.secondary.contrastText}
              background="transparent"
              tooltipText={t(socialMedia.text) as string}
              tooltipProps={{
                color: "contrastsSecondary",
                ...socialMedia.tooltipProps,
              }}
              tabIndex={-1}
            />
          </StyledAnchor>
        );
      })}
    </Container>
  );
};

export default HeroSocialMedia;
