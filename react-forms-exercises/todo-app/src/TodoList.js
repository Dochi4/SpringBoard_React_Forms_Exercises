import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodo from "./NewTodo";
import EditTodo from "./EditTodo";

const TodoList = () => {
  const initialState = [
    { id: uuid(), item: "todo item 1" },
    { id: uuid(), item: "todo item 2" },
  ];

  const [todos, setTodos] = useState(initialState);

  const addTodo = (newTodoData) => {
    setTodos((todos) => [...todos, { ...newTodoData, id: uuid() }]);
  };
  const handleRemoveItem = (idToRemove) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== idToRemove));
  };

  const toggleTodoCompleted = (idToToggle) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  function editTodo(id, newText) {
    const edited = todos.map((todo) =>
      todo.id === id ? { ...todo, item: newText } : todo
    );
    setTodos(edited);
  }

  return (
    <div>
      <div>
        <NewTodo addTodo={addTodo} />
      </div>
      <ul className="container">
        {todos.map((todo) => (
          <EditTodo
            key={todo.id}
            id={todo.id}
            item={todo.item}
            completed={todo.completed}
            toggleTaskCompleted={toggleTodoCompleted}
            editTodo={editTodo}
            removeTodo={handleRemoveItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
