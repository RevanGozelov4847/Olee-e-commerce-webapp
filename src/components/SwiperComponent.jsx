import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper.min.css";
import swiperImage1 from "../assets/images/swiperImage-1.png";
import swiperImage2 from "../assets/images/swiperImage-2.png";
import swiperImage3 from "../assets/images/swiperImage-3.png";
import swiperImage4 from "../assets/images/swiperImage-4.png";
import swiperImage5 from "../assets/images/swiperImage-5.png";
import swiperImage6 from "../assets/images/swiperImage-6.png";

import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const SwiperComponent = () => {
  return (
    <div className="swiper-cards-wrapper">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          380: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        speed={600}
        autoplay={1000}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
      >
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">I'am sorry</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage1} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">For myself</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage2} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">I love you</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage3} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">Execuse me</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage4} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">I'm sorry</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage5} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products"}>
            <div className="swiper-slide-card">
              <span className="swiper-slide-span">For myself</span>
              <div className="swiper-slide-img-block">
                <img src={swiperImage6} alt="" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
