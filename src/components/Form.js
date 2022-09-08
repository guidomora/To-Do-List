import React, { useState } from "react";
import "../styles/Form.css";
import { v4 as uuidv4 } from "uuid";
import { AiFillPropertySafety } from "react-icons/ai";
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
      completed: false
    };
 
    props.onSubmit(newTask);
  };

  return (
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
  );
}

export default Form;
