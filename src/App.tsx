import React from "react";

import "./App.css";
import { AppBar } from "./components/AppBar";
import { Theme } from "./components/Theme";
import { Drawer } from "./components/Drawer";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { RiskPage } from "./components/RiskPage/RiskPage";
import { EventsPage } from "./components/EventsPage/EventsPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <AppBar />
        <Box display="flex">
          <Drawer />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Switch>
              <Route exact path="/" component={RiskPage} />
              <Route exact path="/events" component={EventsPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
