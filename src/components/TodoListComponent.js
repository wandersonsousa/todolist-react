import React from "react";
import TodoItem from "../containers/TodoItemContainer";

function TodoListComponent(props) {
  return (
    <div className="list-group">
      {props.todosData.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          task={item.task}
          done={item.done}
          handleChange={props.handleTaskChange}
          removeTask={props.removeTask}
        />
      ))}
    </div>
  );
}

export default TodoListComponent;
