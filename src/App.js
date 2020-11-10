import React, { useState, useEffect } from "react";
import TodoList from "./list/TodoList";
import Search from "./search/search";
import { Context } from "./context";
import "./App.css";

function App() {
  const [state, setState] = useState([]);

  const [value, setValue] = useState("");

  const [term, setTerm] = useState("");

  useEffect(() => {
    const bem = localStorage.getItem("state") || [];
    setState(JSON.parse(bem));
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const addTodo = (event) => {
    if (event.key === "Enter") {
      setState([
        ...state,
        {
          id: new Date(),
          title: value,
          like: false,
        },
      ]);
      setValue("");
    }
  };

  const onDelete = (id) => {
    setState(
      state.filter((end) => {
        return end.id !== id;
      })
    );
  };

  const onLike = (id) => {
    setState(
      state.map((items) => {
        if (items.id === id) {
          items.like = !items.like;
        }
        return items;
      })
    );
  };

  const onSearchPost = (term) => {
    setTerm(term);
  };

  const getFilteredData = (term, state) => {
    if (!term) {
      return state;
    }
    return state.filter((item) => {
      return item.title.includes(term);
    });
  };

  const searPost = getFilteredData(term, state);

  return (
    <Context.Provider value={{ onDelete, onLike }}>
      <div className="App">
        <h1>TODO LIST</h1>
        <div className="search">
          <Search onSearchPost={onSearchPost} />
        </div>
        <div className="">
          <input
            className="input"
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyPress={addTodo}
          />
        </div>
        <div className="list">
          {searPost.map((item) => (
            <TodoList title={item.title} like={item.like} id={item.id} />
          ))}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
