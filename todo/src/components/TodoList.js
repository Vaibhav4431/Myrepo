import React, {useState} from 'react';


export default function TodoForm() {

    const [inputData,setInputData] = useState("");
    const [inputItems,setInputItems] = useState([]);
    // const [showBtn,setShowBtn] = useState (null);
    
    // if(!inputData){

    // }else{
      const storeData = (e)=>{
        setInputData(e.target.value);
            
        setInputItems([inputData]);
    
        setInputData("");
        }
    // }

    
    
    
        
    
  return (
    <>
      <div className="container">
        <div className="heading">
            <h1>Todo list</h1>
        </div>
        <div className='content'>
            <input type="text" value={inputData} onChange={setInputData((e)=>e.target.value)}></input>
            <button onClick={storeData}>Add</button>
        </div>
        <div>
          <p>
            {
              inputItems.map((elem)=>{

              })
            }
          </p>
        </div>

      </div>
    </>
  )
}