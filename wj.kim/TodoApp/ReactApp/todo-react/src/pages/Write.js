import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Write({ username }) {
  const [input, setInput] = useState({
    writer: username ? username : localStorage.getItem("username"),
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log(input);

    axios
      .post("http://localhost:4000/add", input, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      });
    navigate("/list");
  };

  return (
    <Form className="m-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>오늘의 할일</Form.Label>
        <Form.Control
          type="text"
          placeholder="오늘의 할일"
          name="title"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>세부내용</Form.Label>
        <Form.Control
          type="text"
          placeholder="세부내용"
          name="content"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default Write;
