import { Check, X } from 'phosphor-react';
import { useState } from "react";

const TasksBar = ({todos, deleteTask, completeTask, setTodos, toggleState}) => {
 
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [activeFilter, setActiveFilter] = useState('all');

  const filterTasks = (filter) => {
    if(filter === 'all') {
      setFilteredTodos(todos);
      
    } else if(filter === 'active') {
      setFilteredTodos(todos.filter((todo) => !todo.completed));

    }else if(filter === 'completed') {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    }

    setActiveFilter(filter)
  }
  


  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const itemLength = todos.length - todos.filter((todo) => todo.completed).length;

  const tasksToRender = activeFilter === 'all' ? todos : filteredTodos;
  return (
    <>
    <div className='mx-[1.3rem]'>
     <div className='w-[88%] h-[60%] sm:w-[92%] lg:w-[96.5%] sm:mt-[.5rem] rounded-[.4rem]  shadow-lg absolute top-[22%] z-30 mt-[1rem]' style={{background: toggleState ? '#fff' : '#25273d', color: toggleState ? '#000' : '#cbcbe7'}}>
      {tasksToRender.map((todo) => {
        return <div className='flex items-center justify-around rounded-t-[.4rem] gap-[7rem]  py-[1.1rem] todo-bar rounded-b-none' key={todo.id} style={{borderBottom: toggleState ? '.1rem solid #e3e4f1' : '.1rem solid #393a4b'}}>
            <div className='flex items-center gap-5'>
             <div className='w-5 h-5 rounded-full border-gray-400 border-[.1rem] bg-transparent ml-3'onClick={() => completeTask(todo.id)} style={{background: todo.completed ? 'linear-gradient(to right, #55ddff, #c058f3)' : 'transparent', border: toggleState ? '.1rem solid #ccc' : '.1rem solid #393a4b'}}>
              {todo.completed ? (<Check className='text-white'/>) : ''}
             </div> 
             
             <p className='whitespace-normal break-words w-20 ' style={{textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#d1d2da' : (toggleState ? '#4d5067' : '#c8cbe7')}}>{todo.taskName}</p>
            </div>
            <div>
              <X onClick={() => deleteTask(todo.id)} style={{color: toggleState ? '#ccc' : '#494c6b' }}/>
            </div>
        </div>
      })}
      
      {itemLength > 0
       && 
       <div className='flex justify-between px-[1.3rem] items-center mt-[2rem] text-gray-500' style={{color: toggleState ? '#ccc' : '#5b5e7e'}}>
        <p>{itemLength === 1 ? `${itemLength} item left` : `${itemLength} items left`}</p>
        <p onClick={clearCompleted}>clear completed</p>
      </div>}
    </div>
    <div className=' rounded-[.3rem] py-[.6rem] px-[.5rem] flex absolute bottom-[5%] items-center w-[88%] justify-center mx-auto text-center gap-[1rem] shadow-lg sm:w-[92%] lg:w-[96.5%]' style={{background: toggleState ? '#fff' : '#25273d', color: toggleState ? '#9495a5' : '#5b5e7e'}}>
    <p className={`cursor-pointer ${activeFilter === 'all' ? 'text-[#3acdf7]' : ''}`} onClick={() => filterTasks('all')}>All</p>
    <p className={`cursor-pointer ${activeFilter === 'active' ? 'text-[#3acdf7]' : ''}`} onClick={() => filterTasks('active')}>Active</p>
    <p className={`cursor-pointer ${activeFilter === 'completed' ? 'text-[#3acdf7]' : ''}`} onClick={() => filterTasks('completed')}>Completed</p>
  </div>
  </div>
    </>
    
  );
}

export default TasksBar;