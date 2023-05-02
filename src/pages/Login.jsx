import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../src/assets/images/loginImage.png";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter email")
    .required("Enter duzgun email")
    .matches(
      /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
      "Please enter 'example@gmail.com' format"
    ),
  password: yup
    .string()
    .required("enter password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password should contain at least 8 char and 1 number"
    ),
});

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(userData, { abortEarly: false });
      await localStorage.setItem("user", JSON.stringify(true));
      navigate("/");
      window.location.reload();
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      navigate("/login");
    }
  };

  return (
    <div className="login">
      <div className="imageContainer">
        <img src={loginImage} alt="" />
      </div>
      <form className="form-control">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          type="text"
          id="email"
          name="email"
          placeholder="Please write your email"
        />
        {errors.email && (
          <p className="form-control-error-msg">{errors.email}</p>
        )}

        <label htmlFor="password" id="password">
          Password
        </label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="form-control-error-msg">{errors.password}</p>
        )}

        <button type="submit" onClick={loginUser}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
