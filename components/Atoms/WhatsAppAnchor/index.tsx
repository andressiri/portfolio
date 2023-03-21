import { FC } from "react";
import { useTranslation } from "next-i18next";
import { WHATSAPP_URL } from "config/constants";

interface Props {
  children: JSX.Element | JSX.Element[];
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const WhatsAppAnchor: FC<Props> = ({ children, onClick }) => {
  const { t } = useTranslation("buttons");

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      draggable="false"
      onClick={onClick}
      aria-label={t("whatsAppContact") as string}
    >
      {children}
    </a>
  );
};

export default WhatsAppAnchor;
