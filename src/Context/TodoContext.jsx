import { createContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);
  const [todoEdit, setTodoEdit] = useState({ item: {}, edit: false });
  const [uncheckedTodo, setUncheckedTodo] = useState([]);
  const [checkedTodo, setCheckedTodo] = useState([]);

  const fetchTodo = async () => {
    const response = await fetch("/todo?_sort=id&_order=desc");
    const data = await response.json();
    setTodo(data);
    setUncheckedTodo(data.map((item) => item.archive === false && { ...item }));
    setCheckedTodo(data.map((item) => item.archive === true && { ...item }));
    setIsLoading(false);
  };
  const addTask = async (newTodo) => {
    const response = await fetch("/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    setUncheckedTodo([...uncheckedTodo, data]);
    setTodo([...todo, data]);
  };
  useEffect(() => {
    fetchTodo();
  }, []);
  // useEffect(() => {
  //   uncheckedChecker();
  // }, []);
  // const uncheckedChecker = async () => {
  //   // fetchTodo();

  //   console.log(uncheckedTodo);
  // };
  const checkBox = async (id) => {
    fetchTodo();
    let checked;
    todo.map((item) => {
      item.id === id ? (checked = !item.archive) : (checked = checked);

      // console.log(item);
    });

    const archived = { archive: checked };
    // console.log(archived);
    const response = await fetch(`/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(archived),
    });
    const data = response.json();
    setUncheckedTodo(todo.map((item) => item.archive === false && { ...item }));
    // console.log(uncheckedTodo);
  };

  const deleteTask = async (id) => {
    const response = await fetch(`/todo/${id}`, {
      method: "DELETE",
    });
    if (window.confirm("Are you Sure?!")) {
      setTodo(todo.map((item) => item.id !== id));
    }
  };
  const editTask = async (id, item) => {
    const response = await fetch(`/todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = response.json();
    setTodo(todo.map((item) => (id === item.id ? { ...item, ...data } : item)));
  };

  return (
    <TodoContext.Provider
      value={{ addTask, todo, isLoading, checkBox, uncheckedTodo, checkedTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;
