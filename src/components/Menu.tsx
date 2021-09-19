import {useRouteMatch} from "react-router-dom";
import Box from "@mui/material/Box";
import DrawerMui from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { ListItemButton } from "@mui/material";
import AlbumIcon from '@mui/icons-material/Album';

const drawerWidth = 280;

export const Menu = () => {
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
            <ListItemText primary={"Управление рисками"} />
          </ListItemButton>

          <ListItemButton component={Link} to="/monitoring" selected={param === "monitoring"}>
            <ListItemIcon>
              <AlbumIcon />
            </ListItemIcon>
            <ListItemText primary={"Мониторинг рисков"} />
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
