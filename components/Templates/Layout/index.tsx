import { FC, useState } from "react";
import { WhatsAppFloating } from "components/Molecules";
import { Navbar, NavigationDrawer } from "components/Organisms";
import { LayoutContainer } from "./styledComponents";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<IProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setIsDrawerOpen(true);

  return (
    <LayoutContainer>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <NavigationDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      />
      {children}
      <WhatsAppFloating />
    </LayoutContainer>
  );
};

export default Layout;
