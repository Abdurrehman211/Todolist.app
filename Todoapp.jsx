import React, { useState, useEffect } from "react";
import "./todoapp.css";

function Todoapp() {
    const [tasks, setTasks] = useState([]);
    const [job, setJob] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        // Fetch tasks from local storage when component mounts
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const addWebsite = (e) => {
        e.preventDefault();
        if (job && date) {
            const newTask = { job, date };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setJob("");
            setDate("");
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            localStorage.setItem("job", JSON.stringify(job));
            localStorage.setItem("date", JSON.stringify(date));
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        localStorage.removeItem("job");
        localStorage.removeItem("date");
    };

    const deleteAllTasks = () => {
        setTasks([]);
        localStorage.removeItem("job");
        localStorage.removeItem("date");
    };

    const fetchFromLocalStorage = () => {
        // Fetch job and date from local storage
        const storedJob = JSON.parse(localStorage.getItem('job'));
        const storedDate = JSON.parse(localStorage.getItem('date'));

        if (storedJob && storedDate) {
            const newTask = { job: storedJob, date: storedDate };
            setTasks([newTask]);
            // Optional: Update the local storage with the new task array
            localStorage.setItem("tasks", JSON.stringify([newTask]));
        }
    };

    return (
        <section id="App">
            <div className="container1">
                <h1 id="app-h1">To-Do App</h1>
                <button className="button" id="button" onClick={fetchFromLocalStorage}>
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <span>Fetch</span>
                </button>
                <div className="app">
                    <form id="form" onSubmit={addWebsite}>
                        <header>
                            <h1>Todo list</h1>
                            <div className="add-task">
                                <input 
                                    type="text" 
                                    placeholder="Add Task" 
                                    id="t1" 
                                    value={job} 
                                    onChange={(e) => setJob(e.target.value)} 
                                />
                                <input 
                                    type="date" 
                                    placeholder="YYYY-MM-DD" 
                                    id="t2" 
                                    value={date} 
                                    onChange={(e) => setDate(e.target.value)} 
                                />
                                <button className="Btn" type="submit">
                                    <div className="sign">+</div>
                                    <div className="text">Create</div>
                                </button>
                            </div>
                        </header>
                        <div className="filtering">
                            <select id="select">
                                <option value="All">All</option>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                            </select>
                            <button className="ui-btn" onClick={deleteAllTasks}>Delete All</button>
                        </div>
                    </form>
                    <table className="table">
                        <thead>
                            <tr>
                                <th id="tab1">Task</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th id="tab2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="todos-list-body">
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td id="td1">{task.job}</td>
                                    <td>{task.date}</td>
                                    <td>Pending</td>
                                    <td id="td2">
                                        <button className="Deletebtn" onClick={() => deleteTask(index)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <a id="reference" href="https://github.com/Abdurrehman211" target="_blank">Made with ❤️ by Abdurrehman</a>
                    <br />
                    <br />
                </div>
                <br /><br />
            </div>
          
        </section>
    );
}

export default Todoapp;
