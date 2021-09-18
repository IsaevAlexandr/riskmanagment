import * as React from "react";
import AppBarMui from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Logo } from "./Logo/Logo";

export const AppBar = () => {
  return (
    <AppBarMui
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#fff" }}
    >
      <Toolbar>
        <Logo />

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, ml: 4 }}
          color="primary"
        >
          СОН - Cистема обеспечения непрерывности
        </Typography>

        <Button color="primary">
          <AccountCircleIcon sx={{ mr: 1 }} />
          Буровик Суровый
        </Button>
      </Toolbar>
    </AppBarMui>
  );
};
