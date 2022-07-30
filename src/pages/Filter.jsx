import Menu from "../components/Menu";

import { useContext } from "react";
import TodoContext from "../Context/TodoContext";
import TodoItem from "../components/TodoItem";
import { motion, AnimatePresence } from "framer-motion";

function Filter() {
  const { isLoading, label, labelTodo, labelFilter } = useContext(TodoContext);
  let unique = [...new Set(label)];

  if (!isLoading && labelTodo.length === 0) {
    return (
      <div className="filter">
        <Menu />
        <h2>No Option has been selected! </h2>

        <div className="select">
          <select
            name="todos"
            className="filter-list label-fil"
            onChange={() => labelFilter()}
          >
            <option value="none" disabled hidden>
              Select an Option
            </option>
            {unique.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            name="todos"
            className="filter-list current-fil"
            onChange={() => labelFilter()}
          >
            <option value="active">Unfinished</option>
            <option value="non-active">Finished</option>
          </select>
        </div>
      </div>
    );
  }

  return (
    !isLoading && (
      <div className="filter">
        <Menu />

        <div className="select">
          <select
            name="todos"
            className="filter-list label-fil"
            onChange={() => labelFilter()}
          >
            <option value="none" disabled hidden>
              Select an Option
            </option>
            {unique.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            name="todos"
            className="filter-list current-fil"
            onChange={() => labelFilter()}
          >
            <option value="active">Unfinished</option>
            <option value="non-active">Finished</option>
          </select>
        </div>
        <div className="todo-list">
          <AnimatePresence>
            {labelTodo.map(
              (item, index) =>
                typeof item === "object" && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <TodoItem key={index} item={item} />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    )
  );
}

export default Filter;
