import React from "react";
import { WishListCard } from "../Components/CardInWishList";
import { useCart } from "../Context/CartContext";

let WishList = () => {
    let { wishList } = useCart();
    return <div
        style={{
            position: "absolute",
            top: "100px",
            display: "flex",
            flexDirection: "row",
        }}
    >
        <div style={{ border: "1px solid red", textAlign: "center" }}>
            <h2>WishList page</h2>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {wishList.map((product, index) => {
                    return (
                        <WishListCard
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
}
export default WishList