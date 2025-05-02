import { useEffect, useRef, useState } from 'react';
import './css/todo.css' 
import Todoitems from './todoitems';



let count = 0;
const Todo = () => {

  const [todos,setTodos] = useState([]);
  const inputref = useRef(null);

  const add = ()=>{
    setTodos([...todos,{no:count++,text:inputref.current.value,display:""}])
    inputref.current.value = "";
    localStorage.setItem("todos_count",count)
  }

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")))
    count = localStorage.getItem("todos_count")
  },[])

  useEffect(()=>{
    setTimeout(() => {
    console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos));},100)
  },[todos])




  return (
    <div className='todo'>  
      <div className="todo-header">To-Do list</div>
      <div className="todo-add">
          <input ref={inputref} type="text" placeholder='Add Your task' className='todo-input'/>
          <div onClick={()=>{add()}} className="todo-btn">Add</div>
      </div>
      <div className="todo-list">
        {todos.map((item,index)=>{
            return <Todoitems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}></Todoitems>
        })}
      </div>
      
    </div>
  )
}

export default Todo
