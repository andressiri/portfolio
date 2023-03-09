import { FC } from "react";
import { WHATSAPP_URL } from "config/constants";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const WhatsAppAnchor: FC<Props> = ({ children }) => {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default WhatsAppAnchor;
