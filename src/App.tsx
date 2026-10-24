import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import PaginaHistorias from "./pages/PaginaHistorias";
import PaginaHistoria from "./pages/PaginaHistoria";
import PaginaPersonajes from "./pages/PaginaPersonajes";
import PaginaPersonaje from "./pages/PaginaPersonaje";
import PaginaNovedades from "./pages/PaginaNovedades";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import PaginaSantuario from "./pages/PaginaSantuario";

function App() {
    return (
        <Routes>
            {/* Página secreta, a pantalla completa: sin cabecera ni pie */}
            <Route path="santuario" element={<PaginaSantuario />} />
            <Route element={<Layout />}>
                <Route index element={<PaginaPrincipal />} />
                <Route path="historias" element={<PaginaHistorias />} />
                <Route path="historias/:id" element={<PaginaHistoria />} />
                <Route path="personajes" element={<PaginaPersonajes />} />
                <Route path="personajes/:id" element={<PaginaPersonaje />} />
                <Route path="novedades" element={<PaginaNovedades />} />
                <Route path="*" element={<PaginaNoEncontrada />} />
            </Route>
        </Routes>
    );
}

export default App;
