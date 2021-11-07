import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Route
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/book/:id" component={Detail} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
