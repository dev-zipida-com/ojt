import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function ListItem({ todo, onRemove, idx }) {
  return (
    <ListGroup.Item
      className="d-flex justify-content-between align-items-start"
      key={todo._id}
      variant={idx % 2 === 0 ? null : "secondary"}
    >
      <div className="ms-2 me-auto">
        <div className="fs-5 fw-bold">
          {todo.writer} | {todo.title}
        </div>
        <div>{todo.content}</div>
      </div>
      <Button
        className="m-1"
        variant="danger"
        onClick={() => onRemove(todo._id)}
      >
        삭제
      </Button>
    </ListGroup.Item>
  );
}

export default ListItem;
