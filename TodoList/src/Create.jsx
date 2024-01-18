// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input
        type="text"
        className="create_form_input"
        name=""
        value={task}
        id=""
        placeholder="Add task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" className="create_form_botton " onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
