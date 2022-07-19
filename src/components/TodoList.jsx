import React from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../Context/TodoContext";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

function TodoList() {
  const { todo, isLoading, uncheckedTodo } = useContext(TodoContext);
  // const { uncheckedTodo, setUncheckedTodo } = useState(false);
  // const check = document.querySelector(`.inp-4`).checked;
  // if (!isLoading) {
  //   setUncheckedTodo(document.querySelector(`.inp-4`).checked);
  // }

  // const fetchComplete = async () => {
  //   const response = await fetch("/todo?_sort=id&_order=desc");
  //   setUncheckedTodo(document.querySelector(`.inp-4`).checked);
  // };

  // fetchComplete();

  // setUncheckedTodo(document.querySelector(`.inp-4`).checked);
  // console.log(uncheckedTodo);

  if (!isLoading && (todo.length === 0 || !todo)) {
    return <p>No todo yet!</p>;
  }

  return (
    !isLoading && (
      <div className="todo-list">
        <AnimatePresence>
          {uncheckedTodo.map(
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
    )
  );
}

export default TodoList;
