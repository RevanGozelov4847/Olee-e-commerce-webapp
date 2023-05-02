import React, { useContext } from "react";
import { CartContext } from "../cartContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const FavoriteNumber = () => {
  const { favorite } = useContext(CartContext);

  return (
    <button className="favoriteNumber">
      <MdOutlineFavoriteBorder className="heartIcon" color="#10071880" />
      <span className="numberIcon">{favorite.length}</span>
      <p>Favorites</p>
    </button>
  );
};

export default FavoriteNumber;
