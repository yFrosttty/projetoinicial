const ShowEvents = () => {
  const teste = (e) => {
    console.log("Função externa ativada");
  };
  return (
    <div>
      <button onClick={teste}>Ativa função externa</button>
      <button onClick={() => console.log("Função interna ativada")} id="_1">Ativa a função interna</button>
    </div>
  );
};

export default ShowEvents;
