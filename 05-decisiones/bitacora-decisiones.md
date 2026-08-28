# Bitácora de decisiones

Cada decisión que cambie el rumbo. Sirve para que nadie reabra lo ya cerrado, y para poder explicar en el pitch *por qué* llegamos ahí — los jurados premian el criterio, no solo el resultado.

## Formato

```markdown
### D1 — [Título]
- **Fecha:**
- **Decidimos:**
- **Alternativas consideradas:**
- **Por qué esta:**
- **Qué la revertiría:**
- **Quién estuvo:**
```

---

### D0 — Montar la memoria colectiva en un repositorio

- **Fecha:** 2026-08-27
- **Decidimos:** llevar todo el reto en un repo de markdown versionado, separando fuentes crudas de interpretación, con etiquetas `[HECHO]` / `[SUPUESTO]` / `[PREGUNTA]`.
- **Alternativas:** Notion, Drive, un grupo de WhatsApp.
- **Por qué esta:** el equipo es de 6 y el riesgo grande es que cada uno recuerde una versión distinta de lo que dijo OPPO. El versionado deja ver quién cambió qué.
- **Qué la revertiría:** que la mitad del equipo no use git y el repo quede desactualizado. En ese caso, mover a Notion.
- **Quién estuvo:** Samuel.

---

### D1 — Corregir el récord tras leer los documentos oficiales

- **Fecha:** 2026-08-27
- **Decidimos:** que F5 (brief oficial), F6 (deck) y F7 (rúbrica de jurados) mandan sobre las notas de la charla, y corregir cuatro creencias del equipo que resultaron falsas.
- **Qué cambió:** insights vale 25% y no 20% · el concurso de fotografía no es obligatorio · la pregunta oficial no menciona la fotografía · hay que entregar un prototipo funcional.
- **Por qué:** el brief se autodeclara suficiente para evaluar sin presentación, y la rúbrica es el papel donde el jurado escribe la nota.
- **Qué la revertiría:** que la organización diga que la charla prevalece sobre el brief.

---

### D2 — Priorizar investigación primaria dentro de las 24 horas

- **Fecha:** 2026-08-27
- **Decidimos:** lanzar la encuesta como primera acción del reto, antes de idear.
- **Alternativas:** idear primero y buscar datos que respalden la idea; usar solo fuentes secundarias.
- **Por qué esta:** insights es el 25% de OPPO, el brief exige investigación primaria con nombre propio, y el jurado califica "soluciones basadas en hechos y datos". Además la encuesta es lo único que depende del tiempo de otras personas.
- **Qué la revertiría:** que la encuesta no llegue a 80 respuestas en las primeras horas; en ese caso se compensa con entrevistas cualitativas.

---

### D3 — Confirmar el Bubble como puerta de entrada, el Reno como protagonista

- **Fecha:** 2026-08-27
- **Decidimos:** diseñar la mecánica con el Bubble generando awareness/atención inicial, y el Reno como cierre y protagonista, siguiendo la validación directa de OPPO.
- **Por qué esta:** el encargado de OPPO confirmó que su propia campaña ya usa esta lógica — "es esta vaina que le muestras a alguien y no sabe qué es, pero llama la atención… y después conectarlo con el celular" (F9). Cierra DP2.
- **Qué la revertiría:** que una decisión de concepto posterior encuentre que el Bubble no es necesario para la mecánica elegida.
- **Quién estuvo:** —

---

### D4 — El avatar es 100% personal, sin comparaciones con famosos

- **Fecha:** 2026-08-27
- **Decidimos:** quitar la asociación del avatar con embajadores de OPPO (Luis Díaz, BabyMonster, UEFA) que tenía la primera versión de "Tu Reno Wrapped", y cambiar el motor de "el usuario elige categoría" a "el sistema infiere del contenido de la foto" — modelo tipo Spotify Wrapped, con cadencia anual (el piloto de esta noche simula ese ciclo comprimido). Categorías pasan a ser las mismas de la encuesta (Social, Deporte, Creatividad) más Creación/Innovación, agregada por el equipo.
- **Alternativas:** mantener los arquetipos de marca para reforzar los activos de OPPO; mantener la auto-categorización manual del usuario.
- **Por qué esta:** un arquetipo forzado ligado a un famoso arriesga sentirse fabricado — la Gen Z lo detecta casi al instante (`investigacion-secundaria.md`) — y el avatar deja de sentirse propio si se lo asocian con alguien más. El modelo de análisis pasivo también es más fiel al insight principal: reconstruir el momento tal cual se vivió, no como el usuario decide etiquetarlo.
- **Qué la revertiría:** que en el piloto de esta noche los participantes pidan explícitamente una referencia o comparación al recibir su avatar.
- **Quién estuvo:** —

---

### D5 — Reorganizar el reparto: DOFA, Porter y diseño visual del prototipo

- **Fecha:** 2026-08-27
- **Decidimos:** Mariana Gómez pasa de narrativa/pitch a construir un DOFA de OPPO frente al reto; Ana toma las 5 fuerzas de Porter; Mariana Mosquera y Ana Dusán se enfocan en el diseño visual del prototipo (`../07-prototipo/`) sobre el esqueleto funcional ya construido. María Paula queda sola en investigación; Samuel sigue solo en prototipo y piloto.
- **Por qué esta:** aprovecha las fortalezas del equipo en análisis de negocio (economía/finanzas/mercadeo, ver `../01-contexto/equipo.md`) y separa el trabajo de diseño visual del trabajo de lógica del prototipo, que ya está resuelto.
- **Riesgo que deja abierto:** ningún miembro tiene hoy como entrega principal ensamblar el deck final ni liderar el ensayo del pitch (ítems 6, 7 y 9 de `../06-entregables/README.md`) — DOFA y Porter son insumos, no el entregable en sí, y alguien tiene que integrarlos.
- **Qué la revertiría:** que a la hora 14:00-16:00 (chequeo contra la rúbrica, `../PLAN-24H.md`) el deck no esté armado porque nadie lo asumió a tiempo.
- **Quién estuvo:** —

---

### D6 — Bajar la ambición del prototipo de "piloto con gente real" a "demo navegable"

- **Fecha:** 2026-08-27
- **Decidimos:** por restricción real de tiempo, no se va a reclutar un grupo piloto ni se va a contar con un Reno físico para presentar. Se reemplaza el "nivel fuerte" de prototipo que proponía `../PLAN-24H.md` (mecánica corriendo con gente real) por el "nivel medio" de esa misma tabla: un prototipo de software navegable (`../07-prototipo/`), demostrado en vivo durante el pitch. Se complementa con **una entrevista individual** de validación cualitativa, en vez de las 6–8 entrevistas de intercepción originalmente planeadas — ojalá con alguien fuera de la burbuja del equipo, para aportar al menos un testimonio sobre S4.
- **Alternativas consideradas:** forzar un mini-piloto exprés con quien esté disponible en el lugar del evento; presentar solo mockups en el deck (nivel débil).
- **Por qué esta:** un prototipo de software funcional real sigue calificando como "prototipo funcional" en la rúbrica del jurado (F7, renglón 3) si se demuestra en vivo, y es más honesto que forzar un piloto de mala calidad solo para decir que hubo uno.
- **Consecuencia directa:** P1 y P3 (`02-problema/preguntas-abiertas.md`) quedan cerradas sin respuesta — ya no hay ventana para preguntarle nada más a OPPO. El pitch no debe asumir ni Hasselblad en el Reno ni autorización de una función nueva.
- **Qué la revertiría:** que aparezca tiempo o un dispositivo Reno de último momento antes del pitch.
- **Quién estuvo:** —

---

## Tensión nueva sin resolver — perfil socioeconómico de la muestra

F9 (Q&A con OPPO) introdujo algo que ningún documento oficial anterior decía: el alcance es nacional, pero el Reno **"es para estratos altos… muy Andes, Sabana"** — el mismo perfil del que el equipo se quería alejar al diseñar la encuesta (I5, D2). No se resuelve solo: hay que decidir en equipo cómo pesar la muestra.

---

## Decisiones pendientes

| # | Qué hay que decidir | Bloquea | Fuente |
|---|---|---|---|
| DP1 | Qué territorio se toma (T1 a T6) | Toda la ideación | `04-ideacion/lluvia-de-ideas.md` |
| DP7 | ~~Qué se piloteará esta noche~~ — **resuelto por D6**: no hay piloto, es demo de software + una entrevista individual | El prototipo funcional, 10 pts | D6 |
| DP8 | Si se incluye concurso de fotografía, ahora que sabemos que es opcional y bienvenido | Estructura de la mecánica | I4, F9 |
| DP3 | Eje Luis Díaz/UEFA o eje Y2K/K-pop — o cuál es núcleo y cuál canal | Tono de toda la campaña | I1 |
| DP4 | Si la RSE de La Guajira entra en la propuesta | 20% de viabilidad e impacto | I10 |
| DP5 | Alcance geográfico ya es nacional (F9) — falta decidir **cómo pesar la muestra de la encuesta** dado que el target real es de estrato alto | Viabilidad, diseño de encuesta | F9 |
| DP6 | Quién hace qué entre los 6 | Todo el cronograma | `../PLAN-24H.md` |

**DP1 y DP7 siguen siendo las urgentes.** Sin territorio elegido la lluvia de ideas se dispersa, y sin decidir qué se pilotea no hay prototipo — que son 10 puntos fijos de la rúbrica. **DP5 (perfil de la muestra) también es urgente** porque la encuesta está a punto de salir y cambia a quién se le manda.
