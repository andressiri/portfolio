import { FC } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const label = { inputProps: { "aria-label": "Switch demo" } };

const Home: FC = () => {
  return (
    <main>
      <h1>Hello portfolio</h1>
    </main>
  );
};

export default Home;
