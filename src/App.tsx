import React, { useState, useRef } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { CustomInput } from './components/CustomInput';
import { ToDoList } from './components/ToDoList';

function App() {
  const [customRegex, setCustomRegex] = useState(/.?/);
  const refContainer = useRef<HTMLHeadingElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {value} = e.target;
    try {
        new RegExp(value);
        setCustomRegex(new RegExp(value));
        if (refContainer.current) refContainer.current.textContent = '';
    } catch(e) {
        if (refContainer.current) refContainer.current.textContent = `That's not a valid regex!` ;
    }
  }

  return (
    <div className="App">
      <div id="top"></div>
      <Header />
      <section>
        <h1>About this page</h1>
        <article>
          <p>This page is just me trying to make something out of React / TypeScript.</p>
          <p>Currently, I tried making different components like this header, a todo list, and some random elements like a regex-controlled input</p>
        </article>
      </section>
      <section id="components">
        <h1>Components</h1>
        <CustomInput regexType='number' />
        <CustomInput regExp={/^\d{0,11}$/} />
        <h1>Set your custom regex here:</h1><input onChange={handleChange} />
        <CustomInput regExp={customRegex} />
        <h2 ref={refContainer}>regex input status will appear here</h2>
      </section>
      <section id="todo" className="last-section">
        <h1>React To-Do List</h1>
        <ToDoList />
      </section>
      <footer>
        This is my footer
      </footer>
    </div>
  );
}

export default App;
