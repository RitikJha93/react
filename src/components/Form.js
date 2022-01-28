import React from 'react';
import Input from './Input';
export default function Form(props) {
  return (
    <form action="">
      <Input type="text" placeholder="Enter your name" />
      <Input type="password" placeholder="Enter your password" />

      {!props.registered && (
        <Input type="password" placeholder="confirm your password" />
      )}

      <button>{props.registered ? 'Login' : 'Register'} </button>
    </form>
  );
}
