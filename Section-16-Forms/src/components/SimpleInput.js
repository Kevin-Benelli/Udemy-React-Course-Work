import React from "react";
import useInput from "../hooks/use-input";
/*
Author: Kevin Benelli
useState vs. useRef
useState: 
1. If you need immediate validation (per keystroke)
2. Reset entered input after submission / click


useRef:
1. Just need last input value
*/

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameIsValid,
    reset: resetNameInput,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => {
    console.log("NAME VALUE: ", value);
    return value.trim() !== "";
  });

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    reset: resetEmailInput,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => {
    console.log("EMAIL VALUE: ", value);
    return value.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  });

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    // evaluated each render instead of having to use a useEffect
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // prevent http request being sent, if http request was sent it would reload the page and restart the react application. We would also loose state.

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>

      <div className="form-actions">
        <button className="disabled" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
