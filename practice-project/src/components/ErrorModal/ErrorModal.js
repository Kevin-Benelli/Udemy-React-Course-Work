import React from "react";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ nameError, ageError, onCloseModalHandler }) => {
  let error = <h1> Error </h1>;
  if (nameError && ageError) {
    error = <h1> Name field can't be empty and Age must be {">"} 0.</h1>;
  } else if (ageError) {
    error = <h1>Age must be {">"} 0.</h1>;
  } else if (nameError) {
    error = <h1>Name field is empty </h1>;
  }

  return (
    <div>
      {/* {console.log(!nameError, !ageError)} */}
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <h1 className={styles.header}> Input Error!</h1>
          <h1 className={styles.content}>{error}</h1>
          <button
            type="submit"
            onClick={onCloseModalHandler}
            className={styles.actions}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
