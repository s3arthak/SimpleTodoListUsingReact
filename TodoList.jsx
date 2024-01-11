import React from 'react'

const TodoList = (props) => {


  return (
   <>
     <div className='todo_style'> 
      <button className='newbtn' onClick={()=>{
        props.onselect(props.id)
      }}>-</button>
       <li>{props.text}</li>
       </div>
       </>
   
  )
}

export default TodoList