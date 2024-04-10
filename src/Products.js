import React from "react";
import "./Products.css";
import { useStateValue } from "./StateProvider";

function Products({ id, title, image, rating = 0, price, discount }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
        discount: discount,
      },
    });
  };

  return (
    <div className="products">
      <img src={image} alt={title} />
      <span className="product_rating">
        {Array.from({ length: rating }, (_, i) => (
          <p key={i}>⭐</p>
        ))}
      </span>
      <div className="product_info">
        <p>
          <strong>{title}</strong>
        </p>
        <p className="product_price">
          <strong>Rs.</strong>
          <strong style={{ fontSize: "14px", marginRight: "5px" }}>
            {price}
          </strong>
          <small style={{ color: "red", fontSize: "12px" }}>{discount}</small>
        </p>
      </div>
      <button onClick={addToBasket}>Add to Bag</button>
    </div>
  );
}

export default Products;
