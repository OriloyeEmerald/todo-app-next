import React from 'react'

const TodoBar = ({handleInput, inputTask, addTask, toggleState}) => {
   
  return (
    <div className='rounded-[.3rem] mt-[2rem] py-[.6rem] px-[.2rem] flex gap-5 items-center relative z-50 outline-0' style={{background: toggleState ? '#fff' : '#25273d', color: toggleState ? '#000' : '#767992'}}>
       <div className='w-5 h-5 rounded-full border-[.1rem] bg-transparent ml-3' onClick={addTask}style={{border: toggleState ? '.1rem solid #ccc' : '.1rem solid #393a4b'}}></div>
       <input type="text" placeholder='Create new todo ...' value={inputTask} className='border-0 focus:outline-0 w-1/2 text-black bg-transparent outline-0' onChange={handleInput} style={{color: toggleState ? '#000' : '#767992'}}/>
    </div>
  )
}

export default TodoBar;