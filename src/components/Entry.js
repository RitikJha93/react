import React from 'react';

export default function Entry(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji">{props.emoji}</span>
          <h3>
            <span>{props.name}</span>
          </h3>
        </dt>
        <dd>{props.meaning}</dd>
      </div>
    </dl>
  );
}
