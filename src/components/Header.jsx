import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Header = () => {
  return (
    <section className='header-container'>
        <div className='sub-cont'>
            <div className="logo-cust flex align-items-center">
                <LocalMallIcon />
                Shop-Beta
            </div>
            <div className="search-container flex align-items-center">
                <input type="text" placeholder='Search' />
                <span>
                    <SearchIcon />
                </span>
            </div>
            <div className="menu-opts flex flex-row">
                <div className="sign-in flex flex-col">
                    {/* <p className="line-1"> */}
                        <LoginIcon />
                    {/* </p> */}
                    <p className="line-2">
                        Sign in
                    </p>
                </div>
                <div className="cart flex flex-col">
                    {/* <p className="line-1"> */}
                        <ShoppingCartCheckoutIcon />
                    {/* </p> */}
                    <p className="line-2">
                        Cart
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header