import * as React from "react";
import AppBarMui from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { Logo } from "./Logo";

export const AppBar = () => {
  return (
    <AppBarMui
      position="static"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Logo />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          СОН - Cистема обеспечения непрерывности
        </Typography>
        <Button color="inherit">пользователь</Button>
      </Toolbar>
    </AppBarMui>
  );
};
