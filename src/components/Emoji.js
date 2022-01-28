import React from 'react';
import Entry from './Entry';
import Emojipedia from '../Emojipedia';

// function createEntry(emojiItem) {
//   return (
//     <Entry
//       key={emojiItem.id}
//       emoji={emojiItem.emoji}
//       name={emojiItem.name}
//       meaning={emojiItem.meaning}
//     />
//   );
// }

function newArray(items){
  let mean = items.meaning;
  let val = mean.substring(0,100);
  console.log(val);
  return val
}

export default function Emoji() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="container">
        {/* {Emojipedia.map(createEntry)} */}
        {Emojipedia.map(newArray)}
      </div>
    </>
  );
}
