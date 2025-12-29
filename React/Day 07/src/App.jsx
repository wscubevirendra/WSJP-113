import React, { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import Tab from "./components/Tab";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  function tudoAdd(data) {
    setTodoList([...todoList, data]);
  }

  function removeItem(index) {

    const newList = todoList.filter((item, i) => i !== index);
    setTodoList(newList);
  }

  return (
    <Tab />
  );
}



