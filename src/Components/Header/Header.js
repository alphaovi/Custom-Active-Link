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