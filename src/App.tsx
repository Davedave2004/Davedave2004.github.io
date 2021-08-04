import React, { useState, useRef } from 'react';
import './App.css';
import './components/CustomInput'
import { CustomInput } from './components/CustomInput';

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
      <h1>Hello World</h1>
      <section>
        <CustomInput regexType='number' />
        <br />
        <CustomInput regExp={/^\d{0,11}$/} />
        <br />
        <br />
        <br />
        <h1>Set your custom regex here:</h1><input onChange={handleChange} />
        <CustomInput regExp={customRegex} />
        <h2 ref={refContainer}></h2>
      </section>
    </div>
  );
}

export default App;
