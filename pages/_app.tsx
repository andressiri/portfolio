import { FC } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface IAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const App: FC<IAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
