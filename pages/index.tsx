import { FC } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "components";
import { useTranslation } from "next-i18next";

const Home: FC = () => {
  const { t } = useTranslation("home");
  return (
    <Layout>
      <main>
        <h1>{t("title")}</h1>
      </main>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        "navbar",
        "home",
        "buttons",
      ])),
    },
  };
};

export default Home;
