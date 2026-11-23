// =========================================================
// LUCKY SCOOPS — Registro de modelos
// ---------------------------------------------------------
// El juego funciona abriendo index.html con doble clic
// o con un servidor local (Live Server).
// =========================================================
window.LS_MODELOS = {

  // Carpeta de las figuritas (.glb)
  carpeta: 'figuritas_lucky_scoops/',
  // Copias de los mismos modelos en .js, para que funcione abriendo index.html con doble clic.
  // Si agregas un .glb nuevo, hay que generar también su copia .js (ver README.md).
  carpetaJs: 'figuritas_js/',

  // Tamaño en el plato (dimensión mayor, en metros). Las legendarias van al doble.
  tamano: { normal: 0.02, legendaria: 0.04 },

  // Modelos genéricos: se pintan con los colores del tema
  genericos: [
    'stickers', 'pulsera', 'llavero', 'lapiz', 'pluma', 'borrador', 'libreta', 'mono_cabello',
    'scrunchie', 'notas_adhesivas', 'diadema_orejas', 'pin', 'monedero', 'estuche', 'termo',
    'taza', 'mochila', 'cobija', 'calcetines', 'pantuflas', 'guante_box',
  ],

  // Piezas que vienen dentro de otro archivo: nombre -> [archivo, nodo dentro del archivo]
  partes: {
    lapiz:    ['lapiz_pluma_borrador', 'pencil'],
    pluma:    ['lapiz_pluma_borrador', 'pencil.001'],
    borrador: ['lapiz_pluma_borrador', 'lastik'],
  },

  // Qué figurita carga cada ID en cada tema.
  // Valor: 'archivo' o { archivo: 'x', colores: [...] } para pintarlo distinto.
  // 'esfera' = esfera de gel creada en el juego (no tiene archivo).
  temas: {
    hotwheels: {
      colores: ['#ff7a1a', '#1f6fe0'],                       // naranja y azul
      figuras: { C1: 'carrito', C2: 'stickers', C3: 'llavero', C4: 'lapiz', C5: 'borrador', C6: 'pulsera', C7: 'libreta',
                 E1: 'carro_caricatura', E2: 'pieza_pista', E3: 'camion', L1: 'pista_loop', L2: 'carro_control_remoto' },
    },
    avengers: {
      colores: ['#e23636', '#2b4fb8'],                       // rojo y azul
      figuras: { C1: 'stickers', C2: 'escudo_capitan', C3: 'pulsera', C4: 'lapiz', C5: 'borrador', C6: 'libreta', C7: 'hulk',
                 E1: 'spiderman', E2: { archivo: 'guante_box', colores: ['#4caf3a', '#2e7d1f'] }, E3: 'ironman_casco',
                 L1: 'martillo_thor', L2: 'escudo_capitan' },
    },
    brainrots: {
      colores: ['#8a5a3b', '#7cc8f2'],                       // café y azul cielo
      figuras: { C1: 'stickers', C2: 'llavero', C3: 'tralalero', C4: 'pulsera', C5: 'chimpanzini', C6: 'bombardiro', C7: 'patapim',
                 E1: 'tralalero', E2: 'tung_tung_sahur', E3: 'ballerina_cappuccina', L1: 'tung_tung_sahur', L2: 'tralalero' },
    },
    hellokitty: {
      colores: ['#e8344a', '#ff9ec7'],                       // rojo y rosa
      figuras: { C1: 'stickers', C2: 'mono_cabello', C3: 'pulsera', C4: 'llavero', C5: 'pluma', C6: 'scrunchie', C7: 'libreta',
                 E1: 'hello_kitty', E2: 'monedero', E3: 'termo', L1: 'hello_kitty', L2: 'mochila' },
    },
    pompompurin: {
      colores: ['#ffd84d', '#8b5a2b'],                       // amarillo y café
      figuras: { C1: 'stickers', C2: 'pulsera', C3: 'llavero', C4: 'mono_cabello', C5: 'borrador', C6: 'pluma', C7: 'notas_adhesivas',
                 E1: 'pompompurin', E2: 'estuche', E3: 'taza', L1: 'pompompurin', L2: 'cobija' },
    },
    keroppi: {
      colores: ['#4cbf5a', '#ffffff'],                       // verde y blanco
      figuras: { C1: 'stickers', C2: 'pulsera', C3: 'llavero', C4: 'mono_cabello', C5: 'lapiz', C6: 'borrador', C7: 'libreta',
                 E1: 'keroppi', E2: 'monedero', E3: 'termo', L1: 'keroppi', L2: 'mochila' },
    },
    kuromi: {
      colores: ['#2a2230', '#9b5de5'],                       // negro y morado
      figuras: { C1: 'stickers', C2: 'pulsera', C3: 'llavero', C4: 'diadema_orejas', C5: 'pluma', C6: 'scrunchie', C7: 'libreta',
                 E1: 'kuromi', E2: 'estuche', E3: 'lampara_gato', L1: 'kuromi', L2: 'mochila' },
    },
    capibara: {
      colores: ['#c49a6c', '#ff9a3c'],                       // café claro y naranja
      figuras: { C1: 'stickers', C2: 'pulsera', C3: 'llavero', C4: 'mono_cabello', C5: 'borrador', C6: 'lapiz', C7: 'calcetines',
                 E1: 'capibara', E2: 'taza', E3: 'pantuflas', L1: 'capibara', L2: 'mochila' },
    },
    squishy: {
      colores: ['#ffb3d1', '#a8ecd0', '#fff1d6'],            // pastel: rosa, menta y crema
      figuras: { C1: 'fresa', C2: 'pan', C3: 'gato', C4: 'dona', C5: 'dumplings', C6: 'nube', C7: 'esfera',
                 E1: 'pastel', E2: 'canasta_dimsum', E3: 'set_postres', L1: 'pan', L2: 'gato' },
    },
  },

  // Regalos (extras). null = figura provisional.
  regalos: { R1: 'stickers', R2: null, R3: null, R4: 'pin', R5: null },

  // Ajustes opcionales por archivo: { rotacion: [x, y, z] en grados }
  ajustes: {},

  // Objetos del escenario: nombre del .glb en carpetaEscenario (null = figura provisional).
  // La cuchara y el cuenco tienen licencia MakerWorld (uso personal): su carpeta no se sube a git.
  // Si faltan, el juego usa las figuras provisionales.
  carpetaEscenario: 'modelos_cuchara_y_cuencos/',
  carpetaEscenarioJs: 'modelos_cuchara_y_cuencos/js/',
  escenario: {
    habitacion: null, mesa: null, aro_luz: null,
    plato: 'cuenco_facetform_bajo', cuchara: 'cuchara_corazon', charola: null, caja: null,
  },
};
