import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      content: "Build a todo app in React",
      isCompleted: true,
    },
    {
      content: "Build a newsletter component",
      isCompleted: true,
    },
    {
      content: "Build a modal",
      isCompleted: true,
    },
    {
      content: "Add a footer component",
      isCompleted: false,
    },
    {
      content: "Turn in assignment",
      isCompleted: false,
    },
  ]);

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];

    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false,
    });

    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos((todos) =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    );
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div>
      <form className="todo-list">
        <ul className="todo-ul">
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && "todo-is-completed"}`}>
              <div
                className={"checkbox"}
                onClick={() => toggleTodoCompleteAtIndex(i)}
              >
                {todo.isCompleted && <span>&#x2714;</span>}
              </div>
              <input
                className="todo-input"
                type="text"
                value={todo.content}
                onChange={(e) => updateTodoAtIndex(e, i)}
              />
              <button
                type="button"
                onClick={() => removeTodoAtIndex(i)}
                className="removeTodoBtn"
              >
                <span>&#10006;</span>
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={(e) => createTodoAtIndex(e, todos.length - 1)}
            className="addTodoBtn"
          >
            <span>+</span>
          </button>
        </ul>
      </form>
    </div>
  );
};

export default TodoList;
