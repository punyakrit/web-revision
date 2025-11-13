import React, { useEffect, useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import axios from 'axios'

function App() {
  const [todo, setTodo] = useState([])

  async function fetchData(){
    const response = await axios.get('http://localhost:3000')
    setTodo(response.data.all)
  
  }

  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div>

      <CreateTodo/>
      {todo.map(function(todo){
        return(<Todos id={todo._id} title={todo.title}  description={todo.description} isDone={todo.isDone}/>)
      })}
    </div>
  )
}

export default App
