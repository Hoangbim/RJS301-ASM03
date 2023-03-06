import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskAction } from "../../store";
import Section from "../UI/Section";
import styles from "./TaskForm.module.css";

function TaskForm() {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();

  const taskInputHandler = (e) => {
    setTaskInput(() => e.target.value);
  };

  const postToServer = async (task) => {
    const res = await fetch(
      "https://react-http-4806b-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    dispatch(taskAction.addTask(taskInput));

    postToServer(taskInput);
  };

  return (
    <Section>
      <form className={styles.form} onSubmit={addTaskHandler}>
        <input type="text" value={taskInput} onChange={taskInputHandler} />
        <button>Add Task</button>
      </form>
    </Section>
  );
}

export default TaskForm;
