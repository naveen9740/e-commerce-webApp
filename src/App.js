import { Route, Routes, Link } from "react-router-dom";
import { Navbar } from "./Components";
import {
  Home,
  Address,
  Cart,
  Login,
  WishList,
  ProductDetails,
  Products,
  PageNotFound,
} from "./Pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="//" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails/:prodId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Address />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
