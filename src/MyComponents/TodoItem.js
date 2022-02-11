import React, { useState , useEffect } from 'react';

export default function TodoItem({todo,onDelete}) {

const [isDone, setDone] = useState("false");

  const ToggleClass = (todo) => {
   
    setDone(!isDone); 
    console.log("clicked on :",todo);
    todo.taskDone=todo.taskDone==0?1:0;
    console.log("Now  :",todo);
   };

const strikeClick = (todo)=>{
console.log("clicked");
 todo.classList.toggle("strikeThrough");
  };
    return ( 
<div className="todoItemDiv animate__animated animate__rubberBand">

<h6 className={isDone ? "notdone" : "done"} onClick={()=>{ToggleClass(todo)} } >{todo.title}</h6>
<div class="text-center">
<button className="btn btn-danger  " onClick={()=>{onDelete(todo)} }>Delete</button>
</div>

</div>
        )
}