import { useState } from "react";
const TestUseState = () => {
  let numero = 10;
  console.log(numero);

  const [number, setNumber] = useState(7);

  return (
    //Mostrando como o useState funciona usando dois casos, um com e um sem
    <div>
      <h2>Teste de troca de numero sem useState</h2>
      <h3>Valor atual {numero}</h3>
      <button style={{ backgroundColor: "pink" }} onClick={() => (numero = 20)}>
        Trocar
      </button>
      {/* Botão para trocar o valor, porém por não usar o useState, ele não funciona, está estilizado na cor rosa */}
      <h2>Teste de troca de numero com useState</h2>{" "}
      {/*Mostrando como o useState funciona */}
      <h3>Valor atual {number}</h3> {/*Mostrando o valor atual */}
      <button
        style={{ backgroundColor: "gold", color: "black", marginRight: "10px" }}
        onClick={() => {
          setNumber(number - 10);
        }} //diminui 10 do valor atual
      >
        {" "}
        -10{" "}
      </button>{" "}
      {/* Botão para diminuir 10 do valor atual, utilizando o useState, estilizado na cor dourada */}
      <button
        style={{ backgroundColor: "gold", color: "black", marginRight: "10px" }}
        onClick={() => {
          setNumber(number - 1); //diminui 1 do valor atual
        }}
      >
        {" "}
        -{" "}
      </button>{" "}
      {/* Botão para diminuir 1 do valor atual, utilizando o useState, estilizado na cor dourada */}
      <button
        style={{ backgroundColor: "gold", color: "black", marginRight: "10px" }}
        onClick={() => {
          setNumber(number + 1); //aumentando 1 do valor atual
        }}
      >
        {" "}
        +{" "}
      </button>{" "}
      {/* Botão para aumentar 1 do valor atual, utilizando o useState, estilizado na cor dourada */}
      <button
        style={{ backgroundColor: "gold", color: "black", marginRight: "5px" }}
        onClick={() => {
          setNumber(7); //resetando o valor para 7
        }}
      >
        {" "}
        reset{" "}
      </button>{" "}
      {/* Botão para resetar o valor para 7, utilizando o useState, estilizado na cor dourada */}
    </div>
  );
};

export default TestUseState;
