// =========================================================
// LUCKY SCOOPS — Reglas de azar
// Funciones sin pantalla: las usan index.html y test_sorteo.js.
// =========================================================
(function (g) {
  const D = g.LS_DATA;
  const NIVELES = ['comun', 'epico', 'legendario'];
  const pick = (arr, r) => arr[Math.floor(r() * arr.length)];
  const shuffle = (a, r) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const idsDe = nivel => D.bolitas.filter(b => b.nivel === nivel).map(b => b.id);

  function nivelAlAzar(r) {
    let x = r() * NIVELES.reduce((s, n) => s + D.pesos[n], 0);
    for (const n of NIVELES) if ((x -= D.pesos[n]) < 0) return n;
    return NIVELES[NIVELES.length - 1];
  }

  // Primero el nivel (pesos fijos), luego el tema y luego el premio: así el % de cada nivel no depende de los temas.
  function figurita(temas, r = Math.random) {
    const nivel = nivelAlAzar(r);
    return asegurada(temas, nivel, r);
  }

  // Para los extras: el nivel ya está decidido
  function asegurada(temas, nivel, r = Math.random) {
    return { nivel, tema: pick(temas, r), id: pick(idsDe(nivel), r) };
  }

  // Contenido del plato (solo visual): cada nivel se reparte parejo entre los temas; el sobrante va a temas al azar.
  function plato(temas, r = Math.random) {
    const out = [];
    for (const nivel of NIVELES) {
      const total = D.plato[nivel], base = Math.floor(total / temas.length);
      const conExtra = shuffle([...temas], r).slice(0, total % temas.length);
      const ids = idsDe(nivel);
      for (const tema of temas) {
        const n = base + (conExtra.includes(tema) ? 1 : 0), orden = shuffle([...ids], r);
        for (let k = 0; k < n; k++) out.push({ nivel, tema, id: orden[k % orden.length] });
      }
    }
    return out;
  }

  // Cuántas figuritas saca una cucharada (4, 5, 6 o 7, misma probabilidad)
  function cantidad(r = Math.random) {
    const { min, max } = D.porCucharada;
    return min + Math.floor(r() * (max - min + 1));
  }

  g.LS_SORTEO = { figurita, asegurada, plato, cantidad };
})(globalThis);
