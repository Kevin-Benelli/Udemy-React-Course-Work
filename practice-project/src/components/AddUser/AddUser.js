import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [ageErrorExists, setAgeErrorExists] = useState(false);
  const [userNameErrorExists, setUserNameErrorExists] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  const userNameChangeHandler = (e) => {
    console.log("userName Updated", e.target.value);
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    console.log("age Updated", e.target.value);
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // If username entry is null, throw error modal
    if (
      userName.trim().length <= 0 === true &&
      (age < 0 || age === "") === true
    ) {
      setUserNameErrorExists(true);
      setAgeErrorExists(true);
      setIsModalShown(true);
      return;
    } else if (userName.trim().length <= 0) {
      setUserNameErrorExists(true);
      setIsModalShown(true);
      return;
    } else if (age < 0 || age === "") {
      setAgeErrorExists(true);
      setIsModalShown(true);
      return;
    }

    const addUserData = {
      userName: userName,
      age: age,
    };

    console.log(addUserData);
    setAgeErrorExists(false);
    setUserNameErrorExists(false);
    setUserName("");
    setAge("");

    props.onSaveUserData(addUserData);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  return (
    <div>
      {!isModalShown ? (
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
          <Button onClickHandler={submitHandler} />
        </form>
      ) : (
        <div>
          {console.log(userNameErrorExists, ageErrorExists)}

          <ErrorModal
            nameError={userNameErrorExists}
            ageError={ageErrorExists}
            onCloseModalHandler={closeModalHandler}
          />
        </div>
      )}
    </div>
  );
};

export default AddUser;
