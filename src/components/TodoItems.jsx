import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <div className="item.container">
      {todoItems.map((item) => (
        <TodoItem todoDate={item.duedate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
