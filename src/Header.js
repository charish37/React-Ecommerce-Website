import React from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

import './Header.css';
import { useStateValue } from './StateProvider';
import Login from './Login';



function Header() {
    const [state,dispatch] = useStateValue();
   
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
                <Link to="/login" style={{textDecoration: "none"}}>
                    <div className="nav__list">
                        <span className="nav__list-itemOne">Hello Guest</span>
                        <span className="nav__list-itemTwo nav__button">Sign In</span>
                    </div>
                </Link>
                <div className="nav__list">
                    <span className="nav__list-itemOne">Your</span>
                    <span className="nav__list-itemTwo">Shop</span>
                </div>
                <Link to="/checkout" style={{textDecoration: "none"}}>
                    <div className="nav__list">
                        <ShoppingCartIcon fontSize="large" className='nav__Cart'/>
                        <span className="nav__list-item nav__cartCount">{state.basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;