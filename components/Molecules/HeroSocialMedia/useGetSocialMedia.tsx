import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "config/constants";
import { ISocialMedia } from "typings/socialMedia";

const useGetSocialMedia = (isFooter?: boolean) => {
  const socialMediaArray: ISocialMedia[] = [
    {
      text: "linkedIn",
      href: LINKEDIN_URL,
      icon: (
        <LinkedInIcon
          sx={{ transform: "scale(1.15) translate(4.5px, 0.5px)" }}
        />
      ),
      tooltipProps: {
        width: "90px",
        left: "-19px",
      },
    },
    {
      text: "gitHub",
      href: GITHUB_URL,
      icon: <GitHubIcon sx={{ transform: "translateX(2.5px)" }} />,
      tooltipProps: { width: "90px", left: "-22.5px" },
    },
    {
      text: "mailto",
      href: `mailto:${process.env.NEXT_PUBLIC_PERSONAL_MAIL}`,
      icon: <EmailIcon />,
      tooltipProps: { width: "90px" },
    },
    {
      text: "whatsAppContact",
      href: WHATSAPP_URL,
      icon: <WhatsAppIcon />,
      tooltipProps: { width: "150px" },
    },
  ];

  if (!isFooter) socialMediaArray.splice(2, socialMediaArray.length - 2);

  return socialMediaArray;
};

export default useGetSocialMedia;
