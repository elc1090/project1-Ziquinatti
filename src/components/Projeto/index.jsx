import { Link } from 'react-router-dom';
import styles from './Projeto.module.css';

export default function Projeto({ id, cliente, projeto, developer }) {
    return (
        <div className={styles.card_projeto}>
            <Link className={styles.link} to={`/${id}`}>
                <div className={styles.cabecalho}>
                    <h3>{projeto}</h3>
                </div>
                <div className={styles.rodape}>
                    <h4>Desenvolvedor: {developer}</h4>
                    <h4>Cliente: {cliente}</h4>
                </div>
            </Link>
        </div>
    );
}