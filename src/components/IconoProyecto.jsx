// Íconos de línea por tipo de proyecto. Se eligen con el campo `tipo` en portafolio.js.
const trazos = {
  // Ventana de navegador: apps web
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      <path d="M7 13h6M7 16h10" />
    </>
  ),
  // Carrito: tiendas en línea
  tienda: (
    <>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2.5 3.5h2.5l2.6 11.5h11.2l2.2-8.5H6" />
    </>
  ),
  // Cajas apiladas: inventario
  inventario: (
    <>
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </>
  ),
  // Consola: programas Java
  consola: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 10l3 2.5L7 15M12.5 15H17" />
    </>
  ),
  // Escudo con check: pruebas
  pruebas: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  // Llaves de código: proyecto propio
  codigo: (
    <>
      <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M13.5 4l-3 16" />
    </>
  ),
}

export default function IconoProyecto({ tipo }) {
  return (
    <svg
      aria-hidden="true"
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {trazos[tipo] ?? trazos.codigo}
    </svg>
  )
}
