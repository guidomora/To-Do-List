import "./App.css";
import TaskList from "./components/TaskList";


function App() {
  return (
    <div>
      <div>
        {/* una imagen aca */}
      </div>
      <div className="tareas-lista-principal">
        <h1 className="titulo"> Mis tareas </h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
