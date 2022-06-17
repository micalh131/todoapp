import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

/*Tryed to implement edit but it did not work as expected*/
interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  onEditTodo: EditTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
  onEditTodo,
}) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.text);

  const onDelete = () => {
    onRemoveTodo(todo);
  };

  const onEdit = () => {
    onEditTodo(todo);
    setIsEditOn(true);
  };

  const onTodoUpdate = (e: any) => {
    let text = e.target.value;
    setInputText(text);
    onEditTodo(text);
  };

  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    },
    /* {
      value: "Edit",
      onClick: onEdit,
      color: "blue",
    }, */
  ];
  return (
    <li className={todo.complete ? "todo-row completed" : "todo-row"}>
      {/*   <label
        className={todo.complete ? "todo-row completed" : "todo-row"}
      ></label> */}
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        className="todo-li-input"
      ></input>
      {isEditOn ? (
        <input
          className="edit-input"
          type="text"
          value={inputText}
          onChange={(e) => onTodoUpdate(e)}
        ></input>
      ) : (
        todo.text
      )}
      <Dropdown options={dropdownOptions}></Dropdown>
    </li>
  );
};
