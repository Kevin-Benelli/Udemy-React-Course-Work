import React from "react";
import styles from "./User.module.css";

const User = ({ user }) => {
  return (
    <div>
      {console.log("in userList", user.userName, user.age)}
      <h1 className={styles.user}>
        {user.userName} ({user.age} years old)
      </h1>
    </div>
  );
};

export default User;
