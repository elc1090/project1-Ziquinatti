import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";
import styles from './Inicio.module.css';
import Projeto from "components/Projeto";

export default function Inicio() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resposta = await fetch('https://my-json-server.typicode.com/Ziquinatti/galeria-web-api/data');
      // const resposta = await fetch('./data.json')
      const dados = await resposta.json();
      // console.log(dados)
      return dados;
    }

    fetchData().then(dados => {
      setProjetos(dados);
    })

  }, [])

  return (
    <>
      <Banner />
      <Titulo>
        <h1>Projetos Desenvolvidos</h1>
      </Titulo>
      <section className={styles.galeria_proj}>
        {
          projetos.map((projeto) => {
            return <Projeto {...projeto} key={projeto.id}/>;
          })
        }
      </section>
    </>
  );
}