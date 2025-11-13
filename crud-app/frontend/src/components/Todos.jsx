import React from 'react'

function Todos({title, description, isDone}) {

  return (
    <div>
        <div>
            {title}
        </div>
        <div>
            {description}
        </div>
        <button>
            {isDone}
        </button>
      
    </div>
  )
}

export default Todos
