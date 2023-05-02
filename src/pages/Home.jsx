import AnimatedPage from "../AnimatedPage";
import BecauseLove from "../components/BecauseLove";
import MoreUs from "../components/MoreUs";
import ProductsSwiper from "../components/ProductsSwiper";
import SwiperComponent from "../components/SwiperComponent";

const Home = () => {
  return (
    <div>
      <AnimatedPage>
        <SwiperComponent />
        <MoreUs />
        <BecauseLove />
        <ProductsSwiper />
      </AnimatedPage>
    </div>
  );
};

export default Home;
