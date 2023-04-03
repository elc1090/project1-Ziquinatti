import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';

export default function Cabecalho (){
    return (
        <header className={styles.cabecalho}>
            <Link className={styles.link} to="./">
                <h1>
                    <img src={process.env.PUBLIC_URL+"/assets/imagens/icones/origami-64px.png"} alt='Logo da Galeria Web'/>
                    Galeria de Projetos WEB
                </h1>
            </Link>
        </header>
    );
}