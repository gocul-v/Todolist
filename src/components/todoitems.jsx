import './css/todoitems.css'
import tick from './assets/tick.png'
import not_tick from './assets/not_tick.png'
import cross from './assets/cross.png'


const Todoitems = ({no,text,display,setTodos}) => {

  const deleteTodo = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no!==no);
    setTodos(data);
  }

  const toggle = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
      for (let i = 0;i< data.length;i++)
      {
       if (data[i].no===no){
          if (data[i].display===""){
           data[i].display = "line-through"
          }
          else{
           data[i].display="";
         }
          break;
      }
    }
    setTodos(data);
  }
  return (
    <div className="todoitems">
        <div className={`todolist-container ${display}`} onClick={()=>{toggle(no)}}>
          {display===""?<img src={not_tick} alt="" /> : <img src={tick} alt="" />}
          <div className="todoitems-text"> {text}</div>
        </div>
        <img className='todolist-cross' onClick={()=>{deleteTodo(no)}} src={cross} alt="" />

    </div >
  )
}

export default Todoitems
