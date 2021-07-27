import React from "react";
import TodoListComponent from "../components/TodoListComponent";

class TodoListContainer extends React.Component {
  render() {
    return (
      <TodoListComponent
        handleTaskChange={this.props.handleTaskChange}
        removeTask={this.props.removeTask}
        todosData={this.props.todosData}
      />
    );
  }
}

export default TodoListContainer;
