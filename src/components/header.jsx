
import React from 'react';
import moon from '../assets/images/Combined Shape.svg'
import sunshine from '../assets/images/sunshine.svg'
import Image from 'next/image';
 
import TodoBar from './todoBar';

const Header = ({handleInput, inputTask, addTask, toggleState, setToggleState}) => {

  const handleToggle = () => {
    setToggleState(!toggleState)
    document.body.className = toggleState &&'dark-theme';
  }
  return (
    <div className='text-white h-[30vh] py-[1.3rem] px-[1.3rem] relative' style={{
      backgroundSize: 'cover',
      backgroundImage: toggleState ? `url('bitmap.svg')` : `url('bitmap2.png')` }}>
        <div className="w-full h-full absolute top-0 left-0 z-0" style={{
        background: 'linear-gradient(to right, #55ddff, #c058f3)', opacity: 0.5 
        }}></div>
      <div className='flex items-center justify-between mt-5'>
      <h1 className='text-[1.3rem] letter-space-[.3rem] z-40'><strong>TODO</strong></h1>

     <div className='z-30 relative'>
      <Image src={toggleState ? moon : sunshine} alt='light mode' className='w- 45 h-35 ' onClick={handleToggle}/>
     </div>
      </div>

      <TodoBar 
      handleInput={handleInput} 
      inputTask={inputTask}
      addTask={addTask}
      toggleState = {toggleState}
      />
    </div>
  );
}

export default Header;
