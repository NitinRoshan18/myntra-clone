import React from "react";
import './Products.css';

import { useStateValue } from "./StateProvider";

function Product({ id, title, image, rating, price,mrp, discount }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Dispatch item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        rating,
        price,
        mrp,
        discount,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product_rating">
        {Array.from({ length: rating }, (_, i) => (
          <p key={i}>⭐</p>
        ))}
      </div>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <strong>Rs. {price}</strong>
          <small style={{ color: "grey", fontSize: "13px", marginLeft:"5px" }}><del>{mrp}</del></small>
          <small style={{ color: "red", fontSize: "10px" }}>{discount}</small>
        </p>
      </div>
      <button onClick={addToBasket}>ADD TO BAG</button>
    </div>
  );
}

export default Product;
