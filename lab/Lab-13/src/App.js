import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHref } from 'react-router-dom';
import './App.css';
import TaskForm from './components/NewTask/TaskForm';
import Tasks from './components/Tasks/Tasks';
import useHttp from './hooks/useHttp';
import { taskAction } from './store';

function App() {
  const dispatch = useDispatch();
  const { sendRequest: fetchTask } = useHttp();

  useEffect(() => {
    //khai báo hàm sử dụng data trả về từ fetch
    const setTaskToStore = (data) => {
      let tasks = [];
      for (const key in data) {
        tasks.push({ id: key, task: data[key] });
      }
      console.log(data, tasks);
      ///gán cho task state kết quả trả về từ api
      dispatch(taskAction.setInit(tasks));
    };

    //gọi hàm fetchTask trả về từ useHttp hook
    fetchTask(
      {
        url: 'https://react-http-4806b-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      },
      setTaskToStore
    );
  }, []);

  return (
    <div className="App">
      <TaskForm />
      <Tasks />
    </div>
  );
}

export default App;
