import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return (
    <button onClick = {props.onClick} className="Button">
     {props.children} 
    </button>
  );
};

const Application = () => {

  // your code here
  const [name, setName] = useState('tiff');

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button onClick = {() => {reset()}}>Reset</Button>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
