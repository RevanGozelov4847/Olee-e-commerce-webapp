import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const ProductCard = ({ item }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const handleToggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (
    <Link to={`/products/${item.id}`} className="card" id={item.id}>
      <div className="img-container">
        <span className="heart-icon-block">
          <div className="heartIcon" onClick={handleToggleWishlist}>
            {isInWishlist ? (
              <AiTwotoneHeart fill="#f5405b" />
            ) : (
              <AiOutlineHeart />
            )}
          </div>
        </span>
        <img
          className="product-img"
          src={`http://localhost:5004/${item.productImage}`}
          alt="heyo"
        />
      </div>
      <div className="cardInfo">
        <div className="cardPopular">
          <span>
            <i className="fa-solid flameIcon fa-fire-flame-curved"></i>
          </span>
          <span className="popularSpan">Popular</span>
        </div>
        <p className="cardTitle">{item.name}</p>
        <p className="cardPrice">{item.price}₼</p>
        <p className="process">
          <i className="fa-regular fa-clock"></i>
          <span>1 Hours in the process</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
