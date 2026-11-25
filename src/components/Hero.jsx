import { perfil } from '../data/portafolio.js'

// Los archivos de /public se sirven desde la raíz del sitio (respeta el base de Vite)
const foto = `${import.meta.env.BASE_URL}dayana.png`

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="contenedor hero-grid">
        <div className="hero-contenido">
          <p className="kicker">&gt; PLAYER 1 READY<span className="cursor">_</span></p>
          <h1 className="hero-nombre">{perfil.nombre.toUpperCase()}</h1>
          <p className="hero-rol">{perfil.rol}</p>
          <p className="hero-intro">{perfil.intro}</p>
          <ul className="hero-herramientas" aria-label="Herramientas que uso">
            {perfil.herramientas.map((h) => <li key={h}>{h}</li>)}
          </ul>
          <div className="botones">
            <a href="#proyectos" className="boton boton-primario">Ver proyectos</a>
            <a href="#contacto" className="boton boton-secundario">Hablemos</a>
          </div>
        </div>
        <div className="hero-foto-wrap">
          <div className="sol" aria-hidden="true" />
          <img className="hero-foto" src={foto} alt="Foto de Dayana Vallejo" width="400" height="400" />
        </div>
      </div>
      <div className="grid-wrap" aria-hidden="true">
        <div className="retro-grid" />
      </div>
    </section>
  )
}
