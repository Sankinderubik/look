// Prueba de las reglas de azar. Ejecutar: node test_sorteo.js
globalThis.window = globalThis;
require('./data.js');
require('./sorteo.js');
const assert = require('assert');
const { figurita, plato, cantidad } = window.LS_SORTEO;
const todos = Object.keys(window.LS_DATA.temas);

function simular(temas, cucharadas = 100000) {
  const c = { comun: 0, epico: 0, legendario: 0 }, porTema = {}, porCantidad = {};
  let alMenos1E = 0, alMenos1L = 0, n = 0;
  for (let i = 0; i < cucharadas; i++) {
    const k = cantidad();
    porCantidad[k] = (porCantidad[k] || 0) + 1;
    const s = Array.from({ length: k }, () => figurita(temas));
    n += k;
    s.forEach(f => { c[f.nivel]++; porTema[f.tema] = (porTema[f.tema] || 0) + 1; });
    if (s.some(f => f.nivel === 'epico')) alMenos1E++;
    if (s.some(f => f.nivel === 'legendario')) alMenos1L++;
  }
  const p = x => x / n * 100;
  return { comun: p(c.comun), epico: p(c.epico), legendario: p(c.legendario), promedio: n / cucharadas,
    alMenos1E: alMenos1E / cucharadas * 100, alMenos1L: alMenos1L / cucharadas * 100, porTema, porCantidad, n, cucharadas };
}

// valores esperados con 4–7 figuritas parejas: promedio de 1 - (1-p)^k
const ks = [4, 5, 6, 7], prom = f => ks.reduce((s, k) => s + f(k), 0) / ks.length * 100;
const esperado1E = prom(k => 1 - 0.75 ** k), esperado1L = prom(k => 1 - 0.95 ** k);

const cerca = (v, esp, tol, msg) => assert(Math.abs(v - esp) < tol, `${msg}: ${v.toFixed(2)} (esperado ${esp.toFixed(2)})`);
for (const temas of [['hotwheels'], ['avengers', 'hellokitty', 'capibara'], todos]) {
  const r = simular(temas);
  console.log(`${temas.length} tema(s): común ${r.comun.toFixed(2)}%  épica ${r.epico.toFixed(2)}%  legendaria ${r.legendario.toFixed(2)}%  promedio ${r.promedio.toFixed(2)} figuritas  ≥1 épica ${r.alMenos1E.toFixed(1)}%  ≥1 legendaria ${r.alMenos1L.toFixed(1)}%`);
  cerca(r.comun, 70, 0.5, 'común'); cerca(r.epico, 25, 0.5, 'épica'); cerca(r.legendario, 5, 0.2, 'legendaria');
  cerca(r.alMenos1E, esperado1E, 0.6, '≥1 épica'); cerca(r.alMenos1L, esperado1L, 0.6, '≥1 legendaria');
  cerca(r.promedio, 5.5, 0.03, 'promedio por cucharada');
  assert.deepStrictEqual(Object.keys(r.porCantidad).map(Number).sort(), ks, 'solo salen 4 a 7');
  for (const k of ks) cerca(r.porCantidad[k] / r.cucharadas * 100, 25, 0.6, `cucharadas de ${k}`);
  assert.deepStrictEqual(Object.keys(r.porTema).sort(), [...temas].sort(), 'solo salen temas elegidos');
  for (const t of temas) cerca(r.porTema[t] / r.n * 100, 100 / temas.length, 0.6, `reparto del tema ${t}`);
}
console.log(`esperado: ≥1 épica ${esperado1E.toFixed(1)}%, ≥1 legendaria ${esperado1L.toFixed(1)}%`);

// Plato: 120 = 84/30/6 y reparto parejo (diferencia máxima de 1 entre temas)
for (let k = 1; k <= todos.length; k++) {
  const temas = todos.slice(0, k), p = plato(temas);
  assert.strictEqual(p.length, 120);
  for (const [nivel, total] of [['comun', 84], ['epico', 30], ['legendario', 6]]) {
    const deNivel = p.filter(f => f.nivel === nivel);
    assert.strictEqual(deNivel.length, total);
    const por = temas.map(t => deNivel.filter(f => f.tema === t).length);
    assert(Math.max(...por) - Math.min(...por) <= 1, `plato ${k} temas, ${nivel}: ${por}`);
  }
}
console.log('OK');
