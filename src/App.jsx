import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SobreMi from './components/SobreMi.jsx'
import Proyectos from './components/Proyectos.jsx'
import Trayectoria from './components/Trayectoria.jsx'
import Contacto from './components/Contacto.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <SobreMi />
        <Proyectos />
        <Trayectoria />
        <Contacto />
      </main>
    </>
  )
}
