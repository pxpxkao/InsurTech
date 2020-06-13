// For Redux
import { Provider } from "react-redux";
import store from "./store";

// For Router
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import React from "react";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Homepage from "./containers/Homepage";
import ClientTable from "./containers/clients/ClientTable";
import ClientRender from "./containers/clients/ClientRender";
import TestServer from "./containers/TestServer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <div className="container" style={{ marginTop: "100px" }}>
          <Switch>
            <Route path="/server" component={TestServer} />
            <Route path="/client/:id" component={ClientRender} />
            <Route path="/location/:id" component={ClientTable} />
            <Route exact path="/" component={Homepage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
