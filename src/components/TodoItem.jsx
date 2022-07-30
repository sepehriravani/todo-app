import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

import TodoContext from "../Context/TodoContext";
import { useContext } from "react";
function TodoItem({ item }) {
  const { deleteTask, checkBox } = useContext(TodoContext);

  return (
    <Card>
      <div className="stat">
        <div className="checkbox">
          <label className="container">
            <input
              type="checkbox"
              className={`check inp-${item.id}`}
              onClick={() => checkBox(item.id)}
              defaultChecked={item.archive && "checked"}
              // checked={item.archive && "checked"}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="text-display">{item.task}</div>
      </div>
      <div className="customize">
        <button className="edit">
          <FaTimes
            onClick={() => {
              deleteTask(item.id);
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
