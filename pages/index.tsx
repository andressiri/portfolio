import { FC, useContext, useEffect, useState } from "react";
import { GeneralContext } from "contexts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ThemeProvider } from "@mui/material";
import getCustomTheme from "styles/themes/getCustomTheme";
import { BackgroundTexture } from "components/Atoms";
import { Layout, Hero } from "components/Templates";
import { Container } from "components/Templates/MainPage/styledComponents";
import funkyLinesSrc from "assets/textures/funky-lines.webp";

const Home: FC = () => {
  const { themeMode, themePalette } = useContext(GeneralContext);
  const [theme, setTheme] = useState(
    getCustomTheme({ themeMode, themePalette })
  );

  useEffect(() => {
    setTheme(getCustomTheme({ themeMode, themePalette }));
  }, [themeMode, themePalette]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Layout>
          <BackgroundTexture imageSrc={funkyLinesSrc.src} />
          <Hero />
        </Layout>
      </Container>
    </ThemeProvider>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale as string,
        ["navbar", "hero", "buttons"],
        null,
        ["en", "es"]
      )),
    },
  };
};

export default Home;
