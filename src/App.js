import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Added from "./Added";
import './App.css';

const App=()=>{
  const[item,setitem] =useState('');
  const[newitem,setnewitem] = useState([]);
  const inputevent = (e)=>{
   setitem(e.target.value);
  }

const additem=()=>{
  
  setnewitem((prevalue)=>{
    return[...prevalue,item]
  });
  setitem('');

}
const deleteitem=(id)=>{
  setnewitem((prevalue)=>{
    return prevalue.filter((item,index)=>{
      return index !== id;
    })
  })
}
const deleteall=()=>{
  setnewitem([]);
}
  return(<>
          <div className="main-div">
            <div className="center-div">
              <h1>TodoList</h1>
              <input type="text" value={item} onChange={inputevent} placeholder="Enter item...."  />
             <button className="btn" onClick={additem}><AddIcon  /></button>
            <div> <ClearAllIcon onClick={deleteall} className="clearall"/></div>
             <ul>
               {
                 newitem.map((val,index)=>{
                   return <Added  key={index}
                   id={index}
                   getitem={val}
                   select={deleteitem} />
                   
                 })
               }
             </ul>
            </div>
          </div>
  </>)
}
export default App;