# Lucky Scoops

Juego 3D en el navegador: el jugador saca cucharadas de minifiguras de un plato y cada figurita se convierte en un premio según la tabla del tema elegido. Al final ve todos sus premios en una caja.

Hecho con [Three.js](https://threejs.org/) (se carga desde CDN, no hay que instalar nada).

## Cómo jugar

Abre `index.html` con doble clic en Chrome, Edge o Firefox. También funciona con un servidor local como Live Server de VS Code.

Se necesita internet la primera vez para cargar Three.js y la tipografía.

1. **Inicio:** botón Jugar (o Créditos).
2. **Categoría:** Niños, Niñas o Mixto.
3. **Tema:** Hot Wheels, Avengers, Brainrots, Hello Kitty, Pompompurin, Keroppi, Kuromi, Capibara o Squishy.
4. **Paquete:** 1, 2 o 3 scoops.
5. **Plato:** con los botones (o teclas 1–4):
   - **Mezclar:** revuelve las figuritas.
   - **Cucharada:** saca 5 figuritas al azar y las pone en la charola (también con clic en la cuchara).
   - **Revelar:** muestra cada figurita con su premio.
   - **Extras / Caja final:** revela los extras del paquete y abre la caja con todos los premios.

Arrastra con el mouse para mirar alrededor y haz doble clic para volver al centro. El botón **Ver IDs** muestra el ID de cada objeto.

## Reglas

- El plato tiene **120 figuritas** de 12 tipos (IDs): cada común (C1–C7) va 12 veces, cada épica (E1–E3) 10 veces y cada legendaria (L1–L2) 3 veces.
- Probabilidad por figurita: común 10 %, épica 8.3 %, legendaria 2.5 %.
- Cada cucharada saca 5 figuritas sin reponerlas.
- Cada ID da el premio de la tabla del tema. La figurita solo le da personalidad; el premio depende del ID.
- Efectos: común sin efecto, épica con brillo morado, legendaria con contorno dorado, destello, confeti y campana.

| Paquete | Precio | Cucharadas | Extras |
| --- | --- | --- | --- |
| 1 scoop | $100 | 1 | +1 regalo |
| 2 scoops | $175 | 2 | +1 regalo, +1 épico |
| 3 scoops | $200 | 3 | +2 regalos, +1 épico, +1 legendario |

## Archivos

| Archivo / carpeta | Para qué sirve |
| --- | --- |
| `index.html` | El juego: escena 3D, pantallas y lógica |
| `data.js` | Tabla de figuritas, temas, premios, regalos y paquetes |
| `modelos.js` | Qué modelo 3D usa cada ID en cada tema, colores por tema y tamaños |
| `creditos.js` | Créditos que se muestran en la pantalla de Créditos |
| `figuritas_lucky_scoops/` | Modelos 3D originales (`.glb`) y `CREDITOS.txt` |
| `figuritas_js/` | Copias de los modelos en `.js` para que el juego funcione con doble clic |

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

Los personajes (Hello Kitty, Marvel, etc.) pertenecen a sus dueños; este es un proyecto escolar/personal sin fines de lucro.
