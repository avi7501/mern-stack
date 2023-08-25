import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimeFacts from './pages/AnimeFacts'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animefacts" element={<AnimeFacts />}/>
      </Routes>
    </>
  );
}

export default App;
