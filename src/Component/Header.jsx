import React from "react";
import {NavLink} from "react-router-dom";

const HeaderGlobal = () =>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

             
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <NavLink class="navbar-brand " to="/">Child You Code </NavLink>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link" to="/service">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li> 
    </ul>
    
  </div>
</nav>

</div>

</div>
</div>

        </>
    );
};

export default HeaderGlobal;
