import React, { useState } from 'react';
import Section from '../UI/Section';
import styles from './TaskForm.module.css';

function TaskForm() {
  const [taskInput, setTaskInput] = useState('');
  const taskInputHandler = (e) => {
    setTaskInput(() => e.target.value);
  };
  return (
    <Section>
      <form className={styles.form}>
        <input type="text" value={taskInput} onChange={taskInputHandler} />
        <button>Add Task</button>
      </form>
    </Section>
  );
}

export default TaskForm;
