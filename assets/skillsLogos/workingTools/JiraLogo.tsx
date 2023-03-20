import { useTheme } from "@mui/material";

const JiraLogo = () => {
  const theme = useTheme();

  return (
    <svg
      height="2500"
      viewBox="2.59 0 214.09101008 224"
      width="2361"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <linearGradient
        id="a"
        gradientTransform="matrix(1 0 0 -1 0 264)"
        gradientUnits="userSpaceOnUse"
        x1="102.4"
        x2="56.15"
        y1="218.63"
        y2="172.39"
      >
        <stop offset=".18" stopColor={theme.palette.primary.dark} />
        <stop
          offset="1"
          stopColor={theme.palette.primary.main.replace("1)", "0.8)")}
        />
      </linearGradient>
      <linearGradient
        id="b"
        x1="114.65"
        x2="160.81"
        xlinkHref="#a"
        y1="85.77"
        y2="131.92"
      />
      <path
        d="m214.06 105.73-96.39-96.39-9.34-9.34-72.56 72.56-33.18 33.17a8.89 8.89 0 0 0 0 12.54l66.29 66.29 39.45 39.44 72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39-33.12-33.12 33.12-33.12 33.11 33.12z"
        fill={theme.palette.primary.main.replace("1)", "0.8)")}
      />
      <path
        d="m108.33 78.88a55.75 55.75 0 0 1 -.24-78.61l-72.47 72.44 39.44 39.44z"
        fill="url(#a)"
      />
      <path
        d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86l72.67-72.63z"
        fill="url(#b)"
      />
    </svg>
  );
};

export default JiraLogo;
