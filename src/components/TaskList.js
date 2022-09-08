import React, { useState } from "react";
import Form from "./Form";
import "../styles/TaskList.css"
import Tasks from "./Tasks"

function TaskList() {
  const [tasks, setTasks] = useState([])
  const addTask = task => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  const completeTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return( 
 <div>
    <Form onSubmit={addTask}/>
    <div className="tasks-list-container">
      {
        tasks.map((task) => 
            <Tasks
            key={task.id}
            id={task.id}   
            text={task.text}
            completed={task.completed}
            deleteTask = {deleteTask}
            completeTask ={completeTask}
          />
        )
      }
    </div>
  </div>  

  );
}

export default TaskList;
