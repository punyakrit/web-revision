import React from 'react'

function CreateTodo() {
  return (
    <div>
      <input placeholder='title' type='text'></input><br/>
      <input placeholder='description' type='text'></input><br/>
      <button>Add todo</button>
    </div>
  )
}

export default CreateTodo
