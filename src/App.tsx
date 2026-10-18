import Header from "./components/layout/Header"
import Inicio from "./components/sections/Inicio"
import Historias from "./components/sections/Historias"

function App() {

  return (
    <>
      <Header></Header>

      <main>
        <Inicio />

        <Historias />

        <section id="personajes">
          {/* Tus personajes */}
        </section>

        <section id="novedades">
          {/* Tus novedades */}
        </section>

        <section id="enlaces">
          {/* Tus enlaces */}
        </section>
      </main>
    </>
  )
}

export default App
