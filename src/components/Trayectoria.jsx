import { trayectoria, habilidades } from '../data/portafolio.js'
import SeccionTitulo from './SeccionTitulo.jsx'

export default function Trayectoria() {
  return (
    <section id="trayectoria" className="seccion">
      <div className="contenedor pila">
        <SeccionTitulo numero="03" etiqueta="TRAYECTORIA" titulo="Mapa de niveles" />
        <ol className="niveles">
          {trayectoria.map((t) => (
            <li key={t.titulo} className={`nivel ${t.enCurso ? 'en-curso' : ''}`}>
              <p className="tarjeta-etiqueta">
                {t.nivel.toUpperCase()}
                {t.enCurso ? ' · EN CURSO' : t.fechas ? ` · ${t.fechas}` : ''}
              </p>
              <p className="tarjeta-titulo">{t.titulo}</p>
              <p className="texto-sec">{t.lugar}</p>
              {t.enCurso && t.fechas && <p className="mono texto-sec">{t.fechas}</p>}
            </li>
          ))}
        </ol>

        <div className="pila-pequena">
          <p className="kicker">INVENTARIO DE HABILIDADES</p>
          <ul className="chips">
            {habilidades.tecnicas.map((h) => <li key={h} className="chip">{h}</li>)}
            {habilidades.complementarias.map((h) => (
              <li key={h} className="chip chip-especial">{h}</li>
            ))}
          </ul>        </div>
      </div>
    </section>
  )
}
