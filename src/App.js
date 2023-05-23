import { Route, Routes } from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import { useState } from 'react';
import TodoLists from './components/TodoLists';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <Header userName={userName} />
      <Routes>
        <Route path="/" element={<Start setUserName={setUserName} />} />
        <Route path="/start" element={<Start setUserName={setUserName} />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/todo-lists" element={<TodoLists />} />
      </Routes>
    </>
  );
}

export default App;
