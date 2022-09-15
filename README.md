***********************Full Code of CustomLink component*************************


import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color : match ? "red" : "rgb(74, 185, 0)" ,  textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && " (active)"}
      </div>
    );
  }

export default CustomLink;

********************Header Component Code*************************

import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <h2>Welcome to T-Shirt Mania</h2>
            <nav className="nav-container">
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/orderReview">Order Review</CustomLink>
            </nav>            
        </div>
    );
};

export default Header;






***********How to follow The steps*****************





step 1: create a component named <CustomLink>
  
step 2: 
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
  
 step 3: 
        <Link
          style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
  
  or, 
  if you want to set a color which Link is active
        <Link
          style={{ color : match ? "red" : "rgb(74, 185, 0)" ,  textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
  
  or, 
  if you want to see the link you are using is active and in the 
  then the code is 
  
      <Link
          style={{ color : match ? "red" : "rgb(74, 185, 0)" ,  textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && " (actived)"}
  
  
  step 4: import the CustomLink component in the Header component where use the nav...
  
  This code is using in the Header component...
      <nav className="nav-container">
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/orderReview">Order Review</CustomLink>
            </nav>
