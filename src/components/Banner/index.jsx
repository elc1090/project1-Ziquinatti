import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <h1>Projetos desenvolvidos na disciplina de Desenvolvimento de Software para Web</h1>
            <img src={process.env.PUBLIC_URL+"/assets/imagens/banner/banner2.png"} alt='Destaque'/>
        </div>
    )
}