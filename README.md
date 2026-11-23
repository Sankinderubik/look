# Lucky Scoops

Juego 3D en el navegador: el jugador saca cucharadas de minifiguras de un plato y cada figurita se convierte en un premio según la tabla del tema elegido. Al final ve todos sus premios en una caja.

Hecho con [Three.js](https://threejs.org/) (se carga desde CDN, no hay que instalar nada).

## Cómo jugar

Abre `index.html` con doble clic en Chrome, Edge o Firefox. También funciona con un servidor local como Live Server de VS Code.

Se necesita internet la primera vez para cargar Three.js y la tipografía.

1. **Inicio:** botón Jugar (o Créditos).
2. **Elige tus temas:** uno o varios, de cualquier categoría (Niños: Hot Wheels, Avengers, Brainrots · Niñas: Hello Kitty, Pompompurin, Keroppi, Kuromi · Mixto: Capibara, Squishy). Botón **Todos** para elegirlos todos.
3. **Paquete:** 1, 2 o 3 scoops.
4. **Plato:** con los botones (o teclas 1–4):
   - **Mezclar:** revuelve las figuritas.
   - **Cucharada:** saca de 4 a 7 figuritas al azar y las pone en la charola (también con clic en la cuchara).
   - **Revelar:** muestra cada figurita con su premio.
   - **Extras / Caja final:** revela los extras del paquete y abre la caja con todos los premios.

Arrastra con el mouse para mirar alrededor y haz doble clic para volver al centro. El botón **Ver IDs** muestra el ID de cada objeto.

## Reglas

- Cada figurita es un premio de un tema con nivel fijo. Cada tema tiene 12: 7 comunes (C1–C7), 3 épicas (E1–E3) y 2 legendarias (L1–L2).
- Cada cucharada saca **de 4 a 7 figuritas**: 4, 5, 6 y 7 tienen la misma probabilidad (25 % cada una, 5.5 en promedio). Así unas cucharadas dan más premios y otras menos.
- Cada figurita se decide así: primero el **nivel** (Común 70 %, Épica 25 %, Legendaria 5 %), luego el **tema** (al azar entre los elegidos) y luego el **premio** (al azar entre los de ese nivel y tema). Así la probabilidad de cada nivel es la misma con 1 tema o con 9.
- El plato siempre tiene **120 figuritas** (84 comunes, 30 épicas, 6 legendarias) repartidas en partes iguales entre los temas elegidos. Es solo visual: después de cada cucharada se rellena y no cambia las probabilidades.
- Extras: el regalo, el épico y el legendario asegurados salen de un tema al azar entre los elegidos.
- Efectos: común sin efecto, épica con brillo morado, legendaria con contorno dorado al doble de tamaño, destello, confeti y campana.
- Con eso, en cada cucharada hay 78.4 % de probabilidad de sacar al menos 1 épica y 24.5 % de sacar al menos 1 legendaria.
- Para comprobar las probabilidades: `node test_sorteo.js` (simula 100,000 cucharadas con 1, 3 y 9 temas).

| Paquete | Precio | Cucharadas | Extras |
| --- | --- | --- | --- |
| 1 scoop | $100 | 1 | +1 regalo |
| 2 scoops | $175 | 2 | +1 regalo, +1 épico |
| 3 scoops | $200 | 3 | +2 regalos, +1 épico, +1 legendario |

## Archivos

| Archivo / carpeta | Para qué sirve |
| --- | --- |
| `index.html` | El juego: escena 3D, pantallas y lógica |
| `data.js` | Tabla de figuritas, temas, premios, probabilidades, regalos y paquetes |
| `sorteo.js` | Reglas de azar: cómo se decide cada figurita y cómo se reparte el plato |
| `test_sorteo.js` | Prueba de las probabilidades (`node test_sorteo.js`) |
| `modelos.js` | Qué modelo 3D usa cada ID en cada tema, colores por tema y tamaños |
| `creditos.js` | Créditos que se muestran en la pantalla de Créditos |
| `figuritas_lucky_scoops/` | Modelos 3D originales (`.glb`) y `CREDITOS.txt` |
| `figuritas_js/` | Copias de los modelos en `.js` para que el juego funcione con doble clic |
| `modelos_cuchara_y_cuencos/` | Cuchara corazón y cuencos del escenario, con sus copias `.js` en `js/`. **No se sube a git** (ver abajo) |

## Cuchara y cuenco

El escenario usa `cuchara_corazon` y `cuenco_facetform_bajo` (en `modelos.js` → `escenario`). El juego mide la pared del cuenco para acomodar las figuritas adentro sin que la atraviesen, y la cuchara entra al montón sin chocar con la pared. Si esa carpeta no está, el juego usa el plato y la cuchara provisionales.

Para usar otro cuenco, pon su nombre en `escenario.plato` y genera su copia `.js` en `modelos_cuchara_y_cuencos/js/` con el mismo comando de PowerShell de abajo (cambiando las carpetas).

## Cambiar o agregar una figurita

1. Copia el `.glb` en `figuritas_lucky_scoops/`.
2. Genera su copia `.js` con PowerShell (desde la carpeta del proyecto):

   ```powershell
   $n = "nombre_del_modelo"
   $b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes("figuritas_lucky_scoops\$n.glb"))
   [IO.File]::WriteAllText("figuritas_js\$n.js", "(window.LS_GLB=window.LS_GLB||{})['$n']='$b64';")
   ```

3. En `modelos.js`, pon el nombre (sin `.glb`) en el ID y tema que quieras. Si es un objeto genérico que se debe pintar con los colores del tema, agrégalo también a `genericos`.

El juego ajusta solo el tamaño de cada modelo (2 cm en el plato, 4 cm las legendarias).

## Créditos y licencias

Los modelos 3D son gratuitos de Sketchfab; la lista completa con autores y enlaces está en `figuritas_lucky_scoops/CREDITOS.txt` y en la pantalla de Créditos del juego.

- **CC BY:** se puede usar dando crédito al autor.
- **CC BY-NC** (`capibara.glb`, `mochila.glb`): no se pueden usar con fines comerciales.
- **MakerWorld Standard Digital File License** (cuchara y cuencos): solo uso personal y no comercial, y **no se pueden compartir ni subir** (tampoco sus copias `.glb`/`.js`). Por eso `modelos_cuchara_y_cuencos/` está en `.gitignore`. Si el juego se publica, hay que cambiarlos por modelos CC BY o CC0.

Los personajes (Hello Kitty, Marvel, etc.) pertenecen a sus dueños; este es un proyecto escolar/personal sin fines de lucro.
