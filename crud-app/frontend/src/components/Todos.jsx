import React from 'react'

function Todos({_id, title, description, isDone}) {

  return (
    <div key={_id}>
        <div>
            {title}
        </div>
        <div>
            {description}
        </div>
        <button>
            {isDone ? "Mark As Not Done" : "Mark As DOne"}
        </button>
      
    </div>
  )
}

export default Todos
