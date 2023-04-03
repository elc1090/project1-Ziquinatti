import styles from './NaoEncontrada.module.css';

export default function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <div>
                <h2>Ops!</h2>
                <p>O conteúdo que você está procurando não foi encontrado.</p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL+"/assets/imagens/erro_404.jpg"} alt='Erro 404'/>
            </div>
        </section>
    )
}