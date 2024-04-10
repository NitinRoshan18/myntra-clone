import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

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
        <div class="men-categories">
          <p className="men">MEN</p>
          <div className="menu-container">
            <div className="men-catog-options">
              <div className="catog-option">
                <ul>
                  <h5>Topwear</h5>
                  <li>T-Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Formal Shirts</li>
                  <li>Sweatshirts</li>
                  <li>Sweaters</li>
                  <li>Jackets</li>
                  <li>Blazer & Coats</li>
                  <li>Suits</li>
                  <li>Rain Jackets</li>

                  <h5>Indian & Festive Wear</h5>
                  <li>Kuratas & Kurta Sets</li>
                  <li>Sherwanis</li>
                  <li>Nehru Jackets</li>
                  <li>Dhotis</li>
                </ul>
              </div>
              <div className="catog-option">
                <ul>
                  <h5>Bottomwear</h5>
                  <li>Jeans</li>
                  <li>Casual Trousers</li>
                  <li>Formal Trousers</li>
                  <li>Shorts</li>
                  <li>Track Pants & Joggers</li>

                  <h5>Innerwear & Sleepwear</h5>
                  <li>Briefs & Trunks</li>
                  <li>Boxers</li>
                  <li>Vests</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Thermal</li>
                  <h5>Plus Size</h5>
                </ul>
              </div>
              <div className="catog-option">
                <ul>
                  <h5>Footwear</h5>
                  <li>Casual Shoes</li>
                  <li>Sport Shoes</li>
                  <li>Formal Shoes</li>
                  <li>Sneakers</li>
                  <li>Sandals & Floaters</li>
                  <li>Flip Flops</li>
                  <li>Socks</li>

                  <h5>Personal Care & Grooming</h5>
                  <h5>Sunglasses & Frames</h5>
                  <h5>Watches</h5>
                </ul>
              </div>
              <div className="catog-option">
                <ul>
                  <h5>Sports shoes</h5>
                  <li>Sports Sandals</li>
                  <li>Active T-Shirts</li>
                  <li>Track Pants & Shorts</li>
                  <li>Tracksuits</li>
                  <li>Jackets & Sweatshirts</li>
                  <li>Sports Accesories</li>
                  <li>Swimmwear</li>

                  <h5>Gadgets</h5>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>
              </div>
              <div className="catog-option">
                <ul>
                  <h5>Fashion Accessories</h5>
                  <li>Wallets</li>
                  <li>Belts</li>
                  <li>Perfumes & Body Mists</li>
                  <li>Trimmers</li>
                  <li>Deodorants</li>
                  <li>Ties, Cufflinks & Pocket Squares</li>
                  <li>Accesory Gift Sets </li>
                  <li>Caps & Hats </li>
                  <li>Mufflers, Scarves & Gloves</li>
                  <li>Phone Cases</li>
                  <li>Rings & Wristwear</li>
                  <li>Helmets</li>
                  <h5>Bags & Backpacks</h5>
                  <h5>Lugguages & Trolleys</h5>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div class="men-categories">
          <p className="women">WOMEN</p>
          <div className="menu-container">
            <div className="men-catog-options">
              <div className="catog-option">
                <ul>
                  <h5>Indian & Fushion Wear</h5>
                  <li>T-Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Formal Shirts</li>
                  <li>Sweatshirts</li>
                  <li>Sweaters</li>
                  <li>Jackets</li>
                  <li>Blazer & Coats</li>
                  <li>Suits</li>
                  <li>Rain Jackets</li>
                  <li>Kuratas & Kurta Sets</li>
                  <li>Sherwanis</li>
                  <li>Nehru Jackets</li>
                  <h5>Belts, Scarves & More</h5>
                  <h5>Watches & Wearables</h5>
                </ul>
              </div>
              <div className="catog-option">
                <ul>
                  <h5>Western Wear</h5>
                  <li>Jeans</li>
                  <li>Casual Trousers</li>
                  <li>Formal Trousers</li>
                  <li>Shorts</li>
                  <li>Track Pants & Joggers</li>
                  <li>Briefs & Trunks</li>
                  <li>Boxers</li>
                  <li>Vests</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Thermal</li>
                  <li>Jackets & Coats</li>
                  <li>Blazers & Waistcoats</li>
                  <h5>Plus Size</h5>
                </ul>
              </div>
              <div className="catog-option">
                <ul>
                  <h5>Maternity</h5>
                  <h5>Sunglasses & Frames</h5>
                  <h5>Footwear</h5>
                  <li>Flats</li>
                  <li>Casual Shoes</li>
                  <li>Sport Shoes</li>
                  <li>Formal Shoes</li>
                  <li>Sneakers</li>

                  <h5>Sport & Active Wear</h5>
                  <li>Clothing</li>
                  <li>Footwear</li>
                  <li>Sports Accessories</li>
                  <li>Sports Equipment</li>
                </ul>
              </div>
              <div className="catog-option">
                <ul>
                  <h5>Lingerie & Sleepwear</h5>
                  <li>Bra</li>
                  <li>Briefs</li>
                  <li>Track Pants & Shorts</li>
                  <li>Tracksuits</li>
                  <li>Jackets & Sweatshirts</li>
                  <li>Sports Accesories</li>

                  <h5>Beauty & Personal Care</h5>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                  <li>Fragrances</li>
                </ul>
              </div>
              <div className="catog-option">
                <ul>
                  <h5>Gadgets</h5>
                  <li>Wallets</li>
                  <li>Belts</li>
                  <li>Perfumes & Body Mists</li>
                  <li>Trimmers</li>
                  <h5>Jewellery</h5>
                  <li>Fashion Jewellery</li>
                  <li>Fine Jewellery</li>
                  <li>Earrings</li>

                  <h5>Backpacks</h5>
                  <h5>Handbags, Bags & Wallets</h5>
                  <h5>Lugguages & Trolleys</h5>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
        <Link to={!user && "/login"} className="link-button">
          <div onClick={handleAuthentication} className="user-options">
            <SlUser className="header-icons" />
            Profile {!user ? "Guest" : user.email}{" "}
            {user ? "Sign out" : "Sign In"}
          </div>
        </Link>
        <div className="user-options">
          <FaRegHeart className="header-icons" />
          Wishlist
        </div>

        <Link to="/checkout" className="link-button">
          <div className="user-options">
            <HiOutlineShoppingBag className="header-icons" />
            Bag
          </div>
          <span className="header_option-lineTwo header_cartCount">
            {basket?.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
