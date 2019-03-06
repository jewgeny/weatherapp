import React from "react";
import {NavLink} from "react-router-dom";

class NavList extends React.Component{
   render(){

      return(
        <ul className="nav">
          <li className="nav-item">
            <NavLink activeStyle={{ textDecoration: 'underline' }}  className="nav-link text-primary" exact to="/">Search</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={{ textDecoration: 'underline' }}  className="text-primary nav-link" to="/showweather">Show Weather</NavLink>
          </li>
        </ul>
      )
   }
}

export default NavList;
