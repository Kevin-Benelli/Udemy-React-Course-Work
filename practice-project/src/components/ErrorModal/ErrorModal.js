import React from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../Button/Button";

const Backdrop = ({ onCloseModalHandler }) => {
  return <div className={styles.backdrop} onClick={onCloseModalHandler} />;
};

const ModalOverlay = ({ title, message, onCloseModalHandler }) => {
  return (
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
  );
};

const ErrorModal = ({ title, message, onCloseModalHandler }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModalHandler={onCloseModalHandler} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onCloseModalHandler={onCloseModalHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
