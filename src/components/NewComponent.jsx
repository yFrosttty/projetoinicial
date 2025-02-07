import "./NewComponent.css";

const NewComponent = () => {
  const isGerente = false; // variável que vai definir o estilo do h1

  return (
    <div>
      <h1
        style={
          isGerente // se isGerente for true, então o estilo é o primeiro, se não, é o segundo
            ? { color: "aquamarine", backgroundColor: "goldenrod" } // estilo do gerente
            : { color: "red", backgroundColor: "greenyellow" } // estilo do funcionário
        }
      >
        Aqui vai o estilo
      </h1>

      <p id="lebron-james">i never walk alone</p>
      <img
        id="sunshine"
        src="https://media.tenor.com/oyFfNb4Wj_cAAAAi/spongebob-dance-spongebob-joget.gif"
        alt="you are my sunshine"
      />
      <p
        style={{ color: "lightblue", fontSize: "20px", backgroundColor: "red" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        quaerat obcaecati explicabo ipsa ratione laudantium necessitatibus
        laboriosam illo voluptate, soluta inventore commodi accusantium
        molestias culpa reprehenderit id similique! Ut, voluptatum.
      </p>
    </div>
  );
};

export default NewComponent;
