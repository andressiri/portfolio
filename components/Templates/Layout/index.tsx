import { FC, useState } from "react";
import { NavDrawerController } from "components/Atoms";
import { WhatsAppFloating } from "components/Molecules";
import { Footer, Navbar, NavigationDrawer } from "components/Organisms";
import { LayoutContainer } from "./styledComponents";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleDrawer = () => setIsDrawerOpen((prev: boolean) => !prev);

  return (
    <LayoutContainer>
      <Navbar visibilitySetter={setIsNavbarVisible} />
      <NavigationDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      />
      <NavDrawerController
        isDrawerOpen={isDrawerOpen}
        handleDrawer={handleDrawer}
        isNavbarVisible={isNavbarVisible}
      />
      {children}
      <Footer />
      <WhatsAppFloating />
    </LayoutContainer>
  );
};

export default Layout;
