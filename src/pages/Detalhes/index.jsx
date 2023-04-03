import Titulo from "components/Titulo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detalhes.module.css";
import NaoEncontrada from "pages/NaoEncontrada";

export default function Detalhes() {
    const [projeto, setProjeto] = useState();
    const parametros = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const resposta = await fetch(`https://my-json-server.typicode.com/Ziquinatti/galeria-web-api/data?id=${parametros.id}`);
            const dados = await resposta.json();
            // console.log(dados);
            return dados[0];
        }

        fetchData().then(dados => {
            // console.log(dados);
            setProjeto(dados);
        })

    }, [parametros.id])

    if (!projeto) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Titulo>
                <h1>{projeto.projeto}</h1>
            </Titulo>
            <div className={styles.preview}>
                <iframe
                    scrolling="no"
                    src={projeto.hospedagem}
                    title="Teste"
                ></iframe>
            </div>
            <section className={styles.infos}>
                <div className={styles.card}>
                    <p>Cliente: {projeto.cliente}</p>
                    <p>Desenvolvedor: {projeto.developer}</p>
                    <p>Tecnologias: {projeto.tecnologias}</p>
                </div>
                <div className={styles.links}>
                    <Titulo>
                        <h4>Links</h4>
                    </Titulo>
                    <a
                        href={projeto.repositorio}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={process.env.PUBLIC_URL+"/assets/imagens/GitHub-Mark.png"} alt="Link para o projeto no GitHub" />
                        GitHub
                    </a>
                    <a
                        href={projeto.hospedagem}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={process.env.PUBLIC_URL+"/assets/imagens/PC-Mark.png"} alt="Link para o projeto no GitHub" />
                        &nbsp;&nbsp;Site
                    </a>
                </div>
            </section>
        </>
    );
}