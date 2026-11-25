export default function SeccionTitulo({ numero, etiqueta, titulo }) {
  return (
    <div className="seccion-titulo">
      <p className="kicker">{numero} / {etiqueta}</p>
      <h2>{titulo}</h2>
    </div>
  )
}
