import * as React from "react";
import {useRouteMatch} from "react-router-dom";
import Box from "@mui/material/Box";
import DrawerMui from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { ListItemButton } from "@mui/material";

const drawerWidth = 300;

export const Drawer = () => {
  const {params: {param}} = useRouteMatch<{param: string}>("/:param") || {params: {}};
  return (
    <DrawerMui
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItemButton component={Link} to="/" selected={!param}>
            <ListItemIcon>
              <GridViewIcon />
            </ListItemIcon>
            <ListItemText primary={"Мониторинг рисков"} />
          </ListItemButton>

          <ListItemButton component={Link} to="/risktree" selected={param === "risktree"}>
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary={"Дерево рисков"} />
          </ListItemButton>

          <ListItemButton component={Link} to="/events" selected={param === "events"}>
            <ListItemIcon>
              <EventNoteIcon />
            </ListItemIcon>
            <ListItemText primary={"Планирование мероприятий"} />
          </ListItemButton>
        </List>
      </Box>
    </DrawerMui>
  );
};
