import Header from "./components/layout/Header"
import Inicio from "./components/sections/Inicio"
import Historias from "./components/sections/Historias"
import Personajes from "./components/sections/Personajes"
import Novedades from "./components/sections/Novedades"
import Enlaces from "./components/sections/Enlaces"

function App() {

  return (
    <>
      <Header></Header>

      <main>
        <Inicio />

        <Historias />

        <Personajes />

        <Novedades />

        <Enlaces />
      </main>
    </>
  )
}

export default App
