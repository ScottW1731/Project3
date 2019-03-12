import React from 'react';
import axios from 'axios';
// import Date from "../pages/TaskPage";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  handleSelectChange = e => {
    this.setState({ selected: e.target.value });
  };

  addTask = e => {
    const { addTask } = this.props;

    e.preventDefault();

    if (this.taskInput.value || this.state.selected) {

      // post tasks to database
      axios
        .post("/api/task/newTask", {
          taskName: this.taskInput.value,
          category: this.state.selected
        })
        .then((response) => {
          console.log(response.data)
        })

      const date = new Date();
      const id = date.getTime();
      const type = this.state.selected;
      addTask(this.taskInput.value, id, type);
      this.taskInput.value = "";
      this.setState({ selected: "" });

      
    }
  };

  render() {
    const { selected } = this.state;
    return (
      <form id="add-task-form" onSubmit={this.addTask}>
        <input
          id="task"
          type="text"
          placeholder="Add a task"
          ref={taskInput => (this.taskInput = taskInput)}
        />

        <select
          value={selected}
          onChange={this.handleSelectChange}
        // ref={select => this.selectOption = select}
        >
          <option value="">Type</option>
          <option value="Personal">Personal</option>
          <option value="School">School</option>
          <option value="Chore">Chore</option>
        </select>
        <button>Add</button>
      </form>
    );
  }
}

export default AddTaskForm;