import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import BodyLayout from "./BodyLayout";
import HeaderLayout from "./HeaderLayout";
import MenuLayoutLeft from "./MenuLayoutLeft";

interface MenuItem {
  id: number;
  MenuName: string;
  DisplayName: string;
  Content: string;
}

const Dashboard: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  const [selectedMenuItem, setSelectedMenuItem] =
    React.useState<MenuItem | null>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Handler to change the selected menu item
  const handleMenuItemClick = (menuItem: MenuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Header */}
      <HeaderLayout open={open} handleDrawerOpen={handleDrawerOpen} />

      {/* Left Panel (Drawer) */}
      <MenuLayoutLeft
        open={open}
        handleDrawerClose={handleDrawerClose}
        onMenuItemClick={handleMenuItemClick} // Passing handler to change selected menu
      />

      {/* Main Content Area */}
      <BodyLayout selectedMenuItem={selectedMenuItem} />
    </Box>
  );
};

export default Dashboard;
