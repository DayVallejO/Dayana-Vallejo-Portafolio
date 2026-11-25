import { proyectos } from '../data/portafolio.js'
import SeccionTitulo from './SeccionTitulo.jsx'
import IconoProyecto from './IconoProyecto.jsx'
import TarjetaInclinable from './TarjetaInclinable.jsx'

export default function Proyectos() {
  return (
    <section id="proyectos" className="seccion seccion-alt">
      <div className="contenedor pila">
        <SeccionTitulo numero="02" etiqueta="PROYECTOS" titulo="Partidas guardadas" />
        <div className="proyectos-grid">
          {proyectos.map((p) => (
            <TarjetaInclinable key={p.nombre} className="proyecto">
              <div className="proyecto-portada" aria-hidden="true">
                <IconoProyecto tipo={p.tipo} />
              </div>
              <div className="proyecto-cuerpo">
                <p className="tarjeta-etiqueta">{p.origen.toUpperCase()}</p>
                <h3>{p.nombre}</h3>
                <p className="texto-sec">{p.descripcion}</p>
                <p className="mono acento-suave">{p.tecnologias.join(' · ')}</p>
                {(p.demo || p.codigo) && (
                  <div className="proyecto-enlaces">
                    {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Ver demo</a>}
                    {p.codigo && <a href={p.codigo} target="_blank" rel="noreferrer">Código</a>}
                  </div>
                )}
              </div>
            </TarjetaInclinable>
          ))}
        </div>
      </div>
    </section>
  )
}
