import React, { useReducer, useState } from "react";

function reducer(state, action) {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }

  if (action.type === "SELECT_ITEM") {
    return {
      ...state,
      selectedItem: action.payload,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    return {
      ...state,
      items: state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      ),
    };
  }

  if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
      selectedItem: null,
    };
  }

  if (action.type === "DELETE_ALL_ITEM") {
    return {
      items: [],
      selectedItem: null,
    };
  }

  return state;
}

export default function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    selectedItem: null,
  });
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
       alert("Please Enter Something!!!")
    }else{
      if (state.selectedItem) {
      updateItem({ ...state.selectedItem, name });
    } else{
      addItem({ id: new Date().getTime(), name });
    }
    setName("");
    };
  }


    

  const handleChange = (e) => {

    setName(e.target.value);
  };

  function addItem(item) {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  }

  function selectItem(item) {
    dispatch({
      type: "SELECT_ITEM",
      payload: item,
    });
    setName(item.name);
  }

  function updateItem(item) {
    dispatch({
      type: "UPDATE_ITEM",
      payload: item,
    });
  }

  function deleteItem(id) {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  }

  function deleteAllItem(item) {
    dispatch({
      type: "DELETE_ALL_ITEM",
      payload: item,
    });
  }

  return (
    <div>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} <button onClick={() => selectItem(item)}>Edit</button>{" "}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">{state.selectedItem ? "Update" : "Add"}</button>
      </form>
      <button onClick={() => deleteAllItem()}>Delete All</button>
    </div>
  );
}
