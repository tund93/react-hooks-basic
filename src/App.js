import React, { useState, useEffect } from "react";
import "./App.scss";
// import PostList from "./components/PostList";
// import Pagination from "./components/Pagination";
// import PostFilterForm from "./components/PostFilterForm";
// import QueryString from "query-string";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";
// import Todolist from "./components/TodoList";
// import FormTodoList from "./components/FormTodoList";
// import ColorBox from "./components/colorbox";

function App() {

  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: '1 lorem ememem' }, { id: 2, title: '2asdasdasfw' }, { id: 3, title: '3ifhioasuowi' }
  // ]);

  // const handleTodoClick = (todo) => {
  //   console.log(todo);
  //   const index = todoList.findIndex(x => x.id === todo.id);
  //   if (index < 0) return;
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // const handleNewTodo = (formValues) => {
  //   console.log(formValues);
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   }
  //   const newTodoList = [...todoList]
  //   newTodoList.push(newTodo)
  //   setTodoList(newTodoList)
  // }

  // const [postList, setPostList] = useState();
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 1
  // })
  // const [filters, setFilters] = useState({
  //   _page: 1,
  //   _limit: 10,
  // })

  // const handlePageChange = (newpage) => {
  //   console.log("newpage:", newpage);
  //   setFilters({
  //     ...filters,
  //     _page: newpage,
  //   })
  // }

  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       const paramsString = QueryString.stringify(filters)
  //       const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestUrl);
  //       const responseJson = await response.json();
  //       console.log({ responseJson });

  //       const { data, pagination } = responseJson;
  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log("failed", error.message);
  //     }
  //   }
  //   fetchPostList()
  // }, [filters])

  // const handleFilterChange = (newValue) => {
  //   console.log("searchTerm:", newValue);
  //   setFilters({
  //     ...filters,
  //     _page: 1,
  //     title_like: newValue.searchTerm,
  //   })

  // }
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      <h1>React-hooks Clock</h1>
      {/* <ColorBox /> */}
      {/* <FormTodoList onSubmit={handleNewTodo} /> */}
      {/* <Todolist todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onChangePages={handlePageChange} /> */}
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
      <MagicBox />
    </div>
  );
}

export default App;
