import { FC } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BackgroundTexture } from "components/Atoms";
import { Layout, Hero } from "components/Templates";
import { Container } from "./styledComponents";
import funkyLinesSrc from "assets/textures/funky-lines.webp";

const Home: FC = () => {
  return (
    <Container>
      <Layout>
        <BackgroundTexture imageSrc={funkyLinesSrc.src} />
        <Hero />
      </Layout>
    </Container>
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
