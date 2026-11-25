// Tarjeta que se inclina en 3D siguiendo el mouse y brilla donde está el cursor.
// Solo pasa valores a variables CSS; el efecto visual vive en index.css,
// que lo desactiva en pantallas táctiles y para quien prefiere menos movimiento.
const INCLINACION_MAX = 8 // grados

export default function TarjetaInclinable({ className = '', children }) {
  function mover(e) {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width // 0 a 1
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--ry', `${(x - 0.5) * 2 * INCLINACION_MAX}deg`)
    el.style.setProperty('--rx', `${(0.5 - y) * 2 * INCLINACION_MAX}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }

  function salir(e) {
    const el = e.currentTarget
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <article className={`inclinable ${className}`} onMouseMove={mover} onMouseLeave={salir}>
      {children}
    </article>
  )
}
