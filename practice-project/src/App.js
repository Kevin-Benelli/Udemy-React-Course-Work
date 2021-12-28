import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/User/UserList";

const DUMMY_USER_DATA = [
  { userName: "foo", age: 20 },
  { userName: "bar", age: 40 },
  { userName: "baz", age: 50 },
  { userName: "kevin", age: 26 },
  { userName: "jimmy", age: 30 },
];
function App() {
  const [users, setUsers] = useState(DUMMY_USER_DATA);

  const saveUserData = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  return (
    <div>
      <AddUser onSaveUserData={saveUserData} usersData={users} />
      <UserList users={users} />
      {console.log(users)}
    </div>
  );
}

export default App;
