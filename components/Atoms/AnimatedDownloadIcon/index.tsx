import { FC } from "react";
import { ArrowPath } from "./styledComponents";

interface Props {
  downloading: boolean;
}

const AnimatedDownloadIcon: FC<Props> = ({ downloading }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      data-testid="CloudDownloadIcon"
      style={{ transform: "translateY(-1px)" }}
    >
      <path
        fill="currentcolor"
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
      />
      <ArrowPath
        d="M29.9,6H18.1a2,2,0,0,0-2,2V20.4H6a2,2,0,0,0-1.4,3.5L22.5,43.4a2.2,2.2,0,0,0,3,0L43.4,23.9A2,2,0,0,0,42,20.4H31.9V8a2,2,0,0,0-2-2Z"
        downloading={downloading}
      />
    </svg>
  );
};

export default AnimatedDownloadIcon;
