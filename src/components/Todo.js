import React, { useState } from 'react';
export default function Input(props) {
  const [item, newItem] = useState('');

  function handleChange(event) {
    let newvalue = event.target.value;
    console.log(newvalue);
  }
  function handleClick() {
    newItem(value);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>

      <div className="formBox">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>

      <div className="items">
        <ul>
          <li>{item}</li>
        </ul>
      </div>
    </div>
  );
}
