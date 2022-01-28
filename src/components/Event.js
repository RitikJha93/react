import React, { useState } from 'react';

export default function Event() {
  const [fullName, setfullName] = useState({
    fname: '',
    lName: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setfullName((prevalue) => {
      console.log(prevalue);
      if (name === 'fName') {
        return {
          fname: value,
          lname: prevalue.lName,
        };
      } else if (name === 'lName') {
        return {
          fname: prevalue.fName,
          lname: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lName}
      </h1>
      <input
        name="fName"
        onChange={handleChange}
        type="text"
        placeholder="Enter your name"
        // value={fullName.fName}
      />
      <input
        name="lName"
        onChange={handleChange}
        type="text"
        placeholder="Enter your lastname"
        // value={fullName.lName}
      />
      <button>Submit</button>
    </div>
  );
}
