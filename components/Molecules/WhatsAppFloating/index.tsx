import { FC } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FloatingButton } from "components/Atoms";
import { WHATSAPP_URL } from "config/constants";

const WhatsAppFloating: FC = () => {
  return (
    <FloatingButton
      icon={<WhatsAppIcon />}
      tooltipText="whatsAppContact"
      href={WHATSAPP_URL}
      sx={{
        "& svg": {
          width: "130%",
          height: "130%",
        },
      }}
    />
  );
};

export default WhatsAppFloating;
