import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext";
import ProductCard from "../components/ProductCard";
import AnimatedPage from "../AnimatedPage";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const { products } = useContext(CartContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClicked = () => {
    setIsOpened(!isOpened);
  };
  return (
    <AnimatedPage>
      <div className="objectives bg-header-products">
        <h1>Objectives</h1>
      </div>
      <div className="results">
        <div className="headline">
          <p>Results</p>
          <span>Back to old </span>
        </div>

        <div className="filterProducts">
          <div className="filter">
            <div className="purpose">
              <div className="title">
                <button className="buttonFilter" onClick={handleClick}>
                  Purpose
                </button>
                <div>
                  <i className="fa-solid minus fa-minus"></i>
                </div>
              </div>
              {isOpen && (
                <div className="detailed">
                  <p>I love you</p>
                  <p>I congratulate you</p>
                  <p>Sorry</p>
                  <p>New job</p>
                  <p>Because I love it</p>
                  <p>I'm sorry</p>
                  <p>For newborns</p>
                  <p>Year anniversary</p>
                  <p>For myself</p>
                </div>
              )}
            </div>
            <div className="price">
              <div className="title">
                <button className="buttonFilter" onClick={handleClicked}>
                  Price
                </button>
                <div>
                  <i className="fa-solid minus fa-minus"></i>
                </div>
              </div>
              {isOpened && (
                <div className="priceInterval">
                  <input type="text" />
                  <i className="fa-solid minusPrice fa-minus"></i>
                  <input type="text" />
                </div>
              )}
            </div>
            <button>Search</button>
          </div>
          <div className="resultProducts">
            {products?.map((item) => {
              return (
                <Link
                  to={`/products/${item.id}`}
                  key={item.id}
                  className="prod-card-wrapper"
                >
                  <ProductCard item={item} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Products;
