import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const elemento = (
  <div>
    <h1>Ola Galera DevPleno</h1>
  </div>
);

const segundoElemento = (
  <div>
    <h2>Teste de Elemento</h2>
  </div>
);

const MostraI = props => {
  return <p>{props.i}</p>;
};

function App(props) {
  const [i, setI] = useState(10);

  const increment = () => {
    setI(i + 1);
  };

  return (
    <div className="App">
      <h1>
        Hello CodeSandbox {props.name} {i}
      </h1>
      <button onClick={increment}>Incrementar</button>
      {elemento}
      {segundoElemento}
      <MostraI i={i} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Javascript" idade="35" />, rootElement);
