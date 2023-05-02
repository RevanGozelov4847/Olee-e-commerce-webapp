import swiperImage1 from "../assets/images/moreUsSwiper-1.png";
import swiperImage2 from "../assets/images/moreUsSwiper-2.png";

import "swiper/css/pagination";
import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { TbTruckDelivery } from "react-icons/tb";
import { TbCreditCard } from "react-icons/tb";
import { BsBox2Heart } from "react-icons/bs";
import { MdOutlineSentimentSatisfied } from "react-icons/md";

const MoreUs = () => {
  return (
    <div className="container moreUs-container">
      <div className="moreUs">
        <div className="swiperSide">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            loop={true}
            speed={600}
            autoplay={1000}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="imgContainer">
                <img src={swiperImage1} alt={"iame"} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgContainer">
                <img src={swiperImage2} alt={"sc"} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="aboutUs">
          <div className="leftAbout">
            <div className="delivery icons-adaptive">
              <TbTruckDelivery
                className="tbtruck"
                fontSize="2.6rem"
                color=" rgba(44, 20, 79, 0.7)"
              />
              <p className="title">Fast delivery</p>
              <p>
                Your orders are delivered to your address within the same day.
              </p>
            </div>
            <div className="preperation icons-adaptive">
              <div>
                <BsBox2Heart
                  className="tbtruck"
                  fontSize="2.2rem"
                  color=" rgba(44, 20, 79, 0.7)"
                />
              </div>
              <p className="title">Special preparation</p>
              <p>All orders to you</p>
              <p>It is prepared specially</p>
            </div>
          </div>
          <div className="rightAbout">
            <div className="payment icons-adaptive">
              <TbCreditCard
                className="tbtruck"
                fontSize="2.6rem"
                color=" rgba(44, 20, 79, 0.7)"
              />
              <p className="title">Convenient payment</p>
              <p>Pay cash both online and at the door</p>
            </div>
            <div className="satisfaction icons-adaptive">
              <MdOutlineSentimentSatisfied
                className="tbtruck"
                fontSize="2.6rem"
                color=" rgba(44, 20, 79, 0.7)"
              />
              <p className="title">Satisfaction</p>
              <p>We strive to please you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreUs;
