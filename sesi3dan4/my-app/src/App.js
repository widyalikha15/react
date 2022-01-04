import logo from './logo.svg';
import './App.css';

import Header from './components/Header';//import components dari components header.jsx
import Users from './components/Users';
import Bodys from './components/Bodys';
import Change from './components/Change';
import Count from './components/Count';
import Prop from './components/Prop';
import Button from './components/Button';
import { useEffect, useState } from 'react';
import Counter from './components/Counter';
import Card from './components/card';

function App() {
  //const[state, setstate] = usestate(initialvalue)
  const [name, setName] = useState('Budi')
  const [anotherName, setAnotherName] = useState('Fikri')

  //sesi 21 fetch data
  const [ url ] = useState('https://jsonplaceholder.typicode.com/todos')
  const [ todos, setTodos ] = useState([])
  const [ todo, setTodo ] = useState()
  //fetch data
  // useEffect(()=> {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(result => setTodos(result))
  // }, [])
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => setTodos(result))
  }, [])

  // * function untuk mendapatkan data spesifik
  function getTodo(id) {
    fetch(url + `/${id}`)
      .then(response => response.json())
      .then(result => setTodo(result))
  }

// function changeName(e) {
//   //cara 1 : useState tambahan
//   const oldName = name
//   console.log(e)
//   setName(anotherName)
//   setAnotherName(oldName)

//   //cara 2 : condition if else
//   //setName(name == 'Budi' ? 'Fikri' : 'Budi')
// }

  return ( //render dari class components
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {todos} */}
        {/* {JSON.stringify(todos)} */}
        {/* {
          todos.map(todo => (
            <div key={todo.id}>
              {todo.title} by {todo.userId} - {todo.completed ? 'completed' : 'pending'}
            </div>
          ))
        } */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>{name}</code> and save to reload.
        </p>
        {/* <button onClick={changeName}>Change Name</button> */}
        {/* importnya component header */}
        <Header/>
        <Users/>
        <Bodys/>
        <Change/>
        <Count/>
        <Prop batch="props" logo={logo} />
        <Button name="Klik aku, mas"/>
        <Counter/>
        {
          todo && (
            <div>
              {todo.title} - {todo.userId} - { todo.completed ? 'Completed' : 'Pending' }
              <button onClick={() => setTodo()}>Go back</button>
            </div>          )
        }

        {
          !todo && todos.map(todo => (
            // <div key={ todo.id }>
            //   <button onClick={() => getTodo(todo.id)}>
            //     { todo.title } by { todo.userId } - { todo.completed ? 'Completed' : 'Pending' }
            //   </button>
            // </div>
            <Card 
              key={todo.id}
              title={todo.title}
              userId={todo.userId}
              completed={todo.completed}

            />
          ))
        }
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
