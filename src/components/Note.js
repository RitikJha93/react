import React from 'react';

export default function Note(props) {
  return (
    <div className="box">
      <p>
        <strong>{props.title}</strong>
      </p>
      <p>{props.content}</p>
    </div>
  );
}
