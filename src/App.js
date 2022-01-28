import React, { useState } from 'react';
// import '../public/style.css';
import '../public/todo.css';

// import '../public/form.css';
// import '../public/emoji.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
// import Emoji from './components/Emoji';
import Task from './Task';
import Form from './components/Form';
// import Event from './components/Event';
import Todo from './components/Todo';

// function createNotes(items) {
//   return <Note key={items.id} title={items.title} content={items.content} />;
// }

const isRegistered = false;
function App() {
  const date = new Date().toLocaleTimeString();
  const [time, setTime] = useState(date);

  setInterval(handleEvent, 1000);

  function handleEvent() {
    const newDate = new Date().toLocaleTimeString();
    setTime(newDate);
  }

  return (
    <div>
      {/* <Header />
      <div className="main">{Task.map(createNotes)};</div>
      <Footer /> */}
      {/* <Note/> */}

      {/* <Form 
        registered = {isRegistered}
      /> */}
      {/* 
      <h1>{time}</h1>
      <button onClick={handleEvent}>GET TIME</button> */}
      {/* <Event /> */}
      <Todo />
    </div>
  );
}

export default App;
