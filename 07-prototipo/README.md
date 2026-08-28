# Prototipo — Tu Reno Wrapped

Esqueleto funcional, sin backend. HTML + CSS + JS puro, todo el estado vive en `localStorage` del navegador. Corresponde a la mecánica descrita en `../04-ideacion/mecanica-reto-wrapped.md`.

## Cómo correrlo

Abrir `index.html` directamente en el navegador, o si el navegador bloquea la carga de archivos locales:

```
cd 07-prototipo
python3 -m http.server 8000
```

Y entrar a `http://localhost:8000`.

## Qué hace (funcionalidad de ejemplo)

1. Crear un avatar con un nombre.
2. Registrar "momentos": categoría (Social, Deporte, Creatividad, Creación/Innovación), nota opcional, foto opcional, y si fue tomado en la Estación Reno (puntos dobles).
3. El avatar en el mockup de Always-On Display se actualiza en vivo — color y barras de categoría según los puntos acumulados.
4. "Cerrar ciclo" simula el cierre anual (comprimido para la demo): calcula la categoría dominante y arma la tarjeta Wrapped, con una cita real de una de las notas ingresadas como "evidencia".
5. "Compartir" da puntos extra aleatorios (1–10) hacia premios, simulando el incentivo de compartir.
6. "Empezar de nuevo" borra todo y reinicia — útil para repetir la demo con distintas personas durante el pitch.

## Qué es placeholder, para Mariana

Todo el CSS está en `styles.css`, con variables de color al principio del archivo (`:root`) — cambiarlas ahí cambia el look completo sin tocar el HTML ni el JS. La estructura de clases (`.avatar-shape`, `.wrapped-card`, `.moment-card`, `.category-bar-fill`, etc.) está pensada para poder re-diseñarse solo con CSS:

- El avatar hoy es un círculo de color — reemplazarlo por una ilustración real es lo primero.
- El mockup de teléfono (`.phone-frame`) es un rectángulo negro con esquinas redondeadas — puede volverse un mockup real del Reno.
- La tarjeta Wrapped (`.wrapped-card`) tiene el layout de contenido ya resuelto (kicker, número grande, desglose, cita, avatar, marca) — el estilo visual es lo que falta.

No hay lógica de negocio metida en el HTML ni en el CSS — todo lo que calcula puntos, dominancia y arma el Wrapped está en `app.js`, así que el rediseño visual no debería romper la funcionalidad.

## Qué no incluye (a propósito)

- No hay servidor ni base de datos — es un prototipo de demo, no el producto real.
- No hay análisis de imagen real (IA) — la categoría la elige la persona en el formulario, simulando lo que a escala haría un modelo (ver "Cómo escala" en `mecanica-reto-wrapped.md`).
- No hay Always-On Display real de ColorOS — es un mockup visual de cómo se vería.
