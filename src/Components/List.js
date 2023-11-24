import React, { useState } from "react";
import Form from "./Form";
import "./List.css";

const List = () => {
  const [userList, setUserList] = useState([]);

  const userAddHandler = (data) => {
    setUserList((old) => [data, ...old]);
  };

  return (
    <div className="list">
      <Form userAdd={userAddHandler} />
      <ul>
        {userList.map((user, index) => {
          return (
            <li className="lists" key={index}>
              {user.name}({user.age}Years old)
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;

