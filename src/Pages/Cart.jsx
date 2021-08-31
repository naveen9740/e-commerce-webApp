import React from "react";
import { CartCard } from "../Components/CardInCart";
import { useCart } from "../Context/CartContext";


let Cart = () => {
    let { cartItem } = useCart();
    return (
        <div
            style={{
                position: "absolute",
                top: "100px",
                display: "flex",
                flexDirection: "row",
            }}
        >
            <div style={{ border: "1px solid red", textAlign: "center" }}>
                <h2>Cart page</h2>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {cartItem.map((product, index) => {
                        return (
                            <CartCard
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
export default Cart;
