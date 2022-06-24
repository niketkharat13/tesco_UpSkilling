import React from 'react'
import logo from './logo.svg';
import './App.css';
import MyContext from './topics/context/context';
import User from './topics/context/contextUser';
import {Link, Routes, Route} from 'react-router-dom';
import PrivateRouter from './topics/private-route/routerWrapper';
// const MyContext = React.createContext(null);
function Home() { 
  return (
    <h1>Home page</h1>
  )
}

function About() {
  return (
    <h1>About Page</h1>
  )
}

function Contact() {
  return (
    <h1>Contact Page</h1>
  )
}
function App() {
  return (
    <MyContext.Provider value={{
      name:'Niket',
      age: 24
    }}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      <Routes>
        <Route path='/' element={Home} exact />
        <PrivateRouter path='/about' element={About} exact />
        <Route path='/contact' element={Contact} exact />
      </Routes>
    </MyContext.Provider>
  );
}



export default App;
