import { FC } from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import useCustomTheme from "styles/themes/useCustomTheme";
import createEmotionCache from "utils/createEmotionCache";
import { GeneralContextProvider } from "contexts";
import { HeadSetup } from "components";
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
  const theme = useCustomTheme();

  return (
    <GeneralContextProvider>
      <CacheProvider value={emotionCache}>
        <HeadSetup />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </GeneralContextProvider>
  );
};

export default appWithTranslation(App);
