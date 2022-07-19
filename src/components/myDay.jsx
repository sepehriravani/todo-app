import Menu from "./Menu";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
function myDay() {
  return (
    <div className="myday">
      <Menu />
      <TodoList />
      <AddTask />
    </div>
  );
}

export default myDay;
