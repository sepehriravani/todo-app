import React from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../Context/TodoContext";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

function TodoList() {
  const { todo, isLoading, myDay } = useContext(TodoContext);

  if (!isLoading && (todo.length === 0 || !todo)) {
    return <h2 style={{ margin: "2rem" }}>No todo yet!</h2>;
  }

  return (
    !isLoading && (
      <div className="todo-list">
        <AnimatePresence>
          {myDay.map(
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
