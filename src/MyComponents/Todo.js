import React from 'react'
import TodoItem from "../MyComponents/TodoItem"
import DoneItem from "../MyComponents/DoneItem"

export default function Todo(props) {

let todocompcss = {

    minHeight: "70 vh",
    margin: "40px auto"

}

const removeComp =(todos)=>{
    console.log("remove completed task");



}

    return ( 

        <>
<div class="text-center">
   <button className="btn btn-outline-success " type="submit" id="remBut" onClick={()=>{removeComp(props.todos)}}>Remove Completed Tasks</button>
   </div>
          <div class="row justify-content-md-center">
<div className="container my-3 col-md" style={todocompcss}><h2 className="text-center my-4">To Do</h2>



<div class="text-center">
{props.todos.length===0?"To do list is empty":
props.todos.map((todo)=>{
    
    return (
<>
    <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete}/> <hr/>
    </> )
}) 

}
</div>

</div>


<div className="container my-3 col-md" style={todocompcss}><h2 className="text-center my-4">Completed Task</h2>

<div class="text-center">
{props.donetodos.length===0?"No task completed":
props.todos.map((todo)=>{
    if(todo.taskDone===1){
            return (
                <>
                <DoneItem donetodo={todo} key={todo.id} /> <hr/>
                </> )
    }

}) 

}
</div>
</div>

</div>

</>
        )
}