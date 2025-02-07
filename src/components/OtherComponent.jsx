import styles from "./OtherComponent.module.css"; // importando o módulo de estilos

const OtherComponent = () => {
  return (
    <div>
    <h2 className={styles.titulo}>I am the best</h2> {/* aplicando a classe "titulo" */}
    </div>
  )
}

export default OtherComponent
