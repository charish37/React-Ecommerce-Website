import React from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

import './Header.css';



function Header() {
    return(
        <div className="header">
            <Link to="/" style={{textDecoration: "none"}}>
                <div className="header__logo">
                    <StorefrontIcon className="header__logoImage" fontSize="large"/>
                    <h2 className="header__logoTitle">eCommerce</h2>
                </div>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="nav__list">
                    <span className="nav__list-itemOne">Hello Guest</span>
                    <span className="nav__list-itemTwo nav__button">Sign In</span>
                </div>
                <div className="nav__list">
                    <span className="nav__list-itemOne">Your</span>
                    <span className="nav__list-itemTwo">Shop</span>
                </div>
                <Link to="/checkout" style={{textDecoration: "none"}}>
                    <div className="nav__list">
                        <ShoppingCartIcon fontSize="large" className='nav__Cart'/>
                        <span className="nav__list-item nav__cartCount">60</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;