import { perfil } from '../data/portafolio.js'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="contenedor hero-contenido">
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
      <div className="sol" aria-hidden="true" />
      <div className="grid-wrap" aria-hidden="true">
        <div className="retro-grid" />
      </div>
    </section>
  )
}
