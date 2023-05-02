import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../cartContext";
import { BsCart4 } from "react-icons/bs";

const CartNumber = () => {
  const { cart,isUser } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    setTotal(totalQuantity);
  }, [cart]);

  return (
    <button className="cartNumber">
      <BsCart4 className="cartIcon" color="#10071880" />
      <span className="numberIcon">{isUser ? total : "0"}</span>
      <p>Basket</p>
    </button>
  );
};

export default CartNumber;
