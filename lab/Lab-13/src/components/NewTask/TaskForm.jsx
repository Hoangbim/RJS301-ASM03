import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHref } from 'react-router-dom';
import useHttp from '../../hooks/useHttp';
import { taskAction } from '../../store';
import Section from '../UI/Section';
import styles from './TaskForm.module.css';

function TaskForm() {
  const [taskInput, setTaskInput] = useState('');
  const dispatch = useDispatch();
  //  hàm quản lý input
  const taskInputHandler = (e) => {
    setTaskInput(() => e.target.value);
  };

  //post task to server
  const postToServer = async (taskInput) => {
    const res = await fetch(
      'https://react-http-4806b-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      {
        method: 'POST',
        body: JSON.stringify(taskInput),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    const task = { id: data.name, task: taskInput };
    console.log(data, task);
    dispatch(taskAction.addTask(task));
  };

  // ////sử dụng http để post
  //   const { error, isLoading, sendRequest } = useHttp();
  //   //hàm xử lý data
  //   const applyData = (data) => {
  //     const task = { id: data.name, task: taskInput };
  //     console.log(data, task);
  //     dispatch(taskAction.addTask(task));
  //   };

  //   //config
  //   const requestConfig = {
  //     url: 'https://react-http-4806b-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
  //     method: 'POST',
  //     body: taskInput,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  const addTaskHandler = (e) => {
    e.preventDefault();

    ////gọi hàm postTask
    postToServer(taskInput);

    ////////gọi hàm sendRequest trả về từ useHttp hook
    // console.log('submiting');
    // sendRequest(requestConfig, applyData);
    // console.log('done!', isLoading, error);
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
