import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../Button/Button";

const ErrorModal = ({ title, message, onCloseModalHandler }) => {
  //   let error = <h1> Error </h1>;
  //   if (nameError && ageError) {
  //     error = <h1> Name field can't be empty and Age must be {">"} 0.</h1>;
  //   } else if (ageError) {
  //     error = <h1>Age must be {">"} 0.</h1>;
  //   } else if (nameError) {
  //     error = <h1>Name field is empty </h1>;
  //   }

  return (
    <div>
      <div className={styles.backdrop} onClick={onCloseModalHandler}>
        {/* {console.log(!nameError, !ageError)} */}
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h1> {title} </h1>
          </header>

          <div className={styles.content}>
            <p className={styles.content}>{message}</p>
          </div>
          <footer className={styles.actions}>
            <Button
              type="submit"
              onClick={onCloseModalHandler}
              className={styles.actions}
            >
              Ok
            </Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
