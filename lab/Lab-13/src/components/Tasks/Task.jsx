import React from 'react';
import styles from './Tasks.module.css';
import TaskItem from './TaskItem';

function Tasks() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <TaskItem />
        </li>
      </ul>
    </div>
  );
}

export default Tasks;
