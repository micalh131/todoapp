import React, { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text != todoToRemove.text
    );
    setTodos(updatedTodos);
  };

  const editTodo: EditTodo = (todoToEdit) => {
    let todoToUpdateIndex: number = todos.findIndex(
      (todo) => todo.text == todoToEdit.text
    );
    console.log(todoToUpdateIndex);
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        onRemoveTodo={removeTodo}
        onEditTodo={editTodo}
      ></TodoList>
    </div>
  );
}

export default App;
