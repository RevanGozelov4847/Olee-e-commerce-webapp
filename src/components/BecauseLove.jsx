import React from "react";
import { Link } from "react-router-dom";
import love1 from "../assets/images/becauseLove-1.png";
import love2 from "../assets/images/becauseLove-2.png";
import love3 from "../assets/images/becauseLove-3.png";
import love4 from "../assets/images/becauseLove-4.png";
import love5 from "../assets/images/becauseLove-5.png";

const BecauseLove = () => {
  return (
    <section>
      <div className="containerMore">
        <p className="title">Because you love</p>
        <p className="description-1">
          Olee-da olan bütün məhsullar geri qaytarma.
        </p>
        <p className="description-2">
          Sifarişlərinizi həm təhvil alarkən qapıda.
        </p>
        <div className="loveImages">
          <div className="love-left">
            <Link to={"/products"}>
              <div className="love-left-1">
                <img className="love1" src={love1} alt="" />
                <button className="button">Cookies</button>
              </div>
            </Link>

            <Link to={"/products"}>
              <div className="love-left-2">
                <img className="love2" src={love2} alt="" />
                <button className="button">Porfumery</button>
              </div>
            </Link>
          </div>

          <Link to={"/products"}>
            <div className="love-center">
              <div className="love-center-1">
                <img className="love3" src={love3} alt="" />
                <button className="button">Flowers</button>
              </div>
            </div>
          </Link>

          <div className="love-right">
            <Link to={"/products"}>
              <div className="love-right-1">
                <img className="love4" src={love4} alt="" />
                <button className="button">Gifts</button>
              </div>
            </Link>

            <Link to={"/products"}>
              <div className="love-right-2">
                <img className="love5" src={love5} alt="" />
                <button className="button">Cakes</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecauseLove;
