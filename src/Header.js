import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header() {
  return (
    <div className="header">
       
      <div className="logo">
      <Link to={"/"} className="link-button">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png"
          alt="myntra logo"
          className="myntra-logo"
        />
         </Link>
      </div>
     
      <div className="header-main">
        <p>MEN</p>
      </div>
      <div className="header-main">
        <p>WOMEN</p>
      </div>
      <div className="header-main">
        <p>KIDS</p>
      </div>
      <div className="header-main">
        <p>HOME & LIVING</p>
      </div>
      <div className="header-main">
        <p>BEAUTY</p>
      </div>
      <div className="header-main">
        <p>
          STUDIO<sup>NEW</sup>
        </p>
      </div>
      <div className="header-search">
        <HiMagnifyingGlass id="search-icon" />
        <input placeholder="Search for products, brands and more " />
      </div>
      <div className="user">
        <Link to={"/login"} className="link-button">
          <div className="user-options">
            <SlUser className="header-icons" />
            Profile
          </div>
        </Link>
        <div className="user-options">
          <CiHeart className="header-icons" />
          Wishlist
        </div>

        <Link to="/checkout" className="link-button">
          <div className="user-options">
            <HiOutlineShoppingBag className="header-icons" />
            Bag
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
