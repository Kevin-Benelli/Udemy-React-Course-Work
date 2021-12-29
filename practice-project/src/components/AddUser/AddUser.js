import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import Card from "../UI/Card";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // If username entry is null, throw error modal
    if (userName.trim().length === 0 && (age < 0 || age === "") === true) {
      // setUserNameErrorExists(true);
      // setAgeErrorExists(true);
      // setIsModalShown(true);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    } else if (userName.trim().length <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username (non-empty).",
      });
      return;
    } else if (+age <= 0) {
      // +makes sure that string is evaluated as int
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const addUserData = {
      userName: userName,
      age: age,
    };

    console.log(addUserData);
    // setAgeErrorExists(false);
    // setUserNameErrorExists(false);
    setUserName("");
    setAge("");

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
              onChange={userNameChangeHandler}
              value={userName}
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
              onChange={ageChangeHandler}
              value={age}
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
