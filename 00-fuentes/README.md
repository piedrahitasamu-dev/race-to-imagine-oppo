# 00 — Fuentes

Material original, **sin editar**. Esta carpeta es de solo-agregar: nada se corrige ni se "limpia". Si una fuente tiene un error, se anota en `02-problema/hechos-vs-supuestos.md`, no se arregla acá.

## Inventario

| ID | Archivo | Qué es | Fidelidad |
|---|---|---|---|
| **F5** | `2026-08-27-brief-oficial-oppo.docx` · transcrito en `2026-08-27-brief-oficial-y-rubrica.md` | Brief oficial de inscripción del reto | Literal |
| **F6** | `2026-08-27-deck-oficial-oppo.pdf` · transcrito en `2026-08-27-deck-oppo-transcripcion.md` | Deck que OPPO presentó, 41 páginas | Literal |
| **F7** | `2026-08-27-rubrica-evaluadores-imagine-a-thon.jpg` · transcrito en `2026-08-27-brief-oficial-y-rubrica.md` | Formato de evaluación de los jurados | Literal |
| **F8** | `2026-08-27-lluvia-de-ideas-equipo.md` | Grabación de la primera sesión del equipo | Transcripción automática, organizada; citas literales |
| **F9** | `2026-08-27-qa-encargado-oppo.md` | Q&A del equipo con el encargado de OPPO (mentoría) | Transcripción automática con errores; limpiada y organizada por tema |
| F10 | `2026-08-27-aporte-equipo-segunda-ronda.md` | Segundo aporte de ideas del equipo | Parafraseada |
| F3 | `2026-08-27-transcripcion-charla-oppo.md` | Transcripción de la charla de OPPO | Limpia, **no literal** |
| F1 | `2026-08-27-nota-manuscrita-sesion-oppo.png` | Nota manuscrita en iPad | Parafraseada |
| F2 | `2026-08-27-notas-equipo-digital.png` | Notas digitales del equipo | Parafraseada |
| F4 | Apunte suelto, dentro de `2026-08-27-notas-equipo.md` | Notas de sesión | Parafraseada |
| — | `2026-08-27-notas-equipo.md` | Transcripción a texto de F1, F2 y F4 | Fiel a las imágenes |

## Jerarquía de fuentes

**F5, F6 y F7 mandan.** Son documentos oficiales. El brief (F5) se autodeclara suficiente para que un evaluador juzgue *"sin necesidad de que la empresa le haga una presentación"*, y la rúbrica (F7) es literalmente el papel donde el jurado escribe la nota.

**F1, F2, F3 y F4 son notas de terceros.** Útiles para matices que no quedaron en el deck, pero ya se comprobó que tienen errores: dejaron "20% insights" (era 25%) y "concurso obligatorio" (no lo es). Cuando contradigan a F5/F6/F7, **gana el documento oficial** — y la contradicción se anota, no se borra.

**F8 es la fuente más valiosa para el 25% de insights del target**, porque son seis personas del target exacto hablando sin filtro. Pero es opinión de seis personas de una sola universidad, no investigación primaria. La encuesta de `02-problema/investigacion-primaria.md` es lo que la convierte en dato.

## Faltantes

| Qué falta | Por qué importa |
|---|---|
| Reglamento del Imagine-a-thon | Duración del pitch, formato de entrega, jurados. Renglón 5 de la rúbrica |
| Respuesta a P1 (Hasselblad) y P3 (función nueva) | F9 respondió P2 y P4, pero no tocó estas dos |
| Datos de la encuesta | El 25% de la nota depende de esto |

## Al agregar una fuente

Encabezar con:

```markdown
---
id: F9
tipo: transcripción | brief | correo | nota
fecha: YYYY-MM-DD
origen: quién lo produjo
fidelidad: literal | parafraseada | resumen
---
```

`fidelidad` importa: una nota de reunión ya es interpretación de alguien. No pesa igual que un documento oficial.
