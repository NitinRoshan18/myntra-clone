import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { CiDiscount1 } from "react-icons/ci";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { RxBookmark } from "react-icons/rx";
import { GoTag } from "react-icons/go";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [ {basket, user}, ] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="checkout-header-option">
          <Link to={"/"} className="link-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png"
              alt="myntra logo"
              className="myntra-logo"
            />
          </Link>
        </div>
        <div className="checkout-header-option">
          <p style={{ color: "#20BD99", fontSize: "14px" }}>B A G ..........</p>
          <p>A D D R E S S........</p>
          <p>P A Y M E N T</p>
        </div>
        <div className="checkout-header-option">
          <p></p>
        </div>
        <div className="checkout-header-option">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            alt=""
            className="secure-tick"
          />
          <p>100% SECURE</p>
        </div>
      </div>
      <div className="checkout-content">
        <div className="checkout-right">
          <div className="checkout-address">Deliver to:{user?.email}</div>
          <div className="bank-offers">
            <span>
              <CiDiscount1 className="discount-icon" /> Available Offers
            </span>
            <ul>
              <li>
                10% Instant Discount on ICICI Bank Credit Cards on a min spend
                of ₹3,500. TCA
              </li>
            </ul>
            <p>Show More^</p>
          </div>
          <div className="Cart-products">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
          <div className="add-from-wishlist">
            <p>
              <span>
                <RxBookmark className="discount-icon" />
                Add More From Wishlists
              </span>{" "}
              <LiaGreaterThanSolid className="discount-icon" />
            </p>
          </div>
        </div>
        <div className="checkout-left">
          <div className="coupon-section">
            <h6>COUNPONS</h6>
            <span>
              <GoTag className="discount-icon" />
              Apply Coupons <button>APPLY</button>
            </span>
          </div>
          <div className="gifting">
            <h6>GIFTING & PERSONALISATION</h6>
            <div className="gifting-section">
              <img
                src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
                alt=""
              />
              <div>
                <h5>Buying for a loved one?</h5>
                <p>
                  Gift wrap and personalised message on card,
                  <br /> Only for 25
                </p>
                <h4>ADD GIFT WRAP</h4>
              </div>
            </div>
          </div>
          <div className="subtotal-section">
            <Subtotal />

            {/*<span>
              <p>Total MRP</p>
              <p>₹0</p>
            </span>
            <span>
              <p>Shipping Fee</p>
              <p>₹0</p>
          </span>*/}
          </div>
          {/*<div id="grand-total">
            <h4>Total Amount</h4>
            <h4>₹0</h4>
          </div>
          <div className="order-button">
            <button>PLACE ORDER</button>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
