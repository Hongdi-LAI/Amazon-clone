import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }] = useStateValue(); 
    
    //Controls login and logout
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
    //console.log('This User is', user);

    return (
            <nav className = "header">
                
                <Link to = "/">
                    <img 
                        className = "header__logo"
                        src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                        alt = "" 
                    />
                </Link>

                {/* Search box */}
                <div className="header__search">
                    <input className = "header__searchInput" />
                    <SearchIcon className = "header__searchIcon" />
                </div>
                
                <div className = "header__nav">
                    {/* Login Page Link */}
                    <Link to = {!user && "/login"} className="header__link">
                        <div onClick = {login} className = "header__option">
                            <span className = "header__optionLineOne">Hello {!user ? 'Geust' : user?.email}</span>
                            <span className = "header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    {/* Orders & Returns Link */}
                    <Link to = "/orders" className="header__link">
                        <div className = "header__option">
                            <span className = "header__optionLineOne">Returns</span>
                            <span className = "header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>
                    {/* Amazon Prime */}
                    <Link to = "/" className="header__link">
                        <div className = "header__option">
                            <span className = "header__optionLineOne">Your</span>
                            <span className = "header__optionLineTwo">Prime</span>
                        </div>
                    </Link>
                    {/* Checkout Page Link */}
                    <Link to = "/checkout" className="header__link">
                        <div className = "header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className = "header__optionLineTwo header__basketCount">{basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </nav >
    )
}

export default Header
