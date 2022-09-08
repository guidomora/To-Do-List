import React from "react";
import "../styles/TaskList.css"

function Owl (prop) {
    return (
        <div>
            <img src={require(`../multimedia/${prop.imagen}.png`)} className="buhito" />
        </div>
    )
};

export default Owl;