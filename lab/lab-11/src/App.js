import logo from './logo.svg';
import './App.css';
import UserFinder from './components/UserFinder';
import Users from './components/Users';
import { useState } from 'react';

const DUMMY_USER = [
  {
    id: 'u1',
    name: 'Max',
  },
  {
    id: 'u2',
    name: 'Manuel',
  },
  {
    id: 'u3',
    name: 'Julie',
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USER);
  const findName = (val) => {
    const filteredUsers = DUMMY_USER.filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    console.log(val, filteredUsers);
    setUsers(filteredUsers);
  };
  return (
    <div className="App">
      <UserFinder findName={findName} />
      <Users users={users} />
    </div>
  );
}

export default App;
