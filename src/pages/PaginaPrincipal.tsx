import Enlaces from "../components/sections/Enlaces";
import Historias from "../components/sections/Historias";
import Inicio from "../components/sections/Inicio";
import Novedades from "../components/sections/Novedades";
import Personajes from "../components/sections/Personajes";
import { useTituloPagina } from "../hooks/useTituloPagina";

function PaginaPrincipal() {
    useTituloPagina();

    return (
        <>
            <Inicio />
            <Historias />
            <Personajes />
            <Novedades />
            <Enlaces />
        </>
    );
}

export default PaginaPrincipal;
