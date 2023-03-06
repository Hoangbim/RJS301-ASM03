import React, { useState } from 'react';
import styles from './Tasks.module.css';
import TaskItem from './TaskItem';
import Section from '../UI/Section';
import { useSelector } from 'react-redux';
import useHttp from '../../hooks/useHttp';

function Tasks() {
  const tasks = useSelector((state) => state.tasks);
  // const [renderTasks, setRenderTasks] = useState()
  console.log(tasks);

  const { isLoading, error, sendRequest: fetchTask } = useHttp();

  return (
    <Section>
      <div className={styles.container}>
        <ul>
          <li>
            {tasks.map((item) => (
              <TaskItem task={item.task} id={item.id} />
            ))}
            <TaskItem />
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default Tasks;
