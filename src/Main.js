import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          
          <ul className="header">
            <li><NavLink to="/">Child You Code</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Categories">Categories</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Categories" component={Categories}/>
            <Route path="/Contact" component={Contact}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}
 
export default Main;