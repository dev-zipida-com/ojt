import React, { useState, useRef, useMemo } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function CountActiveUsers(users) {
  console.log("활성 사용자 수 세는중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "mj.kim",
      email: "mj.kim@zipida.com",
      active: false,
    },
    {
      id: 2,
      username: "pidazi",
      email: "dev@zipida.com",
      active: false,
    },
    {
      id: 3,
      username: "MJun Kim",
      email: "balam292@naver.com",
      active: false,
    },
  ]);

  const { username, email } = inputs;

  const count = useMemo(() => CountActiveUsers(users), [users]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);

  const onCreate = () => {
    setUsers(
      users.concat({
        id: nextId.current,
        username: username,
        email: email,
      })
    );
    console.log(nextId.current);
    nextId.current += 1;
    setInputs({
      username: "",
      email: "",
    });
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onReset = () => {
    setInputs({
      username: "",
      email: "",
    });
  };

  const onToggle = (id) => {
    console.log("onToggle 클릭됨 !!!!! id ===== " + id);
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const onModify = (id, modifyUser) => {
    console.log(
      `onModify 실행 !!!    id=======${id},,,,,,,,modifyUser======${modifyUser.username}`
    );
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              username: modifyUser.username,
              email: modifyUser.email,
              active: !user.active,
            }
          : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        onReset={onReset}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
        onModify={onModify}
      />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
