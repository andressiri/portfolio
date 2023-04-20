import { FC, useState } from "react";
import { NavDrawerController } from "components/Atoms";
import { WhatsAppFloating } from "components/Molecules";
import { Footer, Navbar, NavigationDrawer } from "components/Organisms";
import { LayoutContainer } from "./styledComponents";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<IProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => setIsDrawerOpen((prev: boolean) => !prev);

  return (
    <LayoutContainer>
      <Navbar />
      <NavigationDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      />
      <NavDrawerController
        isDrawerOpen={isDrawerOpen}
        handleDrawer={handleDrawer}
      />
      {children}
      <Footer />
      <WhatsAppFloating />
    </LayoutContainer>
  );
};

export default Layout;
