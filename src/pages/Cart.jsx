import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { CartContext } from "../cartContext";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
    setPrice(totalPrice);
  }, [cart]);

  return (
    <AnimatedPage>
      <div className="basket">
        <div className="navigation">
          <span className="navHome">Home page</span>
          <span>Basket</span>
        </div>
        <h1>Basket</h1>
      </div>
      <div className="carts">
        <div className="cartProducts">
          <CartProduct />
        </div>
        <div
          className="priceButton"
          style={{ display: cart.length === 0 ? "none" : "block" }}
        >
          <div className="totalPrice">
            <div className="cost">
              <p>Cost of products</p>
              <p>{price} ₼</p>
            </div>
          </div>
          <div className="buttons">
            <Link to={"/form"}>
              <button className="confirm">Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Cart;
