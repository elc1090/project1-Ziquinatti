import styles from "./Rodape.module.css";

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <img src={process.env.PUBLIC_URL+"/assets/imagens/icones/origami-64px.png"} alt='Logo da Galeria Web'/>
            <p>Desenvolvido por Lucas</p>
        </footer>
    )
}