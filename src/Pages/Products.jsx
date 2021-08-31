import React, { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";
import { useCart } from "../Context/CartContext";

let Products = () => {
  let { data } = useCart();

  return (
    <div style={{ position: 'absolute', top: '100px', display: 'flex', flexDirection: 'row' }}>
      <div style={{ border: '1px solid red', textAlign: 'center' }}>
        <h2>Products page</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
