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
  const [name, setName] = useState('');

  const reset = () => {
    console.log("reset");
    // your code here
    setName('');
  };

  return (
    <main>
      <input 
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />
      <Button onClick = {() => {reset()}}>Reset</Button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
