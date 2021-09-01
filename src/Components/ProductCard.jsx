import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

export let ProductCard = ({ id, name, img, price, mrp }) => {
    let [toast, setToast] = useState(false);
    let { dispatch } = useCart()
    let [heart, setHeart] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "350px",
                justifyContent: "center",
                alignItems: "center",
                height: "330px",
                border: "1px solid red",
                margin: "0.5rem",
                padding: "0.3rem",
                position: "relative",
            }}
        >
            <img src={img} style={{ width: "230px", height: "170px" }} />
            <h2 style={{ fontFamily: "poppins" }}>{name}</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div style={{ fontSize: "1.6rem", color: "red" }}>₹{price}</div>&nbsp;
                <span>
                    <del>₹{mrp}</del>
                </span>
                <span>
                    &nbsp;Save ₹{mrp - price}({100 - parseInt((price / mrp) * 100)}%)
                </span>
            </div>
            <button
                onClick={() => {

                    return dispatch({ type: 'ADDTOCART', payload: { id } })
                }}
            >
                Add to Cart
            </button>
            <Link to={`/productDetails/${id}`}>View More Details</Link>
            {toast && <div>Item Added To toast</div>}
            <button
                onClick={() => {
                    setHeart(!heart)
                    return dispatch({ type: 'ADDTOWISHLIST', payload: { id } })
                }}
                style={{
                    position: "absolute",
                    right: "10px",
                    top: "5px",
                    fontSize: "1rem",
                }}
            >
                {heart ? '❤️' : '❤'}
            </button>
        </div>
    );
};
