import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import HeaderGlobal from "./Component/Header";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <HeaderGlobal />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
