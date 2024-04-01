import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Header from './components/Header/Header';

function App() {
  const [students , setStudent] = useState(JSON.parse(localStorage.getItem("students")) || [])
  const [loading , setLoading] = useState(false)
  console.log(students);

  return (
    <>
      <Header setLoading={setLoading} students={students} setStudent={setStudent} />
      <List loading={loading} students={students} />  
    </>
    );
}

export default App;
