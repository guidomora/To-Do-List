import React, { useState } from "react";
import "../styles/Form.css";
import { v4 as uuidv4 } from "uuid";
function Form(props) {
  const [input, setInput] = useState("");

  const manageState = (e) => {
    setInput(e.target.value);
  };

  const sendControl = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    props.onSubmit(newTask);
  };

  return (
    <div>
      <form className="task-form" onSubmit={sendControl}>
        <input
          className="task-input"
          type="text"
          placeholder="ingrese una tarea"
          name="texto"
          onChange={manageState}
        />
        <button className="task-button">Agregar tarea</button>
      </form>
    </div>
  );
}

export default Form;
