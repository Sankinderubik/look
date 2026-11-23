// =========================================================
// LUCKY SCOOPS — Datos del juego (según la especificación)
// =========================================================
window.LS_DATA = {

  // Los 12 IDs de figurita de cada tema. Qué modelo 3D carga cada ID depende del tema (ver modelos.js).
  // "color" solo se usa si un modelo no carga (esfera de respaldo).
  bolitas: [
    { id: 'C1', nivel: 'comun',      color: '#ff9ec7' },
    { id: 'C2', nivel: 'comun',      color: '#ffe066' },
    { id: 'C3', nivel: 'comun',      color: '#9ef0c8' },
    { id: 'C4', nivel: 'comun',      color: '#8fd3ff' },
    { id: 'C5', nivel: 'comun',      color: '#c9a7ff' },
    { id: 'C6', nivel: 'comun',      color: '#ffffff' },
    { id: 'C7', nivel: 'comun',      color: '#ffad5c' },
    { id: 'E1', nivel: 'epico',      color: '#9b4dff' },
    { id: 'E2', nivel: 'epico',      color: '#3b7bff' },
    { id: 'E3', nivel: 'epico',      color: '#ff4fa3' },
    { id: 'L1', nivel: 'legendario', color: '#ffc83d' },
    { id: 'L2', nivel: 'legendario', color: '#ff6b6b' },
  ],

  // Probabilidad de cada nivel por figurita (siempre igual, sin importar los temas elegidos)
  pesos: { comun: 70, epico: 25, legendario: 5 },

  // Figuritas en el plato por nivel (solo visual: el azar no depende de esto)
  plato: { comun: 84, epico: 30, legendario: 6 },

  niveles: {
    legendario: { nombre: 'Legendaria', orden: 0 },
    epico:      { nombre: 'Épica',      orden: 1 },
    comun:      { nombre: 'Común',      orden: 2 },
    regalo:     { nombre: 'Regalo',     orden: 3 },
  },

  categorias: [
    { id: 'ninos', nombre: 'Niños', icono: '🚗', temas: ['hotwheels', 'avengers', 'brainrots'] },
    { id: 'ninas', nombre: 'Niñas', icono: '🎀', temas: ['hellokitty', 'pompompurin', 'keroppi', 'kuromi'] },
    { id: 'mixto', nombre: 'Mixto', icono: '⭐', temas: ['capibara', 'squishy'] },
  ],

  // premios: en orden C1, C2, C3, C4, C5, C6, C7, E1, E2, E3, L1, L2
  temas: {
    hotwheels: { nombre: 'Hot Wheels', premios: [
      'Carrito Hot Wheels básico', 'Stickers de Hot Wheels', 'Llavero de carrito', 'Lápiz de Hot Wheels',
      'Borrador en forma de llanta', 'Pulsera de silicón de Hot Wheels', 'Libreta chica de Hot Wheels',
      'Paquete de 5 carritos', 'Lanzador de carritos', 'Camión transportador con 2 carritos',
      'Pista gigante con loop', 'Carro a control remoto de Hot Wheels' ] },
    avengers: { nombre: 'Avengers', premios: [
      'Stickers de Avengers', 'Llavero del escudo del Capitán América', 'Pulsera de silicón de Avengers',
      'Lápiz de Spider-Man', 'Borrador de Iron Man', 'Libreta chica de Avengers', 'Mini figura de Hulk',
      'Peluche mediano de Spider-Man', 'Guantes de Hulk', 'Máscara de Iron Man',
      'Martillo de Thor de juguete', 'Escudo del Capitán América tamaño real' ] },
    brainrots: { nombre: 'Brainrots', premios: [
      'Stickers de brainrots', 'Llavero de Tung Tung Tung Sahur', 'Llavero de Tralalero Tralala',
      'Pulsera de Ballerina Cappuccina', 'Mini figura de Chimpanzini Bananini', 'Pin de Bombardiro Crocodilo',
      'Lápiz de Brr Brr Patapim', 'Peluche mediano de Tralalero Tralala', 'Peluche mediano de Tung Tung Tung Sahur',
      'Set de 4 mini figuras de brainrots', 'Peluche gigante de Tung Tung Tung Sahur', 'Peluche gigante de Tralalero Tralala' ] },
    hellokitty: { nombre: 'Hello Kitty', premios: [
      'Stickers de Hello Kitty', 'Moño para el cabello de Hello Kitty', 'Pulsera de Hello Kitty',
      'Llavero de Hello Kitty', 'Pluma de gel de Hello Kitty', 'Scrunchie de Hello Kitty', 'Libreta chica de Hello Kitty',
      'Peluche mediano de Hello Kitty', 'Monedero de Hello Kitty', 'Termo de Hello Kitty',
      'Peluche gigante de Hello Kitty', 'Mochila de peluche de Hello Kitty' ] },
    pompompurin: { nombre: 'Pompompurin', premios: [
      'Stickers de Pompompurin', 'Pulsera de Pompompurin', 'Llavero de Pompompurin',
      'Pinza para el cabello de Pompompurin', 'Borrador de Pompompurin', 'Pluma de Pompompurin',
      'Notas adhesivas de Pompompurin', 'Peluche mediano de Pompompurin', 'Estuche de Pompompurin',
      'Taza de Pompompurin', 'Peluche gigante de Pompompurin', 'Cobija de Pompompurin' ] },
    keroppi: { nombre: 'Keroppi', premios: [
      'Stickers de Keroppi', 'Pulsera de Keroppi', 'Llavero de Keroppi', 'Pinza para el cabello de Keroppi',
      'Lápiz de Keroppi', 'Borrador de Keroppi', 'Libreta chica de Keroppi',
      'Peluche mediano de Keroppi', 'Monedero de Keroppi', 'Termo de Keroppi',
      'Peluche gigante de Keroppi', 'Mochila de Keroppi' ] },
    kuromi: { nombre: 'Kuromi', premios: [
      'Stickers de Kuromi', 'Pulsera de Kuromi', 'Llavero de Kuromi', 'Diadema de orejas de Kuromi',
      'Pluma de gel de Kuromi', 'Scrunchie de Kuromi', 'Libreta chica de Kuromi',
      'Peluche mediano de Kuromi', 'Cosmetiquera de Kuromi', 'Lámpara de noche de Kuromi',
      'Peluche gigante de Kuromi', 'Mochila de peluche de Kuromi' ] },
    capibara: { nombre: 'Capibara', premios: [
      'Stickers de capibara', 'Pulsera de capibara', 'Llavero de capibara', 'Pinza para el cabello de capibara',
      'Borrador de capibara', 'Lápiz de capibara', 'Calcetines de capibara',
      'Peluche mediano de capibara', 'Taza de capibara', 'Pantuflas de capibara',
      'Peluche gigante de capibara', 'Mochila de peluche de capibara' ] },
    squishy: { nombre: 'Squishy', premios: [
      'Squishy mini de fresa', 'Squishy mini de pan', 'Squishy mini de gato', 'Squishy mini de dona',
      'Llavero squishy de dumpling', 'Llavero squishy de nube', 'Pelota antiestrés de gel',
      'Squishy mediano de pastel', 'Squishy de dumpling en canasta de bambú', 'Set de 5 squishies mini',
      'Squishy gigante de pan', 'Squishy jumbo de gato' ] },
  },

  // Bolsa aparte: solo para los "+ regalo" de los paquetes. [tema] se reemplaza.
  regalos: [
    { id: 'R1', nombre: 'Planilla de stickers de [tema]' },
    { id: 'R2', nombre: 'Dulce sorpresa' },
    { id: 'R3', nombre: 'Tarjeta coleccionable de [tema]' },
    { id: 'R4', nombre: 'Pin de [tema]' },
    { id: 'R5', nombre: 'Separador de libros de [tema]' },
  ],

  paquetes: [
    { id: 'p1', nombre: '1 scoop',  precio: 100, cucharadas: 1, extras: ['regalo'] },
    { id: 'p2', nombre: '2 scoops', precio: 175, cucharadas: 2, extras: ['regalo', 'epico'] },
    { id: 'p3', nombre: '3 scoops', precio: 200, cucharadas: 3, extras: ['regalo', 'regalo', 'epico', 'legendario'] },
  ],

  // Figuritas por cucharada: al azar entre min y max, todas las cantidades con la misma probabilidad
  porCucharada: { min: 4, max: 7 },
};
