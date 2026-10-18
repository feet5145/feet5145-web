import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import AvisoEdad from "./components/layout/AvisoEdad"
import Inicio from "./components/sections/Inicio"
import Historias from "./components/sections/Historias"
import Personajes from "./components/sections/Personajes"
import Novedades from "./components/sections/Novedades"
import Enlaces from "./components/sections/Enlaces"

function App() {

  return (
    <>
      <AvisoEdad />

      <Header></Header>

      <main>
        <Inicio />

        <Historias />

        <Personajes />

        <Novedades />

        <Enlaces />
      </main>

      <Footer />
    </>
  )
}

export default App
