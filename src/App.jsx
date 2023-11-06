import './App.css'
// import { useReducer } from 'react'
// import todoReducer, { INITIAL_STATE } from './TodosReducers'

import UserList from './component/UserList';
import { Routes, Route } from 'react-router-dom';


function App() {
  // const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  // const getTodos = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const allTodos = await response.json();
  //      dispatch({
  //     type: 'GET_TODOS',
  //     payload: allTodos
  //   })
  // }
  // getTodos();
  // const myTodos = state.map(todo => {
  //   return (
  //     <div key={todo.id}>
  //       <h1>{todo.title}</h1>
  //     </div>
  //   )
  // })
  return (
    <>
      {/* <h1 style={{fontSize: 10}}>{myTodos}</h1> */}
      <Routes>
        <Route path="/" element={<UserList />} /> 
      </Routes>
    </>
  );
}

export default App
