import React, { useState } from 'react';
import { Header } from './components/Header';
import {SideNav} from './components/SideNav';
import { CustomInput } from './components/CustomInput';
import { ReactCard } from './components/ReactCard';
import { ToDoList } from './components/ToDoList';
import './App.scss';
import rem from './img/rem.png';
import ghvs from './img/ghvs.png';

function App() {
  const [customRegex, setCustomRegex] = useState(/.?/);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {value} = e.target;
    try {
        new RegExp(value);
        setCustomRegex(new RegExp(value));
    } catch(e) {
        // TODO: Signal not valid regex
    }
  }

  function computeTotalPrice(e: React.ChangeEvent<HTMLInputElement>) {
    const priceEl = document.getElementById('price') as HTMLInputElement;
    const weightEl = document.getElementById('weight') as HTMLInputElement;
    const totalEl = document.getElementById('total_price');

    const price = parseInt(priceEl.value);
    const weight = parseInt(weightEl.value);

    if (price && weight) {
      let priceInPHP = price / 2;
      let shippingFee = weight * 1.2;
      let tax = (priceInPHP + shippingFee) * 0.18;

      if (totalEl) {
        totalEl.textContent = (priceInPHP + shippingFee + tax).toString();
      }
    }
  }

  return (
    <div className="App">
      <div id="top" style={{paddingTop: '10vh'}}></div>
      <Header />
      <SideNav />
      <section className="main-section">
        <h1>About this page</h1>
        <article>
          <p>This page is just me trying to make something out of React / TypeScript.</p>
          <p>Currently, I tried making different components like this header, a todo list, and some random elements like a regex-controlled input</p>
        </article>
      </section>
      <section>
        <h1>MochaBricks Pasabuy Price Calculator</h1>
        <p>
          Current calculation is done by: <br />
          Price is converted to peso (price in yen / 2) <br />
          Shipping Fee is weight multiplied by 1.2 <br />
          Tax is equal to price (in peso) plus shipping fee multiplied by 0.18 <br />
          Total Price = (Price/2) + (Weight*1.2) + ((Price/2) + (Weight*1.2) * 0.18)
        </p>
        <div>
          <label htmlFor="price">Price (in Yen): </label><input onChange={computeTotalPrice} type="number" id="price" placeholder="price in Yen" /><br/>
          <label htmlFor="weight">Price (in grams): </label><input onChange={computeTotalPrice} type="number" id="weight" placeholder="weight in grams" /><br/>
        </div>
        <p>Total Price: <span id="total_price"></span></p>
      </section>
      <hr />
      <section className="main-section" id="components">
        <h1>Components</h1>
        <div>
          <h3>Custom Input</h3>
          <p>These inputs are controlled via regex (regular expressions) and will only allow values that will pass the given expression</p>
          <hr />
          <p>
            Passed a prop of regexType 'number'
            <CustomInput regexType='number' placeholder="numbers only"/>
          </p>
          <p>
            Passed a prop of  regExp <code>{'/^\\d{0,11}$/'}</code>
            <CustomInput regExp={/^\d{0,11}$/} placeholder="only passing values here"/>
          </p>
          <div>
            <h4>You can try it using your custom regex here:</h4>
            <input onChange={handleChange} placeholder="regex value" />
          </div>
          <CustomInput regExp={customRegex} placeholder="only passing values here" />
        </div>
      </section>
      <section className="main-section" id="card">
      <h1>ID Card</h1>
        <div>
          <p>Like an ID but using react</p>
          <ReactCard logoSrc={ghvs} idSrc={rem} name='Rem' title="Github Vocational School" />
        </div>
        <div className="id-maker">
          <p>Try making your own ID here!</p>
          <form>
            <label htmlFor="id-maker-title">Header: <input id="id-maker-title" type="text" placeholder="Github Vocational School"/></label>
            <label htmlFor="id-maker-logo">Logo: <input id="id-maker-logo" type="file"/></label>
            <label htmlFor="id-maker-name">Name: <input id="id-maker-name" type="text" placeholder="Rem"/></label>
            <label htmlFor="id-maker-picture">ID Picture: <input id="id-maker-picture" type="file"/></label>
            <button type="submit">Generate</button>
          </form>
          <hr />
        </div>
      </section>
      <section id="todo" className="main-section last-section">
        <h1>React To-Do List</h1>
        <ToDoList />
      </section>
    </div>
  );
}

export default App;
