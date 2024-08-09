import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreConstext } from '../../context/StoreContext';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreConstext);

  return (
    <div className='navbar'>
      <Link to='/food-delivery-application/'>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link 
          to='/food-delivery-application/' 
          onClick={() => setMenu("home")} 
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <HashLink 
          to='/food-delivery-application/#explore-menu' 
          onClick={() => setMenu("menu")} 
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </HashLink>
        <HashLink 
          to='/food-delivery-application/#app-download' 
          onClick={() => setMenu("mobile-app")} 
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </HashLink>
        <HashLink 
          to='/food-delivery-application/#footer' 
          onClick={() => setMenu("contact-us")} 
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </HashLink>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-searchicon">
          <Link to='/food-delivery-application/cart'>
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
