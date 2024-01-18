import React, { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Create from "./Create";
import axios from "axios";
import "./App.css";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      <br />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task" key={todo.id}>
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <FaRegCircleCheck className="icon"></FaRegCircleCheck>
              ) : (
                <FaRegCircle className="icon" />
              )}

              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <RiDeleteBin6Line
                  className="icon"
                  onClick={() => handleDelete(todo._id)}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
