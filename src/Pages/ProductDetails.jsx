import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";

let ProductDetails = () => {
  let { prodId } = useParams();
  let { data, dispatch } = useCart();
  let { name, price, img, description, id } = data.find(
    (item) => item.id === prodId
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ width: '80vw' }}>
        <div
          style={{
            display: "flex",
            fontFamily: "roboto",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid blue",
          }}
        >
          <div style={{ border: "1px solid red" }}>
            <img src={img} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem",
            }}
          >
            <h2>{name}</h2>
            <h4>Price : ₹{price}</h4>
            {description.map((para, index) => {
              return <li key={index}>{para}</li>;
            })}
            <button
              onClick={() => {
                return dispatch({ type: "ADDTOCART", payload: { id } });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
