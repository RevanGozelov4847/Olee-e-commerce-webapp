import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AnimatedPage from "../AnimatedPage";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../cartContext";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = yup.object().shape({
  fullName: yup.string().required("Please enter your full name."),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please enter your phone"),
  address: yup.string().min(4).max(20).required("Please enter your address."),
  location: yup.string().required("Please select an option."),
  date: yup.string().required("Please select the date."),
  time: yup.string().required("Please select time."),
  textarea: yup
    .string()
    .min(10, "Cannot be less than 10")
    .max(250, "Cannot be more than 250")
    .required("Please add a comment"),
});

const Form = () => {
  const navigate = useNavigate();
  const { setCart, cart } = useContext(CartContext);
  const [isChecked, setIsChecked] = useState(false);
  const [price, setPrice] = useState(0);
  const total = isChecked ? price + 5 : price;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = () => {
    setCart([]);
    navigate("/");
  };

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
    setPrice(totalPrice);
  }, [cart]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <AnimatedPage>
      <div className="basket">
        <div className="navigation">
          <span className="navHome">Home page</span>
          <span>Basket</span>
          <span>Place an order</span>
        </div>
        <h1>Submit the order</h1>
      </div>
      <form onSubmit={handleSubmit(submitForm)} className="form">
        <div className="left">
          <div className="customer">
            <p>Customer</p>
            <span>Contact person who completed the order.</span>
            <div className="nameNumber">
              <div className="name">
                <label htmlFor="">Name and surname</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  {...register("fullName")}
                />
                <p className="form-error-msg">{errors.fullName?.message}</p>
              </div>
              <div className="number">
                <label htmlFor="">Mobile number</label>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  {...register("phoneNumber")}
                />
                <p className="form-error-msg">{errors.phoneNumber?.message}</p>
              </div>
            </div>
            <div className="nameNumber">
              <div className="name">
                <label className="territory" htmlFor="">
                  Territory
                </label>
                <select id="location" {...register("location")}>
                  <option value="someOption">Select a city</option>
                  <option value="otherOption1">Qaradag</option>
                  <option value="otherOption2">Baki</option>
                  <option value="otherOption3">Bineqedi</option>
                  <option value="otherOption4">Yasamal</option>
                </select>
                <p className="form-error-msg">{errors.location?.message}</p>
              </div>
              <div className="number">
                <label htmlFor="">Full address</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  {...register("address")}
                />
                <p className="form-error-msg">{errors.address?.message}</p>
              </div>
            </div>
            <div className="anonymous">
              <div className="checkDelivery">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p>ⓘ Anonymous delivery</p>
              </div>
              <span>+ 5₼</span>
            </div>
          </div>
          <div className="customer">
            <p>Delivery date</p>
            <span>
              Set the delivery time according to the production time of the
              products.
            </span>
            <div className="nameNumber">
              <div className="name">
                <label htmlFor="">History</label>
                <input type="month" {...register("date")} />
                <p className="form-error-msg">{errors.date?.message}</p>
              </div>
              <div className="number">
                <label className="clock" htmlFor="">
                  Clock
                </label>
                <select id="time" {...register("time")}>
                  <option value="someOption1">09:00 - 11:00</option>
                  <option value="otherOption5">11:00 - 13:00</option>
                  <option value="otherOption6">13:00 - 15:00</option>
                  <option value="otherOption7">15:00 - 17:00</option>
                  <option value="otherOption8">17:00 - 19:00</option>
                </select>
                <p className="form-error-msg">{errors.time?.message}</p>
              </div>
            </div>
            <div className="anonymous">
              <div className="checkDelivery">
                <input className="checkbox" type="checkbox" name="" id="" />
                <p>Urgent delivery ⓘ</p>
              </div>
              <span>+ 5₼</span>
            </div>
          </div>
          <div className="customer">
            <p>Additional note</p>
            <span>
              Please note if you have any special notes about your order
            </span>
            <div className="note">
              <input
                className="noteInput"
                type="text"
                placeholder="Write here..."
                {...register("textarea")}
              />
              <p className="form-error-msg">{errors.textarea?.message}</p>
            </div>
          </div>

          <div className="delivered"></div>
          <div className="date"></div>
          <div className="additional"></div>
        </div>
        <div className="right">
          <div className="discount">
            <div className="cost">
              <p>Cost of products</p>
              <span>65 ₼</span>
            </div>

            <div className="cost">
              <p>Discount</p>
              <span>-0.00 ₼</span>
            </div>

            <div className="cost">
              <p>Delivery</p>
              <span>0 ₼</span>
            </div>

            <div className="cost">
              <p>Anonymity service</p>
              <span>5 ₼</span>
            </div>
            <div className="promo">
              <input type="text" placeholder="Promo kod" />
              <button>Confirm</button>
            </div>
            <div className="conclusion">
              <p>Conclusion</p>
              <span>{total} ₼</span>
            </div>
          </div>
          <button className="confirm" type="submit">
            Confirm
          </button>
        </div>
      </form>
    </AnimatedPage>
  );
};

export default Form;
