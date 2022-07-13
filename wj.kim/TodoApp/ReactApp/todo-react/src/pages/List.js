import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "../components/ListItem";

function List() {
  const [list, setList] = useState([]);

  const handleGetList = () => {
    axios.get("http://localhost:4000/list").then((result) => {
      setList([...result.data]);
    });
  };

  useEffect(() => {
    handleGetList();
  }, []);

  const onRemove = (id) => {
    const data = list.find((todo) => todo._id === id);

    axios
      .delete(`http://localhost:4000/list/${data._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        if (res.data.message === "nope") {
          return alert("안돼요");
        }
        handleGetList();
      });
  };

  return (
    <ListGroup as="ol" className="m-3" numbered>
      {list.map((todo, idx) => {
        return <ListItem todo={todo} onRemove={onRemove} key={idx} idx={idx} />;
      })}
    </ListGroup>
  );
}

export default List;
