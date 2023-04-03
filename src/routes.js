import Detalhes from "pages/Detalhes";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project1-Ziquinatti/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path=":id" element={<Detalhes />}></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
