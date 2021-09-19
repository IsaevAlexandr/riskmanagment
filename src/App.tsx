import React from "react";

import { Header } from "./components/Header";
import { Theme } from "./components/Theme";
import { Menu } from "./components/Menu";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { RiskPage } from "./components/RiskPage/RiskPage";
import { EventsPage } from "./components/EventsPage/EventsPage";
import { MonitoringPage } from "./components/MonitoringPage/MonitoringPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Header />
        <Box display="flex">
          <Menu />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Switch>
              <Route exact path="/" component={RiskPage} />
              <Route exact path="/monitoring" component={MonitoringPage} />
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
