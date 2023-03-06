import React from "react";
import styles from "./Tasks.module.css";
import TaskItem from "./TaskItem";
import Section from "../UI/Section";
import { useSelector } from "react-redux";

function Tasks() {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  return (
    <Section>
      <div className={styles.container}>
        <ul>
          <li>
            {tasks.map((item) => (
              <TaskItem task={item} />
            ))}
            <TaskItem />
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default Tasks;
