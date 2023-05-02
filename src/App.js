import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import SpecificProduct from "./pages/SpecificProduct";
import Cart from "./pages/Cart";
import Form from "./pages/Form";
import Accordion from "./components/Accordion";
import ResponsiveAccordion from "./components/ResponsiveAccordion";
import EmptyCart from "./pages/EmptyCart";
import StickyNavbar from "./components/StickyNavbar";
import Sidebar from "./components/Sidebar";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import { CartProvider } from "./cartContext";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./assets/scss/main.scss";
import Loader from "./components/Loader";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  setTimeout(() => {
    setLoader(false);
  }, 1000);

  const checkUser = async () => {
    try {
      let localUser = await JSON.parse(localStorage.getItem("user"));
      if (localUser !== null) {
        setIsUser(true)
        return
      } 
     setIsUser(false)
     navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {loader ? <Loader /> : null}
      <CartProvider>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SpecificProduct />} />
            {isUser ? <Route path="/cart" element={<Cart />} /> : null}
            <Route path="/form" element={<Form />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/emptyCart" element={<EmptyCart />} />
            <Route path={"/login"} element={<Login />} />
            <Route
              path="/responsiveAccordion"
              element={<ResponsiveAccordion />}
            />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <StickyNavbar />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
