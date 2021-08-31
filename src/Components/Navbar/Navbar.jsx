import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";
import { useCart } from "../../Context/CartContext";

let Navbar = () => {
  let { cartItem, setCartItem } = useCart()
  return (
    <div >
      <nav className="nav">
        <Link className="nav-Links" to="/">
          Nk Mart
        </Link>
        <div>
          <Link className="nav-Links" to="/">
            Home
          </Link>
          <Link className="nav-Links" to="/products">
            Prodcuts
          </Link>
        </div>
        <div>
          <Link className="nav-Links" to="/wishList">
            <FavoriteIcon fontSize="large" />
          </Link>
          <Link className="nav-Links" to="/cart">
            <span style={{ position: 'relative', right: '1px' }}>{cartItem.length}</span>
            <ShoppingCartIcon fontSize="large" />
          </Link>
          <Link className="nav-Links" to="/login">
            <AccountCircleIcon fontSize="large" />
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
