import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Navigate to the payment page
    navigate("/Payment");
  };

  const [{ basket }, dispatch] = useStateValue();

  const totalPrice = getBasketTotal(basket);

  // Convert the total price to a number
  const formattedTotalPrice = parseFloat(totalPrice).toFixed(2);

  // Convert the formatted total price to a number
  const formattedTotalPriceNumber = parseFloat(formattedTotalPrice);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
        )}
        decimalScale={3}
        value={formattedTotalPriceNumber}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={handleCheckout}>PLACE ORDER</button>
    </div>
  );
}

export default Subtotal;
