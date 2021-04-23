import React, { useState } from "react";

function User({ user, onRemove, onToggle, onModify }) {
  const [modifyInput, setModifyInput] = useState({
    username: user.username,
    email: user.email,
  });

  const { username, email } = modifyInput;

  const onChange = (e) => {
    const { name, value } = e.target;
    setModifyInput({
      ...modifyInput,
      [name]: value,
    });
  };

  return !user.active ? (
    <div>
      <span onClick={() => onToggle(user.id)}>
        <b>{user.username}</b>
        <span>({user.email})</span>
      </span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  ) : (
    <div>
      <input value={username} onChange={onChange} name="username" />
      <input value={email} onChange={onChange} name="email" />
      <button onClick={() => onModify(user.id, modifyInput)}>수정</button>
      <button onClick={() => onToggle(user.id)}>취소</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle, onModify }) {
  return (
    <>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onModify={onModify}
        />
      ))}
    </>
  );
}

export default UserList;
