import { useState } from "react";

const UseList = () => {
  const [lista] = useState(["Cesar", "Hobbs", "Kalel"]);

  const [usuarios] = useState([
    { id: 1, nome: "Thales", login: "thales123" },
    { id: 2, nome: "Thiago", login: "thiago123" },
    { id: 3, nome: "Lucas", login: "lucas123" },
  ]);

  return (
    <div>
      <p>Nome: {lista[0]}</p> {/*Mostrando os nomes da lista*/}
      <p>Nome: {lista[1]}</p>
      <p>Nome: {lista[2]}</p>
      <ul>
        {lista.map((valorItem, numeroIndice) => (
          <li
            style={{
              backgroundColor: "pink",
              color: "Black",
              listStyle: "none",
            }}
            key={numeroIndice}
          >
            {valorItem}
          </li>
        ))}
      </ul>

      <h3>Lista de objetos</h3>
      <ul>
        {usuarios.map((user) => (
          <li style={{ listStyle: "none" }} key={user.id}>
            <p>
              Nome: {user.nome} Login: {user.login}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseList;
