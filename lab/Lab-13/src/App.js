import './App.css';
import TaskForm from './components/NewTask/TaskForm';
import Tasks from './components/Tasks/Task';

function App() {
  return (
    <div className="App">
      <TaskForm />
      <Tasks />
    </div>
  );
}

export default App;
