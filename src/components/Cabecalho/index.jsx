import styles from './Cabecalho.module.css';

export default function Cabecalho (){
    return (
        <header className={styles.cabecalho}>
            <a href='/'>
                <h1>
                    <img src='/assets/imagens/icones/origami-64px.png' alt='Logo da Galeria Web'/>
                    Galeria de Projetos WEB
                </h1>
            </a>
        </header>
    );
}