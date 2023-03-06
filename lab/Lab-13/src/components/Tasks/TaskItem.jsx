import React from "react";
import styles from "./TaskItem.module.css";

function TaskItem(props) {
  return <div className={styles.task}>{props.task}</div>;
}

export default TaskItem;
