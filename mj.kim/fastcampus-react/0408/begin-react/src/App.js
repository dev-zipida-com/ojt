import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',  
  })
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs, 
      [name]: value,
    })
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'velopert@velopert.com',
      active: false,
    },
    {
      id: 2,
      username: 'balam292',
      email: 'balam292@velopert.com',
      active: false,
    },
    {
      id: 3,
      username: 'zipida',
      email: 'zipida@zipida.com',
      active: false,
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      // ...inputs, 
      username,
      email,
    };

    setUsers([...users, user]);

    setInputs({
      username: '',
      email: '',
    });
    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }

  const onColorChange = (id) => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active}
        : user
    ));
  }

  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        onRemove={onRemove}
      />
      <UserList users={users} onRemove={onRemove} onColorChange={onColorChange}/>
    </>
  );
}

export default App;
