import React from "react";

import "./App.css";
import { AppBar } from "./components/AppBar";
import { Theme } from "./components/Theme";
import { Drawer } from "./components/Drawer";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { MonitoringPage } from "./components/MonitoringPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <AppBar />
        <Box display="flex">
          <Drawer />
          <Box component="main">
            <Switch>
              <Route exact path="/" component={MonitoringPage} />

              <Route exact path="/risktree">
                <div>risktree</div>
              </Route>
              <Route exact path="/events">
                <div>events</div>
              </Route>
              <Redirect from="*" to="/" />
            </Switch>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
