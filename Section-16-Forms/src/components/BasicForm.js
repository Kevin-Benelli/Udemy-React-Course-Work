import React from "react";
import useInput from "../hooks/use-input";
import "../index.css";

const BasicForm = (props) => {
  const {
    value: firstNameEnteredValue,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    reset: resetFirstName,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: lastNameEnteredValue,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    reset: resetLastName,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: emailEnteredValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    reset: resetEmail,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((value) => {
    return value.trim().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  });

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    console.log("yo");
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameConditionalStyles = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameConditionalStyles = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailConditionalStyles = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameConditionalStyles}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameEnteredValue}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />

          {firstNameHasError && (
            <p className="error-text">First name must not be blank</p>
          )}
        </div>

        <div className={lastNameConditionalStyles}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameEnteredValue}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />

          {lastNameHasError && (
            <p className="error-text">Last name must not be blank</p>
          )}
        </div>
        <div className={emailConditionalStyles}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            value={emailEnteredValue}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          />

          {emailHasError && (
            <p className="error-text">Email must not be empty</p>
          )}
        </div>
        <div className="form-actions">
          <button className="disabled" disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
