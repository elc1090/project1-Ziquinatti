import Titulo from "./components/Titulo";
import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho";
import { useEffect, useState } from "react";
import Projeto from "./components/Projeto";

function App() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resposta = await fetch('https://api.apispreadsheets.com/data/S8CPSUUWyGAoLUIo/');
      const dados = await resposta.json();
      // console.log(dados);
      return dados.data;
    }

    fetchData().then(dados => {
      setProjetos(dados);
    })

  }, [])

  return (
    <>
      <Cabecalho />
      <Banner />
      <Titulo>
        <h1>Projetos Desenvolvidos</h1>
      </Titulo>
      <section>
        {
          projetos.map((projeto) => {
            return <Projeto {...projeto} key={projeto.id}/>;
          })
        }
      </section>
    </>
  );
}

export default App;
