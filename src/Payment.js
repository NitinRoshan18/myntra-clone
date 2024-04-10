import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user},] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          {" "}
          Checkout (<Link to="/Checkout"> {basket?.length} items</Link>){" "}
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
            <div className="payment_address">
              <p>{user?.email}</p>
              <p>{user?.address}</p>
              <p>{user?.city}</p>className="checkoutProduct_title
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
