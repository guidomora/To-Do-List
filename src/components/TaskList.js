import React, { useState } from "react";
import Form from "./Form";
import "../styles/TaskList.css";
import Tasks from "./Tasks";
import Owl from "./Owl";
import Swal from "sweetalert2";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Funcion para que no salte el cartel cuando la lista de tareas esta vacia
// const checkTasks = () => {
//   if (tasks.length === 0) {
//     setTasks(tasks.completed = false)
//     console.log(tasks.completed)
//   }
// }
// checkTasks()

  // Agregar tarea

  const addTask = (task) => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  // Borrar tarea

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // completar tarea

  let completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id ) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const checkStatus = tasks.every((task) => task.completed === true);

  console.log(checkStatus);

  // alerta que sale cuando completaste todas las tareas y con la opcion de vacia la lista

  const tasksFinished = () => {
    Swal.fire({
      title: "Terminaste todas tus tareas!",
      text: "Al confirmar se van a borrar todas!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrarlas!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearAll();
      }
    });
  };

  // Boton para vaciar lista
  const clearAll = () => {
    setTasks([]);
  };


  return (
    <div className="container">
      <div>
        <Form onSubmit={addTask} />
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
      <div>{checkStatus === true ? tasksFinished() : <></>}</div>
      <div className="position-owl">
        <Owl imagen="buhito" />
      </div>
    </div>
  );
}

export default TaskList;

