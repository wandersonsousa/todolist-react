import React from "react";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.props.handleChange(this.props.id);
  }
  render() {
    let labelStyleClasses = `form-check-label ${
      this.props.done && "text-success"
    }`;

    return (
      <li className="list-group-item mb-3 p-2 d-flex justify-content-between">
        <div>
          <input
            onChange={this.handleChange}
            type="checkbox"
            checked={this.props.done}
            className="form-check-input me-2"
          />
          <label className={labelStyleClasses}>{this.props.task}</label>
        </div>
        <div>
          <button
            data-id={this.props.id}
            onClick={this.props.removeTask}
            className="btn btn-primary btn-sm btn-close"
          ></button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
