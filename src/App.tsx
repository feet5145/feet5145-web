import Header from "./components/layout/Header"
import Inicio from "./components/sections/Inicio"

function App() {

  return (
    <>
      <Header></Header>

      <main>
        <Inicio />

        <section id="historias">
          {/* Tus historias */}
        </section>

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
