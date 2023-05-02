import React from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token !== null) {
          return <Component {...props} />;
        } else {
          return (
            <Navigate
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRouter;
