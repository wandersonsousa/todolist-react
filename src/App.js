import React from "react";
import TodoListContainer from "./containers/TodoListContainer";
import todosData from "./todo.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
      todosData: todosData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  }
  handleTaskChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todosData.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });

      return {
        todosData: updatedTodos
      };
    });
  }
  generateUniqueId(taskList) {
    let currentId = taskList.length + 1;
    while (taskList.filter((task) => task.id === currentId).length) {
      currentId += 1;
    }
    console.log("new id:", currentId);
    return currentId;
  }
  addTask(evt) {
    evt.preventDefault();
    if (this.state.taskName) {
      console.log("adicionando task:", this.state.taskName);
      const newTask = {
        id: this.generateUniqueId(this.state.todosData),
        task: this.state.taskName,
        done: false
      };

      this.setState((prevState) => {
        return {
          todosData: [...prevState.todosData, newTask]
        };
      });
    }
  }

  removeTask(evt) {
    evt.preventDefault();
    const todoId = parseInt(evt.target.dataset.id, 10);
    this.setState({
      todosData: this.state.todosData.filter((todo) => todo.id !== todoId)
    });
  }
  render() {
    return (
      <div className="container mx-auto my-5">
        <div className="row text-center my-2">
          <h1>TODOLIST</h1>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <TodoListContainer
              handleTaskChange={this.handleTaskChange}
              removeTask={this.removeTask}
              todosData={this.state.todosData}
            />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6 mx-auto">
            <form>
              <h4>Adicionar Tarefa</h4>
              <div className="mb-3">
                <input
                  onChange={this.handleChange}
                  id="taskName"
                  name="taskName"
                  value={this.state.taskName}
                />
              </div>
              <div className="mb-3">
                <button onClick={this.addTask} className="btn btn-secondary">
                  add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
