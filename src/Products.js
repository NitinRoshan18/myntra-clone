import React from "react";
import "./Products.css";

function Products({ id, title, description, discount, image, price, rating }) {
  /*const addToBasket = () => {
  //dispatch items to data layer
 dispatch({
   type: "ADD_TO_BASKET",
   item:{
    id: id,
    title: title,
    image: image,
    price: price,
    rating:rating,
   },
   
 });
};*/

  return (
    <div className="products">
      <img src={image} alt="" />
      <span className="product_rating">
        {Array.from({ length: rating }, (_, i) => (
          <p key={i}>⭐</p>
        ))}
      </span>
      <div className="product___info">
        <p><strong>{title}</strong></p>
        <p>{description}</p>
        <p className="product__price">
          <strong>Rs.</strong>
          <strong style={{  fontSize: '14px', marginRight:'5px'  }}>{price}</strong>
          <small style={{ color: 'red', fontSize: '12px',  }}>{discount}</small>
        </p>
      </div>
      {/* <button>Buy Now</button>*/}
      <button>Add to Bag</button>
    </div>
     
  );
}
export default Products;
