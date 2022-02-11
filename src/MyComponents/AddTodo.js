import React from 'react'
import { useState } from 'react';

export default function AddTodo({addtodo}) {


const [title,setTitle] = useState("");

        const submit = (e)=>{

            e.preventDefault();
            if(!title||title.length<5){
                alert("At least 5 character needed")
            }
            else{
                addtodo(title)
            }

 setTitle("");

        }

    return ( 

<div className="container">
<h1 className="text-center my-4 headingToDo">To Do List</h1>
<form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label" aria-describedby="taskhelp"></label>
<div className="text-center">
    <input type="text" value={title} className="form-control text-center" id="title" placeholder="Enter task" onChange={(e)=>{setTitle(e.target.value)}}/>
<small id="taskhelp" class="form-text text-muted">Task name must be atleast 5 letters long</small>   
</div>
  </div>

  <div className="text-center"><button type="submit" className="btn btn-success">Submit</button></div>
</form>
</div>

        )
}