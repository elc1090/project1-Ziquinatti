import styles from './Projeto.module.css';

export default function Projeto({ cliente, projeto, developer, hospedagem, repositorio, tecnologias }) {
    return (
        <div className={styles.card_projeto}>
            <h3>{projeto}</h3>
            <p>Desenvolvedor: {developer}</p>
            <p>Cliente: {cliente}</p>
            <p>Tecnologias: {tecnologias}</p>
            <p>Repositorio: {repositorio}</p>
            <p>Hospedagem: {hospedagem}</p>
        </div>
    );
}