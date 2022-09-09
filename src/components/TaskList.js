import React, { useState } from "react";
import Form from "./Form";
import "../styles/TaskList.css";
import Tasks from "./Tasks";
import Owl from "./Owl";
import { AiFillHourglass } from "react-icons/ai";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  let completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
      
    });
    setTasks(updatedTasks);
  };

  const checkStatus = tasks.every(task => task.completed === true)
  console.log(checkStatus)

  const principio = () => {
    if (tasks.length == 0)
    tasks.completed = false
  };
 

  const clearAll = () => {
    tasks.completed = false
    setTasks([]);
  };
  console.log(tasks.completed)

  return (
    <div className="container">
      <div>
        <Form onSubmit={addTask}  />
        <div className="tasks-list-container">
          {tasks.map((task) => (
            <Tasks
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))}
          {tasks.length ? (
            <button className="clear-button" onClick={clearAll}>
              Borrar Todas las tareas
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        {checkStatus === true ? (alert("completaste tus tareas!"))   : (<></>)}
      </div>
      <div className="position-owl">
        <Owl imagen="buhito" />
      </div>
    </div>
  );
}

export default TaskList;


// checkStatus == true ? (alert("hola")) : (<></>)