import react from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css'
import About from './routes/about';
import Contact from './routes/contact';
import Home from './routes/home';
import Project from './routes/project';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
  );
}

export default App;
