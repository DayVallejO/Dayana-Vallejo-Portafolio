// Todo el contenido del portafolio vive aquí.
// Para actualizar textos, enlaces o proyectos, edita este archivo: los componentes no cambian.

const GITHUB = 'https://github.com/DayVallejO'

export const perfil = {
  nombre: 'Dayana Vallejo',
  rol: 'Desarrolladora Java Full Stack',
  intro:
    'Soy Ingeniera Industrial y estoy construyendo mi camino en el desarrollo de software. Actualmente me formo como Desarrolladora Java Full Stack en Generation Colombia.',
  // Herramientas que aparecen en la portada (las que más uso en mis repos)
  herramientas: ['Java', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Jest', 'Git'],
  ubicacion: 'Bogotá, Colombia',
  correo: 'vallejo9605@gmail.com',
  // Número en formato internacional, sin "+" ni espacios (para el enlace de WhatsApp)
  whatsapp: '573194606022',
  linkedin: 'https://www.linkedin.com/in/dayana-marcela-vallejo-ortega-79ba24189',
  github: GITHUB,
}

export const sobreMi = {
  parrafos: [
    'Soy Ingeniera Industrial y estudiante de Análisis y Desarrollo de Software. Me apasiona la tecnología, aprender cosas nuevas y transformar ideas en soluciones. Me interesa el desarrollo Full Stack y estoy en constante aprendizaje, fortaleciendo mis habilidades y construyendo mi camino en el mundo del software.',
    'Este portafolio es una muestra de mi proceso de aprendizaje, los proyectos en los que he trabajado y todo lo que estoy construyendo en este camino.',
  ],
  tarjetas: [
    {
      etiqueta: 'Clase principal',
      titulo: 'Java Full Stack',
      texto: 'Java y POO en el backend; HTML, CSS, JavaScript y Bootstrap en el frontend',
    },
    {
      etiqueta: 'Habilidad especial',
      titulo: 'Pruebas y calidad',
      texto: 'Pruebas unitarias y TDD con Jest, Mocha y Chai',
    },
    {
      etiqueta: 'Nivel actual',
      titulo: 'Bootcamp Generation',
      texto: 'Java Full Stack · Ago – Dic 2026',
    },
  ],
}

// demo y codigo son opcionales: si están vacíos, el botón no se muestra.
export const proyectos = [
  {
    nombre: 'Planificador de Tareas',
    tipo: 'web',
    origen: 'Generation · Desafío SAC',
    descripcion:
      'App web para crear, asignar, editar y filtrar tareas por estado, con métricas de avance. Las tareas se guardan en localStorage.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5', 'Mocha', 'Chai'],
    demo: 'https://dayvallejo.github.io/Planner-Dayana-Vallejo/',
    codigo: `${GITHUB}/Planner-Dayana-Vallejo`,
  },
  {
    nombre: 'kit-box',
    tipo: 'tienda',
    origen: 'Generation · Grupo 5',
    descripcion:
      'E-commerce de kits temáticos que reúne en un solo lugar todo lo necesario para empezar un hobby o proyecto. Proyecto final de Generation: trabajé en frontend y backend, y diseñé la página de registro con validación del formulario.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5', 'localStorage', 'Figma'],
    colaboradores: 'Cristhian Beltrán, Diana Ocampo, Cristian Rojas y Juliana Bernal',
    demo: 'https://kit-box-team.github.io/kit-box/',
    codigo: 'https://github.com/kit-box-team/kit-box',
  },
  {
    nombre: 'TrendyShop',
    tipo: 'tienda',
    origen: 'Generation · Hackathon 1',
    descripcion:
      'Tienda en línea construida en equipo durante el primer hackathon de Generation Colombia. Me encargué de la sección "Quiénes somos".',
    colaboradores: 'Narciris, Brandon, Diego y Yesid',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demo: '',
    codigo: '',
  },
  {
    nombre: 'Los Sims 4 – Expansion Store',
    tipo: 'tienda',
    origen: 'Proyecto en equipo',
    descripcion:
      'Tienda web de paquetes de expansión de Los Sims 4, hecha en equipo. Tiene registro e inicio de sesión, carrito, perfil de usuario, panel de administrador, modo claro/oscuro y versión en español e inglés.',
    tecnologias: ['React', 'Vite', 'CSS', 'API REST'],
    demo: 'https://nodo404.vercel.app/',
    codigo: '',
  },
  {
    nombre: 'InvenPro',
    tipo: 'inventario',
    origen: 'Proyecto real',
    descripcion:
      'Plataforma de inventario para una harinera: módulos de inventario, alertas de stock, usuarios y reportes.',
    tecnologias: ['PHP', 'PostgreSQL'],
    demo: '',
    codigo: '',
  },
  {
    nombre: 'Agenda de Contactos',
    tipo: 'consola',
    origen: 'Generation · Java',
    descripcion:
      'Agenda en consola que usa el Java Collections Framework: TreeMap, TreeSet y ArrayList para buscar, agrupar y ordenar contactos.',
    tecnologias: ['Java', 'Collections'],
    demo: '',
    codigo: `${GITHUB}/Agenda-Dayana-Vallejo`,
  },
  {
    nombre: 'Cafetería: interfaces e inyección',
    tipo: 'consola',
    origen: 'Generation · Java',
    descripcion:
      'Refactor de un sistema de cafetería para que el preparador de bebidas funcione con cualquier equipo que cumpla una interfaz, usando inyección de dependencias.',
    tecnologias: ['Java', 'POO', 'Interfaces'],
    demo: '',
    codigo: `${GITHUB}/TallerI.Dayana-Vallejo`,
  },
  {
    nombre: 'Pruebas unitarias con Jest',
    tipo: 'pruebas',
    origen: 'Generation · Testing',
    descripcion:
      'Laboratorio de pruebas unitarias y TDD: escribir pruebas, encontrar fallas y corregir funciones existentes.',
    tecnologias: ['JavaScript', 'Jest', 'TDD'],
    demo: '',
    codigo: `${GITHUB}/Testing-Dayana-Vallejo`,
  },
  {
    nombre: 'Este portafolio',
    tipo: 'codigo',
    origen: 'Proyecto personal',
    descripcion: 'Mi portafolio, con componentes reutilizables y el contenido separado en un solo archivo de datos.',
    tecnologias: ['React', 'Vite', 'CSS'],
    demo: '',
    codigo: `${GITHUB}/Dayana-Vallejo-Portafolio`,
  },
]

export const trayectoria = [
  {
    nivel: 'Nivel 1',
    fechas: '2016 – 2021',
    titulo: 'Ingeniería Industrial',
    lugar: 'Universidad Cooperativa de Colombia · Pasto',
  },
  {
    nivel: 'Nivel 2',
    fechas: '2023 – Actualidad',
    titulo: 'Tecnólogo en Análisis y Desarrollo de Software',
    lugar: 'SENA · Bogotá',
  },
  {
    nivel: 'Nivel 3',
    fechas: 'Ago – Dic 2026',
    titulo: 'Bootcamp Java Full Stack',
    lugar: 'Generation Colombia · Bogotá',
    enCurso: true,
  },
]

export const habilidades = {
  tecnicas: [
    'Java',
    'Spring Boot',
    'JavaScript',
    'HTML',
    'CSS',
    'Bootstrap 5',
    'React',
    'Vite',
    'Jest',
    'Mocha y Chai',
    'PHP',
    'MySQL',
    'PostgreSQL',
    'Git y GitHub',
  ],
  complementarias: [
    'Programación orientada a objetos',
    'Pruebas unitarias y TDD',
    'Manipulación del DOM',
    'Scrum',
    'Trabajo en equipo',
  ],
}
