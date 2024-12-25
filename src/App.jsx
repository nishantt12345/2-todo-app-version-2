import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <TodoItems todoItems={TodoItems}></TodoItems>
    </center>
  );
}

export default App;
