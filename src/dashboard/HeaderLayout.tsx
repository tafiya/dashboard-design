import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface HeaderLayoutProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  open,
  handleDrawerOpen,
}) => (
  <AppBar
    sx={{ bgcolor: "white", color: "black", boxShadow: "none", border: "" }}
    position="fixed"
    open={open}
  >
    <Toolbar>
      <CameraEnhanceIcon
        sx={[
          {
            marginRight: 5,
            color: "blue",
          },
          open && { display: "none" },
        ]}
      ></CameraEnhanceIcon>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={[
          {
            marginRight: 5,
          },
          open && { display: "none" },
        ]}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
          <Input
            className=" border p-1"
            placeholder="ctrl+K"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default HeaderLayout;
