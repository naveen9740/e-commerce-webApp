import React, { useEffect, useReducer, useState } from "react";
import { ProductCard } from "../Components/ProductCard";
import { useCart } from "../Context/CartContext";

let Products = () => {
  let { data } = useCart();

  let [{ sortBy, brand }, dispatch] = useReducer(
    function reducerFxn(state, action) {
      switch (action.type) {
        case "SORT":
          return { ...state, sortBy: action.payload };

        case "BRAND":
          return { ...state, brand: action.payload };
        default:
          break;
      }
    },
    {
      sortBy: null,
    }
  );

  let getSortedData = (data, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return data.sort((a, b) => a["price"] - b["price"]);
    }
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return data.sort((a, b) => b["price"] - a["price"]);
    }
    return data;
  };

  let sortedData = getSortedData(data, sortBy);

  return (
    <div
      style={{
        position: "absolute",
        top: "80px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h4 style={{ fontFamily: "Roboto", margin: "0px 0px 20px 0px" }}>
        Home | Products
      </h4>
      <div
        style={{
          border: "1px solid blue",
          textAlign: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "15vw",
            border: "1px solid orange",
            textAlign: "left",
            margin: "0.3rem",
            display: "flex",
            flexDirection: "column",
            fontFamily: "roboto",
            padding: "0.8rem",
          }}
        >
          <h3>Price</h3>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
              }
              checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
            ></input>{" "}
            Price - High to Low
          </label>
          <label style={{ padding: "0px 0px 0.5rem 0px" }}>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
              }
              checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
            ></input>{" "}
            Price - Low to High
          </label>

        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "80vw",
          }}
        >
          {data.map((product, index) => {
            return (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                img={product.img}
                mrp={product.mrp}
                id={product.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Products;
