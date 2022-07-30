import { createContext, useState, useEffect } from "react";
import { userData } from "../components/menuData";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);

  const [uncheckedTodo, setUncheckedTodo] = useState([]);
  const [checkedTodo, setCheckedTodo] = useState([]);
  const [myDay, setMyDay] = useState([]);
  const [planned, setPlanned] = useState([]);
  const [label, setLabel] = useState([]);
  const [currentOption, setCurrentOption] = useState("active");

  const [labelTodo, setLabelTodo] = useState([]);
  const date = new Date().toLocaleDateString("en-CA");
  const [username, setUsername] = useState(userData.name);
  const [usermail, setUsermail] = useState(userData.email);

  let todos = [];

  const fetchTodo = async () => {
    const response = await fetch("/todo?_sort=id&_order=desc");
    const data = await response.json();
    setTodo(data);
    setUncheckedTodo(data.map((item) => item.archive === false && { ...item }));
    setCheckedTodo(data.map((item) => item.archive === true && { ...item }));
    setMyDay(
      data.map(
        (item) => item.date === date && item.archive === false && { ...item }
      )
    );
    setPlanned(
      data.map(
        (item) => item.date !== date && item.archive === false && { ...item }
      )
    );

    setIsLoading(false);
  };
  const userStats = () => {
    setUsername(document.querySelector(".inp-user").value);
    setUsermail(document.querySelector(".inp-mail").value);
    document.querySelector(".inp-mail").value = "";
    document.querySelector(".inp-user").value = "";
  };
  const labelCreate = async () => {
    const response = await fetch("/todo?_sort=id&_order=desc");
    const data = await response.json();

    setLabel(
      data.map((item) => label.includes(item.label) === false && item.label)
    );
  };
  useEffect(() => labelCreate, []);

  const labelFilter = async () => {
    // console.log("im in sir!");
    const response = await fetch("/todo?_sort=id&_order=desc");
    const data = await response.json();

    const val = document.querySelector(".label-fil").value;

    const op = document.querySelector(".current-fil").value;

    let bull = true;

    if (op === "active") {
      setLabelTodo(
        data.map((item) =>
          item.label === val && !item.archive ? { ...item } : !bull
        )
      );
    } else {
      setLabelTodo(
        data.map((item) =>
          item.label === val && item.archive ? { ...item } : !bull
        )
      );
    }
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
    setTodo([...todo, data]);
    setUncheckedTodo([...uncheckedTodo, data]);
    if (data.date !== date) {
      console.log("hi");
      setPlanned([...planned, data]);
    } else {
      setMyDay([...myDay, data]);
    }

    setLabel(label.includes(data.label) === false && [...label, data.label]);
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  const checkBox = async (id) => {
    fetchTodo();

    let checked;

    todo.map((item) => {
      item.id === id ? (checked = !item.archive) : (checked = checked);
    });

    const archived = { archive: checked };

    const response = await fetch(`/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(archived),
    });
    const data = response.json();
    setUncheckedTodo(todo.map((item) => item.archive === false && { ...item }));
    if (window.location.href === "http://localhost:3000/filter") {
      labelFilter();
    }
  };

  const deleteTask = async (id) => {
    const response = await fetch(`/todo/${id}`, {
      method: "DELETE",
    });
    if (window.confirm("Are you Sure?!")) {
      setTodo(todo.map((item) => item.id !== id));
    }
    fetchTodo();
    if (window.location.href === "http://localhost:3000/filter") {
      labelFilter();
    }
  };

  return (
    <TodoContext.Provider
      value={{
        addTask,
        todo,
        isLoading,
        checkBox,
        uncheckedTodo,
        checkedTodo,
        myDay,
        planned,
        label,
        labelTodo,
        labelFilter,
        setLabelTodo,
        todos,
        setCurrentOption,
        deleteTask,
        userStats,
        username,
        usermail,
        currentOption,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;
