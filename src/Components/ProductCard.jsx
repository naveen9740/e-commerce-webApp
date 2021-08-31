import React from "react";

export let ProductCard = ({ name, img, price, mrp }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "350px",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
                border: "1px solid red",
                zIndex: "-1",
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
            <button>Add to Cart</button>
            <button
                onClick={() => {
                    console.log("click");
                }}
                style={{
                    position: "absolute",
                    right: "10px",
                    top: "5px",
                    fontSize: "1rem",
                }}
            >
                ❤
            </button>
        </div>
    );
};
