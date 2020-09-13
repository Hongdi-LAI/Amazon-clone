import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
    console.log('This User is', user);

    return (
        <div className = "nav">
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
                    <Link to = {!user && "/login"} className="header__link">
                        <div onClick = {login} className = "header__option">
                            <span className = "header__optionLineOne">Hello {user?.email}</span>
                            <span className = "header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    
                    <Link to = "/" className="header__link">
                        <div className = "header__option">
                            <span className = "header__optionLineOne">Returns</span>
                            <span className = "header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>
                    
                    <Link to = "/" className="header__link">
                        <div className = "header__option">
                            <span className = "header__optionLineOne">Your</span>
                            <span className = "header__optionLineTwo">Prime</span>
                        </div>
                    </Link>
                    
                    <Link to = "/checkout" className="header__link">
                        <div className = "header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className = "header__optionLineTwo header__basketCount">{basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </nav >
            <div className = "nav__second">
                <div className = "nav__secondBarLeft">
                    <LocationOnIcon />
                    <div className = "nav__secondBarLeftDelivery">
                        <p>Deliver to</p>
                        <h3>United Kingdom</h3>
                    </div>
                    
                </div>
                <div className = "nav__secondBarMid">
                    <p>Today's Deal</p>
                    <p>Customer Service</p>
                    <p>Gift Cards</p>
                    <p>Registry</p>
                    <p>Sell</p>
                </div>
                <div className = "nav__secondBarRight">
                    <h3>Amazon's Response to COVID-19</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Header
