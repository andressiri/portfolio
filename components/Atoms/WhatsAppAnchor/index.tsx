import { FC } from "react";
import { WHATSAPP_URL } from "config/constants";

interface Props {
  children: JSX.Element | JSX.Element[];
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const WhatsAppAnchor: FC<Props> = ({ children, onClick }) => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      draggable="false"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default WhatsAppAnchor;
