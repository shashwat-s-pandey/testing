import logo from './logo.svg';
import './App.css';
import {NamedExports} from './components/NamedExports';
import ExpDefault from './components/ExpDefault';
import ClassComponent from './components/ClassComponent';
import Hello from './JSX/Hello';
import Students1 from './Props/Students1';
import Students2 from './Props/Students2';
import Enroll from './State/Enroll';
// import Counter from './State/Counter';
import UseStateHook1 from './useState/UseStateHook1';
import UseStateHook2 from './useState/UseStateHook2';
import UseStateHook3 from './useState/UseStateHook3';
import UseStateHook4 from './useState/UseStateHook4';
import UseEffectHook1 from './useEffect/UseEffectHook1';
import UseEffectHook2 from './useEffect/UseEffectHook2';
import Fetching from './useEffect/Fetching';
import Fetching2 from './useEffect/Fetching2';
import ComponentA from './useContext/componentA';
import React, { useContext } from 'react';
// import Counter from './Counter';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Submit from './Submit';
import Navbar from './Navbar';
import Counter from './Counter';
import NoMatch from './NoMatch';
import About from './About';
import Notes from './Notes';
import Videos from './Videos';
import User from './User';
import Userdetails from './Userdetails';
import Form from './Form';
import Form2 from './Form2';
import { CounterContext } from './Context/CounterContext';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counter/CounterSlice';

export const userContext = React.createContext()
export const IdContext = React.createContext()

function App() {

  const counterContext = useContext(CounterContext);

  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>React App</h2>
      <ExpDefault />
      <NamedExports />
      <ClassComponent />
      <Hello />
      <Students1 name="shashwat" RollNo="34">
        <h1>Hello Student 1</h1>
      </Students1>
      <Students2 name="ssp" rollNo="34"></Students2>
      <Students2 name="abc" rollNo="35">
        <h1>student 2.2</h1>
      </Students2>
      <Students2 name="xyz" rollNo="36"></Students2>
      <Enroll></Enroll>
      {/* <Counter /> */}
      <UseStateHook1 />
      <UseStateHook2 />
      <UseStateHook3 />
      <UseStateHook4 />
      <UseEffectHook1 />
      <UseEffectHook2 />
      <Fetching />
      <Fetching2 />

      <userContext.Provider value={'Shashwat'}>
        <IdContext.Provider value={'76'}>
          <ComponentA/>
        </IdContext.Provider>
      </userContext.Provider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/submit' element={<Submit/>}></Route>

        <Route path='*' element={<NoMatch/>}></Route>

        <Route path='/about' element={<About/>}>
          <Route path='videos' element={<Videos/>}></Route>
          <Route path='notes' element={<Notes/>}></Route>
        </Route>

        <Route path='/user' element={<User/> }></Route>
        <Route path='/user/:userId' element={<Userdetails/> }></Route>
      </Routes>

      <Form/>

      <Form2 />

      <h1>Count is {counterContext.count}</h1>
      <Counter />

      <h1>React Redux</h1>
      <h2>Count is {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
} 

export default App;
