import UseProps from "./UseProps";
import styles from "./AulaQuatro.module.css";
import { useState } from "react";

const AulaQuatro = () => {
  const imgPadrao =
    "https://addons.mozilla.org/user-media/userpics/08/8708/17968708/17968708.png?modified=1688711970";

  const [cards] = useState([
    {
      id: "1",
      imagem: "https://media.tenor.com/Bj7mc_5PflgAAAAM/horse-cavalo.gif",
      titulo: "cavalo imundo",
      descricao: "cavalo",
    },
    {
      id: "2",
      imagem:"https://www.diariodocentrodomundo.com.br/wp-content/uploads/2024/04/lilvinicin.jpg",
      titulo: "lil vinicin",
      descricao: "lil vinicin O GOAT"
    },
    {
      id: "3",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTBwfNwZ8IEa79OzgXK8y8477zstptyGNCA&s",
      titulo: "gabriel nargas",
      descricao:"pastor pode matar pitbull"
    },
    {
      id: "4",
      imagem:"https://i.ytimg.com/vi/ZcLffZVHha4/mqdefault.jpg",
      titulo:"core",
      descricao:"AAAAAAAA EU VOU MAMAAAAAAAR"
    },
  ]);
  return (
    <div>
      <h1>CARDS FODAS DO GATO MAKONHA</h1>
      <div className={styles.cardArea}>
      {cards.map((card) => (
        <UseProps
          key={card.id}
          imagem={card.imagem || imgPadrao}
          titulo={card.titulo || "Título"}
          descricao={card.descricao || "Descrição"}
        />
      ))}
      </div>
    </div>
  );
};

export default AulaQuatro;
