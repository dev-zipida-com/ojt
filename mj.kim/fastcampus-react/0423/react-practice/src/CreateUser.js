import React from "react";

function CreateUser({ username, email, onChange, onCreate, onReset }) {
  return (
    <>
      <input
        placeholder="계정명"
        name="username"
        onChange={onChange}
        value={username}
      />
      <input
        placeholder="이메일"
        name="email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
      <button onClick={onReset}>초기화</button>
    </>
  );
}

export default CreateUser;
