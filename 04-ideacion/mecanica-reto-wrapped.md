# Mecánica del reto: "Tu Reno Wrapped"

Modelo tipo Spotify Wrapped: un avatar que se construye solo, a partir de las fotos que la persona ya toma, y que se revela al cierre de un ciclo. Esta es la versión final, después de dos rondas de ajuste del equipo.

> Revisión: la versión anterior puntuaba dominios elegidos a mano y cerraba con arquetipos ligados a embajadores de OPPO (Luis Díaz, BabyMonster, UEFA). El equipo decidió explícitamente **quitar las comparaciones con famosos** — el avatar es 100% personal — y mover el motor de "el usuario elige categoría" a "el sistema infiere del contenido de la foto".

> **Segunda revisión, por restricciones de tiempo reales (decisión D6, `../05-decisiones/bitacora-decisiones.md`):** no va a haber grupo piloto reclutado ni un Reno físico disponible para presentar. El "nivel fuerte" de prototipo que proponía `../PLAN-24H.md` (mecánica corriendo con gente real anoche) **no es alcanzable**. El plan pasa al "nivel medio" de esa misma tabla: un **prototipo navegable que el jurado puede ver funcionar en vivo** (`../07-prototipo/`), demostrado durante el pitch mismo, complementado con **una entrevista individual de validación cualitativa** — no un piloto con múltiples participantes. Todo lo que sigue en este documento que hablaba de "esta noche con el grupo" se ajusta a esa realidad.

## Cómo funciona, de fondo

**El motor es análisis de fotos, no auto-categorización.** El usuario no elige una categoría cada vez que sube algo — sube el momento, y el sistema (a escala, con IA; esta noche, el equipo a mano) analiza qué muestra esa foto y reconstruye el avatar en consecuencia. La persona no está jugando a puntuar categorías; está viviendo su semestre y el avatar se arma solo con lo que ya hizo.

**Cadencia real: anual, como Spotify Wrapped.** El "drop" —el resumen del avatar y los momentos más especiales del período— sale al cierre del ciclo (un año, o un semestre si se quiere más frecuencia universitaria), y ahí la persona decide si lo comparte. **El piloto de esta noche es una simulación comprimida de ese ciclo en un par de horas** — hay que decirlo así en el pitch: esto no es el producto de una noche, es el año completo corrido rápido para poder mostrarlo hoy.

**Objetivo del sistema: capturar la mayor cantidad de momentos posible.** Entre más fotos suba alguien durante el ciclo, más rico y más preciso es su avatar — el sistema premia volumen de captura real, no una sola foto perfecta.

## Las categorías

Se usan las mismas familias que salieron en la encuesta primaria (n=65, `../02-problema/resultados-encuesta.md`), no categorías inventadas:

| Categoría | Qué cubre | Interés real (encuesta) | Ejemplo para la demo del prototipo |
|---|---|---|---|
| **Social** | Fiestas, conciertos, salidas, parche | 43% + cultura urbana ≈ 46% — la dominante | Foto grupal donde el que toma la foto también sale (T1) |
| **Deporte** | Actividad física | 26% | Una sesión de ejercicio, un partido, una caminata |
| **Creatividad** | Creación de contenido | 22% | Un detalle del outfit, algo creado en el momento, una foto con estética propia |
| **Creación/Innovación** | Proyectos propios — y también lo académico o laboral | *(no medida en la encuesta — extensión del equipo)* | Algo en lo que la persona esté trabajando/construyendo, incluido el reto mismo |

**Honestidad para el pitch:** las primeras tres tienen n=65 detrás. La cuarta (Creación/Innovación) es una categoría que el equipo agregó para cubrir una parte de la vida universitaria que la encuesta no preguntó — no hay que presentarla como si tuviera el mismo respaldo de dato.

Social debe tener más oportunidades de sumar que las demás en el diseño del reto, porque es donde está casi la mitad del interés real medido.

**La estación Reno tiene que priorizar Social, no repartirse pareja (Fase 1 de implementación, no esta noche — ver D6).** Cruzando la encuesta por categoría (`../02-problema/resultados-encuesta.md`): entre quienes se identifican con Social, 89% conoce a OPPO pero **48% duda de la cámara** — más que el 42% general. Es la categoría más grande y también la más escéptica. Poner ahí la estación Reno (Pop Camera/Pop Out, puntos dobles) no es solo consistente con el peso de Social — es donde más se necesita resolver la duda.

## El avatar

- **Empieza neutro** — sin rasgos, sin vestimenta definida, sin color dominante.
- **Se reconstruye con lo que la persona hace**, no con lo que elige de un menú. Si durante el ciclo la mayoría de sus fotos caen en Deporte, el avatar termina con una apariencia/vestimenta que refleja eso; si es Creatividad, otra distinta. La lógica es "te lo adapta a como fuiste", no "elegiste un personaje".
- **Cero comparaciones con famosos o embajadores de marca.** Es un rechazo explícito del equipo a la versión anterior — el avatar es del usuario, no un personaje prestado.
- **Para la demo del pitch**, sin IA real y sin grupo piloto: el equipo carga el prototipo (`../07-prototipo/`) con momentos de ejemplo — fotos propias del equipo y, si se logra, de la persona entrevistada — para mostrar en vivo cómo el avatar cambia según la categoría dominante. Es una demostración funcional del mecanismo, no el resultado de un piloto con muchas personas.

## El Wrapped de cierre y el incentivo de compartir

Al cerrar el ciclo (esta noche: al cerrar el piloto), cada participante recibe su tarjeta:

1. **La evidencia**, en sus propios momentos: cuántas fotos, en qué categorías, cuál dominó.
2. **Cómo quedó su avatar** — la versión final, ya adaptada.
3. **La marca al final, no al principio** — el Reno como la herramienta que lo hizo posible.

**Nuevo — compartir da puntos extra.** Quien comparte su Wrapped (públicamente, no solo lo guarda) recibe puntos adicionales en una escala (el equipo propuso algo tipo 1–10, según qué tan público es el compartir — a definir el detalle exacto), y esos puntos dan elegibilidad para premios, cuyo diseño se define después. Esto le da a compartir un motivo explícito, más allá de las ganas de mostrarlo — y el precedente (Spotify Wrapped: 500 millones de veces compartido en 24 horas en 2025) muestra que el formato ya genera esa intención por sí solo; el punto extra es amplificarla, no crearla de la nada.

**Regla no negociable, sin cambios:** nunca se le dice a la persona quién es "según" su avatar antes de mostrarle la evidencia — primero los datos de lo que hizo, después el resultado.

## Dónde vive el avatar (fricción mínima)

El usuario pidió resolver esto con investigación, no con intuición. Tres opciones comparadas:

| Opción | A favor | En contra |
|---|---|---|
| **Always-On Display (AOD) del Reno** | ColorOS ya permite personalizar la AOD con mensajes, gradientes y estilos de reloj — el avatar encaja en ese patrón sin pedirle nada nuevo al sistema operativo. Se ve **cada vez que uno mira el celular, sin abrir nada** — cero fricción real | Depende de que la persona tenga la AOD activada; consume algo de batería |
| **Widget de pantalla de inicio** | Patrón ya validado: el widget de Duolingo subió el compromiso diario **60%** solo por estar visible sin abrir la app | Requiere que la persona lo agregue a su pantalla de inicio — un paso de fricción que la AOD no tiene |
| **El Bubble como pantalla opcional** | Es una superficie física, visible para otros, no solo para el usuario — el avatar deja de ser privado y se vuelve algo que se lleva puesto y se le muestra a la gente, si la persona quiere | No todos tienen Bubble; debe ser opcional, nunca el único lugar donde vive el avatar |

**Recomendación: AOD como superficie principal** — es la de menor fricción real (no requiere ninguna acción del usuario más que tener el AOD prendido) y es, además, relevancia de producto pura: nadie más va a proponer usar una función nativa de OPPO como el lugar donde vive la mecánica central del reto. **Widget de home screen como respaldo** para quien no use AOD. **El Bubble queda como capa social opcional** — no reemplaza a las otras dos, es para quien quiera mostrar su avatar a otros, no solo verlo él mismo.

**Para la demo del pitch:** no hay un Reno físico disponible para mostrar la AOD real, así que el mockup dentro de `../07-prototipo/` (el "marco de teléfono" en pantalla) hace ese papel — se explica en el pitch que es una simulación visual de dónde viviría en el producto real, no una AOD funcionando sobre ColorOS.

## Cómo escala

Hoy el análisis de fotos y la actualización del avatar los hace el equipo a mano — es el prototipo manual de un modelo de clasificación de imágenes, algo que la IA nativa del Reno ya hace en otras tareas (traduce, resume, describe imágenes — F9). El roadmap puede decir, honestamente: *"hoy el equipo mira las fotos y arma el avatar; mañana el modelo on-device del propio teléfono lo hace solo, en tiempo real, y lo muestra en la AOD sin que nadie tenga que abrir una app."*

## Contra los filtros de `criterios-evaluacion.md`

- **¿Prototipo funcional?** Sí, a nivel medio (`../PLAN-24H.md`): el software en `../07-prototipo/` corre de verdad y se demuestra en vivo (categorías → avatar → Wrapped → compartir), aunque no hay datos de un grupo real por restricción de tiempo. Hay que decirlo así de claro en el pitch, no disfrazarlo de piloto.
- **¿Nace de insight con dato?** Sí — I13/I14 (motivación e interés real, n=65) definen las categorías; el insight principal (miedo a no capturar el momento tal cual se vivió) es lo que el avatar resuelve al reconstruir con evidencia real, no con opinión. Se complementa con una entrevista individual, presentada como testimonio cualitativo, no como muestra.
- **¿Participarían ustedes?** Ver el propio avatar cambiar solo, sin esfuerzo de categorizar nada, y poder mostrarlo en la AOD sin abrir una app, es más parecido a algo que la gente ya ama (Spotify Wrapped) que a un concurso.
- **¿Se cae sin el Reno?** La AOD personalizable de ColorOS sigue siendo la relevancia de producto en el diseño — pero esta noche no hay un Reno físico para mostrarlo corriendo de verdad, así que en el pitch es mockup, no demo de hardware.
