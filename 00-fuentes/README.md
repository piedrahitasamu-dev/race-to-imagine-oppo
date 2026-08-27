# 00 — Fuentes

Material original, **sin editar**. Esta carpeta es de solo-agregar: nada se corrige, se reescribe ni se "limpia". Si una fuente tiene un error, el error se anota en `02-problema/hechos-vs-supuestos.md`, no se arregla acá.

Por qué: cuando dentro de tres semanas alguien discuta qué dijo exactamente la líder de OPPO, tiene que poder volver al texto original y no a la versión que alguien mejoró de memoria.

## Convención de nombres

```
YYYY-MM-DD-tipo-descripcion.md
2026-08-21-transcripcion-lider-oppo.md
2026-08-20-brief-oppo.md
2026-08-22-notas-equipo-sesion1.md
```

## Inventario

| ID | Archivo | Tipo | Fecha | Fidelidad |
|---|---|---|---|---|
| F1 | `2026-08-27-nota-manuscrita-sesion-oppo.png` | Nota manuscrita (iPad) | 2026-08-27 | Parafraseada |
| F2 | `2026-08-27-notas-equipo-digital.png` | Notas digitales del equipo | 2026-08-27 | Parafraseada |
| F3 | `2026-08-27-transcripcion-charla-oppo.md` | Transcripción de la charla | 2026-08-27 | Limpia, no literal |
| F4 | Apunte suelto (dentro de `notas-equipo.md`) | Notas de sesión | 2026-08-27 | Parafraseada |
| — | `2026-08-27-notas-equipo.md` | Transcripción a texto de F1, F2 y F4 | 2026-08-27 | Fiel a las imágenes |

**F3 es la fuente de mayor peso.** Es la más completa y la única que contiene los criterios de evaluación. Cuando F1/F2/F4 contradigan a F3, gana F3 — pero la contradicción se anota en `02-problema/hechos-vs-supuestos.md` en vez de borrarse.

### Faltantes

| Qué falta | Por qué importa |
|---|---|
| Brief oficial en PDF/deck de OPPO | Las notas son de terceros. El documento oficial manda. |
| Bases y reglamento del reto | Fechas, formato de entrega, reglas de participación |
| Deck de la presentación de la charla | Las diapositivas tienen cifras que las notas no capturaron |

## Al agregar una fuente

Encabezar el archivo con:

```markdown
---
tipo: transcripción | brief | correo | nota
fecha: YYYY-MM-DD
origen: quién lo produjo
participantes: quiénes hablan
fidelidad: literal | parafraseada | resumen
---
```

`fidelidad` importa. Una transcripción automática tiene errores de audio; una nota de reunión ya es interpretación de alguien. No pesan igual como evidencia.
