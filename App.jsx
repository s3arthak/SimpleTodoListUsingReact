import React,{useState} from 'react'
import TodoList from './TodoList';
import './index.css'

const App = () => {
  const [first, setfirst] = useState();
  const [second, setsecond] = useState([]);
  const inputEvent=(event)=>{
    setfirst(event.target.value);
    };


  const  whenClick=()=>{
    setsecond((oldItems) => {
      return[...oldItems,first]
    });
    setfirst("");
  };


  const deleteitem=(id)=>{
    //  console.log('delted');
    setsecond((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id;
      });
    })
  }


  
  return (
   <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1> ToDo List </h1>
          <br />
         <input type="text" 
         placeholder='Add a Item' 
         value={first} 
         onChange={inputEvent} />
         <button onClick={whenClick}>+</button>
         <ol>
          {/* <li>{first}</li> */}
         { second.map( (val,index)=>{
           return <TodoList
           key={index} 
           text={val} 
           id={index}
           onselect={deleteitem} />
          })
        }
         </ol>
        </div>
        
        </div>  
   </>
  )
}

export default App;