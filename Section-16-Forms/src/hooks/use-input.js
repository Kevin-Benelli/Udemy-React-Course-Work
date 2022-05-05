import { useReducer } from "react";

const initInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initInputState);
  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value); // This is run every re-render on each keystroke | First figure out if input is valid
  const hasError = !valueIsValid && inputState.isTouched; // inferred value | then check if input has been touched

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setEnteredValue(event.target.value); // updates and then schedules so we need to use event.target.value in the if block
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
    // setIsTouched(true); // if input looses focused it has been touched
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setEnteredValue("");
    // setIsTouched(false);
  };

  return {
    value: inputState.value,
    hasError: hasError,
    isValid: valueIsValid,
    reset: reset,
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
  };
};

export default useInput;
