import React, { useState } from "react";
import "./App.scss";
import Todolist from "./components/TodoList";
import FormTodoList from "./components/FormTodoList";
// import ColorBox from "./components/colorbox";

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: '1 lorem ememem' }, { id: 2, title: '2asdasdasfw' }, { id: 3, title: '3ifhioasuowi' }
  ]);

  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  const handleNewTodo = (formValues) => {
    console.log(formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }

  return (
    <div className="app">
      {/* <ColorBox /> */}
      <FormTodoList onSubmit={handleNewTodo} />
      <Todolist todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
