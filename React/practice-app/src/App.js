import React from 'react'
import logo from './logo.svg';
import './App.css';
import MyContext from './topics/context/context';
import User from './topics/context/contextUser';
import {Link, Routes, Route} from 'react-router-dom';
import PrivateRouter from './topics/private-route/routerWrapper';
import { useDispatch, useSelector } from 'react-redux';
import {INCREMENT, DECREMENT} from './store/slice/practiceSlice';
import {getData} from './store/action/practice-reducer'
import {sagaActions} from './store/saga/sagaActions';
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
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch])
  



  
  const counter = useSelector(state => state.practice_reducer.counter);
  const posts = useSelector(state => state.practice_reducer.posts)
  console.log(posts);
  return (
    <MyContext.Provider value={{
      name:'Niket',
      age: 24
    }}>
      {/* <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      <Routes>
        <Route path='/' element={Home} exact />
        <PrivateRouter path='/about' element={About} exact />
        <Route path='/contact' element={Contact} exact />
      </Routes> */}
      <h1>{counter}</h1>
      <button onClick={() => dispatch(INCREMENT())}>+</button>
      <button onClick={() => dispatch(DECREMENT())}>-</button>
      <button onClick={() => dispatch({type: sagaActions.USER_FETCH_REQUESTED})}>Get Data</button>
      <>
      
      </>
    </MyContext.Provider>
  );
}



export default App;
