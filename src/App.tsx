import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import PaginaHistorias from "./pages/PaginaHistorias";
import PaginaPersonajes from "./pages/PaginaPersonajes";
import PaginaPersonaje from "./pages/PaginaPersonaje";
import PaginaNovedades from "./pages/PaginaNovedades";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<PaginaPrincipal />} />
                <Route path="historias" element={<PaginaHistorias />} />
                <Route path="personajes" element={<PaginaPersonajes />} />
                <Route path="personajes/:id" element={<PaginaPersonaje />} />
                <Route path="novedades" element={<PaginaNovedades />} />
                <Route path="*" element={<PaginaNoEncontrada />} />
            </Route>
        </Routes>
    );
}

export default App;
