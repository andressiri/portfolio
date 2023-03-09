import { FC } from "react";
import { Navbar } from "components";
import { LayoutContainer } from "./styledComponents";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
