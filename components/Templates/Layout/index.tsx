import { FC } from "react";
import { WhatsAppFloating } from "components/Molecules";
import { Navbar } from "components/Organisms";
import { LayoutContainer } from "./styledComponents";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
      <WhatsAppFloating />
    </LayoutContainer>
  );
};

export default Layout;
