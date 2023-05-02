import React, { useContext } from "react";
import AnimatedPage from "../AnimatedPage";
import { CartContext } from "../cartContext";

const Favorites = () => {
  const { favorite, removeFromFavorite } = useContext(CartContext);
  return (
    <AnimatedPage>
      <div className="objectives">
        {favorite.length === 0 && <h1 className="results">0 Results</h1>}

        <h1 style={{ display: favorite.length === 0 ? "none" : "block" }}>
          Favorites{" "}
        </h1>
      </div>

      {favorite.map((prod) => (
        <div className="carte" key={prod.id}>
          <div className="imgContainere">
            <img
              src={`http://localhost:5004/${prod?.productImage}`}
              alt="product favorites"
            />
          </div>
          <div className="cartInfoe">
            <div className="headlinee">
              <p>{prod?.name}</p>
              <button onClick={() => removeFromFavorite(prod.id)}>
                Remove
              </button>
            </div>
            <div className="processe">
              <i className="fa-regular fa-clock"></i> 1 Hours in the process
            </div>
            <div className="numberPricee">
              <div className="pricee">
                <p>{prod?.price} ₼</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </AnimatedPage>
  );
};

export default Favorites;
