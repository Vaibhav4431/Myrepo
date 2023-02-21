import React, { useState } from "react";

export default function Todo(props) {
  const [inputData, setInputData] = useState("");
  const [inputItems, setInputItems] = useState([]);
  const [changeBtn, setChangeBtn] = useState(true);
  const [showEdit, setShowEdit] = useState(null);

  const storeData = () => {

    if (!inputData) {

      alert("plz enter something");

    }else if(inputData && !changeBtn){
      setInputItems(
        inputItems.map((element)=>{
            if(element.id === showEdit){
              return{ ...element, name:inputData}
            }
            return element;
        })
      )
      setChangeBtn(true);

      setInputData("");
  
      setShowEdit(null);
  
    }
    
    else {

      const newData = { id: new Date().getTime().toString() , name: inputData}

      setInputItems([...inputItems, newData]);

      setInputData("");

    }
  };

  const deleteItems = (index) => {

    const afterDelete = inputItems.filter((element) => {
      
      return index !== element.id;

    });

    setInputItems(afterDelete);

  };

  const editItems = (id) => {

    let newEditItems = inputItems.find((element)=>{

       return element.id === id;

    })

    setChangeBtn(false);

    setInputData(newEditItems.name);

    setShowEdit(id);

  }

  const deleteAll = () => {


    setInputItems([]);
  };

  return (
    
    <>
      <div className="container">
        <div className="child-element">
          <div className="heading">
            <h3>Todo list</h3>
          </div>
          <div className="textItems">
            <input
              className="inputArea"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            ></input>


              {
                  changeBtn ? <button className="addItems" onClick={storeData}>Add</button> :
                  <button className="editItems" onClick={storeData}>Edit</button>

              }
            
          </div>

          {inputItems.map((element) => {
            return (
              <div className="added-items d-flex my-4" key={element.id}>
                <p>{element.name}</p>
                <button
                  className="edit-btn"
                  onClick={() => {
                    editItems(element.id);
                  }}
                  style={{ height: "30px", marginLeft: "150px" }}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => {
                    deleteItems(element.id);
                  }}
                  style={{ height: "30px", marginLeft: "5px" }}>
                  Delete
                </button>
              </div>
            );
          })}

          <div className="delete-all-items my-2 ">
            <button className="btn-delete-all" onClick={deleteAll}>
              Delete All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
