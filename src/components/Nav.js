import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import "./Nav.css"
const Nav = () => {
    return (
        <div >
             <ul className="nav navbar    mx-auto" >
      
             <div className="nav navbar mx-0" >
      <li className="nav-item">
      <NavLink className='nav-link' to="/newyork" activeClassName="active">NewYork</NavLink>
  </li>
  <li className="nav-item">
      <NavLink className='nav-link' to="/mumbai" activeClassName="active">Mumbai</NavLink>
  </li>


  <li className="nav-item">
      <NavLink className='nav-link' to="/paris" activeClassName="active">Paris</NavLink>
  </li>


  <li className="nav-item">
      <NavLink className='nav-link' to="/london" activeClassName="active">London</NavLink>
  </li>
   
      </div>
</ul> 

        </div>
    );
}

export default Nav;
