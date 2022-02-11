import logo from './logo.svg';

import AddTodo from './MyComponents/AddTodo'; 

import Todo from './MyComponents/Todo';
import './App.css';
import React, { useState , useEffect } from 'react';

function App() {

let startWith;
    if(localStorage.getItem("todos")===null){
       startWith=[];
    }
    else{
        startWith = JSON.parse(localStorage.getItem("todos"));
    }

 const addtodo =(title)=>{
    console.log("added todo : ",title);
    let id; 
  
if(todos.length!==0)
id = todos[todos.length-1].id+1;
else {
    id = 1;
}


    const newtodo={
        title: title,
        id : id,
        taskDone: 0
    }

    setTodos([...todos , newtodo]);

    if(localStorage.getItem("todos")){
        localStorage.setItem("todos",JSON.stringify(todos));
    }

}


 const onDelete = (todo)=>{
    console.log("Delete this ",todo);
    setTodos(todos.filter( (e)=>{

        return e!==todo;
    }




        ))
   
    if(localStorage.getItem("todos")){
        localStorage.setItem("todos",JSON.stringify(todos));
    }


  
}

//  const addDonetodo =(title)=>{
//     console.log("added done todo : ",title);
 
//     const newdonetodo={
//         title: title
//     }

//     setDoneTodos([...donetodos , newdonetodo]);

//     if(localStorage.getItem("donetodos")){
//         localStorage.setItem("donetodos",JSON.stringify(donetodos));
//     }

// }



  const [todos,setTodos] = useState(startWith);

  useEffect(()=>{localStorage.setItem("todos",JSON.stringify(todos));},[todos])
    
  const [donetodos,setdoneTodos] = useState([]);

  useEffect(()=>{localStorage.setItem("donetodos",JSON.stringify(donetodos));},[donetodos])
 

    return ( <>
    
     <AddTodo addtodo={addtodo}/>
     <Todo todos={todos} onDelete={onDelete} donetodos={donetodos}/>

        </>);
    }

    export default App;
