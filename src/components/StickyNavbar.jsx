import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext";

const StickyNavbar = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(CartContext);
  const { favorite } = useContext(CartContext);

  useEffect(() => {
    const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    setTotal(totalQuantity);
  }, [cart]);

  return (
    <nav className="navbar">
      <div className="sticky">
        <li>
          <Link to="/">
            <i className="fa-regular black-icon fa-user"></i>
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <button className="favoriteNumber">
              <i className="fa-regular   fa-md fa-heart"></i>
              <span className="iconSticky">{favorite.length}</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <button className="cartNumber">
              <i className="fa-solid  fa-cart-shopping fa-md"></i>
              <span className="iconSticky">{total}</span>
            </button>
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="/">
              <i className="fa-solid black-icon fa-bars"></i>
            </Link>
          </button>
        </li>
      </div>
    </nav>
  );
};

export default StickyNavbar;
