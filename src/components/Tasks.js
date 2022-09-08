import React from "react";
import "../styles/Tasks.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Tasks ({id, text, completed, completeTask, deleteTask}) {
    return (
        <div className={completed ? "tasks-container completed" : "tasks-container"}>
            <div className="tasks-text"
            onClick={()=> completeTask(id)}>
                {text}
            </div>
            <div className="tasks-icon"
            onClick={() => deleteTask(id)}>
                <AiFillCloseCircle className="tasks-icon"/>
            </div>
        </div>
    )
};

export default Tasks;