import React, { useState } from 'react'
import axios from 'axios'

function CreateTodo() {

  const [title, setTitle ] = useState("")
  const [description, setDescription  ] = useState("")

  async function sendTodo(){
    await axios.post('http://localhost:3000',{
      title,
      description,
      isDone: false
    })
  }
  return (
    <div>
      <input placeholder='title' type='text' onChange={(e)=> setTitle(e.target.value)}></input><br/>
      <input placeholder='description' type='text' onChange={(e)=> setTitle(e.target.value)}></input><br/>
      <button onClick={sendTodo}>Add todo</button>
    </div>
  )
}

export default CreateTodo
