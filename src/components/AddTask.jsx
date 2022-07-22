import { BiPlus } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import TodoContext from "../Context/TodoContext";
import { useContext } from "react";

function AddTask() {
  const { addTask } = useContext(TodoContext);
  const [isOpen, setIsOpen] = useState(false);
  const [todo, setTodo] = useState({});

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="add-task">
        <BiPlus />
        <p>Add Task</p>
      </div>
      {isOpen && (
        <Fade big>
          <div className="task-input">
            <div className="task-name">
              <input
                className="input_task"
                type="text"
                placeholder="task"
                required
              />
            </div>
            <div className="label-name">
              <input
                className="input_label"
                type="text"
                placeholder="label"
                required
              />
            </div>
            <div className="task-date">
              <input
                type="date"
                className="input_date"
                defaultValue={new Date().toLocaleDateString("en-CA")}
              />
            </div>
            <div className="button-group">
              <button
                onClick={() => {
                  const task = document.querySelector(".input_task").value;
                  const label = document.querySelector(".input_label").value;
                  const date = document.querySelector(".input_date").value;
                  const archive = false;

                  addTask({ task, label, date, archive });
                  setIsOpen(!isOpen);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
}

export default AddTask;
