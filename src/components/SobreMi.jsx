import { sobreMi } from '../data/portafolio.js'
import SeccionTitulo from './SeccionTitulo.jsx'

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="seccion seccion-alt">
      <div className="contenedor dos-columnas">
        <div className="columna">
          <SeccionTitulo numero="01" etiqueta="SOBRE MÍ" titulo="Nuevo nivel desbloqueado" />
          {sobreMi.parrafos.map((p) => (
            <p key={p} className="texto">{p}</p>
          ))}
        </div>
        <div className="columna tarjetas">
          {sobreMi.tarjetas.map((t) => (
            <div key={t.titulo} className="tarjeta">
              <p className="tarjeta-etiqueta">{t.etiqueta.toUpperCase()}</p>
              <p className="tarjeta-titulo">{t.titulo}</p>
              <p className="texto-sec">{t.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
