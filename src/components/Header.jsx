import { useState } from 'react'

const enlaces = [
  { href: '#sobre-mi', texto: 'Sobre mí' },
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#trayectoria', texto: 'Trayectoria' },
  { href: '#contacto', texto: 'Contacto' },
]

export default function Header() {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className="header">
      <nav className="nav contenedor" aria-label="Principal">
        <a href="#inicio" className="logo" aria-label="Dayana Vallejo, ir al inicio">
          <span className="logo-usuario">DayVallejO</span>
          <span className="logo-arroba">@</span>
          <span className="logo-host">dev</span>
          <span className="logo-ruta">:~$</span>
          <span className="logo-cursor" aria-hidden="true">_</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={abierto}
          aria-controls="menu"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setAbierto(!abierto)}
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {abierto ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
        <ul id="menu" className={`nav-links ${abierto ? 'abierto' : ''}`}>
          {enlaces.map((e) => (
            <li key={e.href}>
              <a href={e.href} onClick={() => setAbierto(false)}>{e.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
