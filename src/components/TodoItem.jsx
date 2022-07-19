import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import AddTask from "./AddTask";
import TodoContext from "../Context/TodoContext";
import { useContext } from "react";
function TodoItem({ item }) {
  const { deleteTask, editTask, checkBox } = useContext(TodoContext);

  return (
    <Card>
      <div className="stat">
        <div className="checkbox">
          <label class="container">
            <input
              type="checkbox"
              className={`check inp-${item.id}`}
              onClick={() => checkBox(item.id)}
              checked={item.archive && "checked"}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="text-display">{item.task}</div>
      </div>
      <div className="customize">
        <button className="edit">
          <FaEdit
            onClick={() => {
              <AddTask />;
              editTask(item);
            }}
            color="purple"
          />
        </button>
      </div>
    </Card>
  );
  // return <p>asdasda</p>;
}

export default TodoItem;
