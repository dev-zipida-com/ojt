import { React } from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setUsername }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    setUser({
      ...user,
      [name]: e.target.value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:4000/login", user, {
        withCredentials: true,
      })
      .then((res) => {
        setUsername(res.data.id);
        localStorage.setItem("username", res.data.id);
      });
    navigate("/list");
  };

  return (
    <>
      <Form className="m-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" name="id" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" name="pw" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={login}>
          로그인
        </Button>
      </Form>
    </>
  );
}

export default Login;
