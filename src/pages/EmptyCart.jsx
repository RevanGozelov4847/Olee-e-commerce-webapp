import React from "react";
import { Link } from "react-router-dom";
import cartImg from "../assets/images/emptyCart.png";

const EmptyCart = () => {
  return (
    <div className="emptyCart">
      <div className="imgContainer">
        <img src={cartImg} alt="" />
      </div>
      <h4>Cart is empty</h4>
      <p>You can place an order by adding products to the cart</p>
      <button>
        <Link to={"/products"}>Make a purchase</Link>
      </button>
    </div>
  );
};

export default EmptyCart;
