import React from "react";
import styles from "./UserList.module.css";
import User from "./User";

import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return <User key={Math.random().toString()} user={user} />;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
