import React from "react";
import styles from "./UserList.module.css";
import User from "./User";

const UserList = (props) => {
  return (
    <div>
      <ul className={styles.users}>
        {console.log("in userList")}
        {props.users.map((user) => {
          return <User key={Math.random().toString()} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
