import React from "react";
import axios from 'axios';
import SearchTask from "../components/searchTask";
import TodoTask from "../components/todoTask";
import AddTaskForm from "../components/addTask";
import "./TaskPage.scss";
import Nav from "../components/Nav";

// import Nav from "../components/Nav"; // error: module not found: Can't resolve './components/Nav'???

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {
          id: 1,
          task: 'Math Homework',
          type: 'School'
        },
        {
          id: 2,
          task: 'Work Out',
          type: 'Personal'
        }, {
          id: 3,
          task: 'Wash Dishes',
          type: 'Chore'
        }
      ],
      searchTaskValue: '',
      completedTask: []
    }
  }


  handleLogout = (e) => {
    //removes token from localStorage, effectively logging user out, then redirects back go login page
    e.preventDefault();
    localStorage.removeItem("loginToken");
    this.props.history.push("/");
  }

  componentDidMount() {
    const token = localStorage.getItem("loginToken"); //retrieve token from localStorage
    if (!token) { //if token doesnt exist, redirect back to home
      this.props.history.push("/");
    } else { //otherwise try and hit user validation route
      axios
        .get(
          "/api/validateuser",
          {
            headers: {
              "Authorization": "Bearer " + token
            }
          })
        .then((response) => {
          console.log(response.data); //on success, do nothing
        })
        .catch((error) => {
          console.error(error); //otherwise redirect back to home page.
          this.props.history.push("/");
        })
    }

    this.loadTasks();
  }


  loadTasks = () => {
    axios.get("/api/task/findAll")
      .then((response) => {
        console.log(response.data)
        // this.setState({ tasks: response.data })
      })
      .catch(err => console.log(err));
  };

  deleteTask = (id) => {
    const { tasks, completedTask } = this.state;
    const filterTasks = tasks.filter(task => task.id !== id)
    const clearCompleted = completedTask.length > 0 && completedTask.filter(task => task.id !== id)

    this.setState({
      tasks: filterTasks,
      completedTask: clearCompleted
    })
  }

  addTask = (task, id, type) => {
    const { tasks } = this.state

    tasks.unshift({ task, id, type })

    this.setState({
      tasks: tasks
    })
  }

  saveEditTask = (task, id) => {
    const { tasks } = this.state
    // eslint-disable-next-line
    tasks.map(todo => { // error: expected to return a value in arrow function???
      if (todo.id === id) {
        todo.task = task
      }
    })
    this.setState({ tasks })
  }

  searchTask = (taskName) => {
    this.setState({ searchTaskValue: taskName })
  }

  completeTask = (id) => {
    const { completedTask, tasks } = this.state
    const completed = tasks.filter(task => task.id === id)

    completedTask.push(...completed)
    this.setState({
      completedTask
    })

    // edit completed tasks
    axios
      .post("/api/task/updateTask", {
        // id: response.data[0]._id,
      })
      .then((response) => {
        console.log(response.data)
      })
  }

    
    render() {
      const {tasks, searchTaskValue, completedTask} = this.state
      
      const calculateCompletedTask = (completedTask.length / tasks.length)* 100 ;
      const percentage = calculateCompletedTask.toFixed(0)
      // console.log(`${percentage}%`)
      
      // get todays date
      const d = new Date()
      const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      const day = weekDay[d.getDay()]
      const month = months[d.getMonth()]
      const date = d.getDate()
      const year = d.getFullYear()

      const searchFilter = tasks
            .filter(todo => 
            todo.task.toLowerCase().includes(searchTaskValue.toLowerCase()) 
            || 
            todo.type.toLowerCase().includes(searchTaskValue.toLowerCase()))
      return (
        <div id="app">
          <Nav/>
          <header>
            <div className="date">
              <TodaysDate day={day} month={month} date={date} year={year} />
            </div>
            <div className="type-of-tasks">
              <PersonalTask tasks={tasks} />
              <SchoolTask tasks={tasks} />
              <ChoreTask tasks={tasks}/>
            </div>
            <div className="task-completion">
              <span>{percentage === 'NaN' ? 0 : percentage }% done</span>
            </div>
          </header>
          
          {tasks.length > 1 && <SearchTask searchTask={this.searchTask} />}
          
          <ul>
            {
              searchFilter.map(todo => 

              <TodoTask key={todo.id}
                {...todo}
                deleteTask={this.deleteTask}
                saveEditTask={this.saveEditTask}
                completeTask={this.completeTask}
              />)
          }
        </ul>

        <AddTaskForm addTask={this.addTask} />

      </div>
    )
  }
}
const TypeCount = (list, type) => (
  <p>
    {list.filter(l => l.type === type).length} <span>{type}</span>
  </p>
);

const PersonalTask = ({ tasks }) => TypeCount(tasks, "Personal");
const SchoolTask = ({ tasks }) => TypeCount(tasks, "School");
const ChoreTask = ({ tasks }) => TypeCount(tasks, "Chore")
const TodaysDate = ({ day, month, date, year }) => (
  <p>
    {day}{" "}
    <span>
      {month} {date}, {year}
    </span>
  </p>
);

export default Task;