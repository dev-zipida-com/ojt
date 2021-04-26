import React, { useReducer, useRef, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "REMOVE_USER":
      console.log("REMOVE_USER ----- action.id ==== " + action.id);
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id
            ? {
                ...user,
                active: !user.active,
              }
            : user
        ),
      };
    case "MODIFY_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.modify_user.id
            ? {
                ...user,
                username: action.modify_user.username,
                email: action.modify_user.email,
                active: !user.active,
              }
            : user
        ),
      };

    default:
      throw new Error("Unhandled action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    console.log("onRemove잘 들어옴 id==========" + id);
    dispatch({
      type: "REMOVE_USER",
      id: id,
    });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id: id,
    });
  }, []);

  const onModify = useCallback((id, modifyInput) => {
    console.log("onModify!!");
    console.log("id ======= " + id);
    console.log("modifyInput ========= " + modifyInput.email);
    dispatch({
      type: "MODIFY_USER",
      modify_user: {
        id: id,
        username: modifyInput.username,
        email: modifyInput.email,
      },
    });
  }, []);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
        onModify={onModify}
      />
      <div>활성 사용자 수 : 0</div>
    </>
  );
}

export default App;
