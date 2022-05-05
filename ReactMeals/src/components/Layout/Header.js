import React, { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import meal from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div>
        <img
          src={meal}
          alt="An assortment of food"
          className={classes["main-image"]}
        />
      </div>
    </Fragment>
  );
};
export default Header;
