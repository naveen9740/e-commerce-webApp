import React, { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";

let Products = () => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let response = await fetch("/api/products");
        let { products } = await response.json();
        setData(data.concat(products));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div style={{ position: "absolute", top: "6.25rem", textAlign: "center" }}>
      {loading && <h2>Products Loading.....</h2>}
      {!loading && <h2>This is Products page</h2>}
      <div style={{ display: "flex", border: "1px solid black" }}>
        {!loading && (
          <aside style={{ width: "1000px" }} className="filter">
            Filter section
          </aside>
        )}
        <section className="product-info">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              border: "1px solid red",
            }}
          >
            {data.map((product) => {
              return (
                <ProductCard
                  name={product.name}
                  price={product.price}
                  img={product.img}
                  mrp={product.mrp}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Products;
