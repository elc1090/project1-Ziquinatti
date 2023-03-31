import styles from './Projeto.module.css';

export default function Projeto() {
    return (
        <div className={styles.card_projeto}>
            <a className={styles.link}>
                <iframe className={styles.preview}></iframe>
                <p>Projeto X</p>
            </a>
        </div>
    );
}