import React, { useState } from "react";

function Component() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    };

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("");
        }
    };

    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    };

    function moveTaskUp(index) {

        if (index > 0) {

            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    };

    function moveTaskDown(index) {

        if (index < tasks.length - 1) {

            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    };

    return (
        <>
            <div className="to-do-list">

                <h1>To-Do-List</h1>

                <div>
                    <input type="text"
                        onChange={handleInputChange}
                        value={newTask}
                        placeholder="Enter a Task To Do" />

                    <button
                        onClick={addTask}
                        className="addBtn">
                        Add
                    </button>
                </div>

                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text"> {task} </span>
                            <button
                                className="moveBtn"
                                onClick={() => moveTaskUp(index)}>
                                👆
                            </button>

                            <button
                                className="moveBtn"
                                onClick={() => moveTaskDown(index)}>
                                👇
                            </button>
                            <button
                                className="deleteBtn"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>

                        </li>)}
                </ol>


            </div>

        </>
    );

}

export default Component;