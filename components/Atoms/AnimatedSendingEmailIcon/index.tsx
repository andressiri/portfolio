import { FC } from "react";
import { ArrowPath } from "./styledComponents";

const AnimatedSendingEmailIcon: FC = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
      />
      <ArrowPath d="m22 12-4-4v3H3v2h15v3z" />
    </svg>
  );
};

export default AnimatedSendingEmailIcon;
