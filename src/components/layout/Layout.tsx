import { Outlet } from "react-router";
import AvisoEdad from "./AvisoEdad";
import Footer from "./Footer";
import GestorDesplazamiento from "./GestorDesplazamiento";
import Header from "./Header";

// Estructura común a todas las páginas: aviso de edad, cabecera, contenido y pie.
function Layout() {
    return (
        <>
            <GestorDesplazamiento />
            <AvisoEdad />

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default Layout;
