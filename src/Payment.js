import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
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
          <p>B A G ..........</p>
          <p>A D D R E S S........</p>
          <p>P A Y M E N T</p>
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
      <div className="payment_container">
        <h2>
          {" "}
          Checkout (<Link to="/Checkout"> {basket?.length} items</Link>){" "}
        </h2>

        <div className="payment_sections">
          <div className="payment_title">
            <h3>Delivery Address:</h3>
            <div className="payment_address">
              <p>{user?.email}</p>
              <p>{user?.address}</p>
              <p>{user?.city}</p>
              <p>{user?.state}</p>
              <p>{user?.zip}</p>
            </div>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment_items">
            {basket.map((items) => (
              <CheckoutProduct
                id={items.id}
                title={items.title}
                price={items.price}
                image={items.image}
                discount={items.discount}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
            <div className="payment_details">
              <p>Credit Card</p>
              <p>Paypal</p>
            </div>
          </div>

          <button>Place Your Order</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
