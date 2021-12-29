import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import Card from "../UI/Card";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    // If username entry is null, throw error modal
    if (enteredName.trim().length === 0 && +enteredAge < 0 === true) {
      // setUserNameErrorExists(true);
      // setAgeErrorExists(true);
      // setIsModalShown(true);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    } else if (enteredName.trim().length <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username (non-empty).",
      });
      return;
    } else if (+enteredAge <= 0) {
      // +makes sure that string is evaluated as int
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const addUserData = {
      userName: enteredName,
      age: enteredAge,
    };

    console.log(addUserData);
    // setAgeErrorExists(false);
    // setUserNameErrorExists(false);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    props.onSaveUserData(addUserData);
  };

  const closeModalHandler = () => {
    // setIsModalShown(false);
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModalHandler={closeModalHandler}
        />
      )}

      <Card className={styles.input}>
        <form>
          <div>
            <label htmlFor="username"> Username: </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter Username Here..."
              ref={nameInputRef}
            />
          </div>
          <div>
            <label htmlFor="age" className={styles.label}>
              Age:
            </label>
            <input
              type="number"
              className={styles.input}
              placeholder="Enter Age Here..."
              ref={ageInputRef}
            />
          </div>
          <Button type={"button"} onClick={submitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
