import Menu from "../components/Menu";
import AddTask from "../components/AddTask";
import { useContext } from "react";
import TodoContext from "../Context/TodoContext";
import { motion, AnimatePresence } from "framer-motion";
import TodoItem from "../components/TodoItem";
function Planned() {
  const { todo, isLoading, planned } = useContext(TodoContext);

  if (!isLoading && (todo.length === 0 || !todo)) {
    return (
      <>
        <div className="archive">
          <Menu />
          <AddTask />
          <h2 style={{ margin: "2rem" }}>No todo yet!</h2>
        </div>
      </>
    );
  }

  return (
    !isLoading && (
      <div className="archive">
        <Menu />
        <AddTask />
        <div className="todo-list">
          <AnimatePresence>
            {planned.map(
              (item) =>
                typeof item === "object" && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <TodoItem key={item.id} item={item} />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    )
  );
}

export default Planned;
