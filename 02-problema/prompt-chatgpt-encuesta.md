# Prompt para ChatGPT — encuesta a universitarios

Para qué sirve: pasarle a ChatGPT todo el contexto del reto de una vez, para que devuelva un cuestionario que produzca **insights** (25% de la nota) y no opiniones.

## Antes de copiarlo, tres advertencias

**1. La encuesta no puede decir que es de OPPO.** La pregunta más valiosa del cuestionario es *"si te digo OPPO, ¿qué se te viene a la cabeza?"*. Si el formulario se titula "Encuesta OPPO" o el link lo anuncia, esa pregunta queda contaminada y se pierde el dato que prueba I1. El prompt ya se lo ordena a ChatGPT; también hay que cumplirlo al difundirla.

**2. "¿Participarías en un reto?" no es una pregunta útil.** Todo el mundo dice que sí y después nadie participa. La única forma honesta de medir la mecánica de retos es preguntar por **conducta pasada**: en qué retos entraron de verdad, cuáles abandonaron y en qué punto. El prompt lo pide así.

**3. La idea de "retos tipo Red Bull" tiene el mismo riesgo que un concurso de fotografía.** El formato Red Bull convoca al perfil que ya se cree extremo, igual que un evento de fotografía convoca a quien ya se cree fotógrafo — I4, y el equipo lo comprobó en su propia mesa. La encuesta tiene que servir para **probar o tumbar** esa hipótesis, no para confirmarla. Por eso el prompt le prohíbe a ChatGPT escribir preguntas que vendan la idea.

---

## El prompt — copiar desde aquí

```
Actúa como un investigador de mercados senior especializado en Gen Z latinoamericana y en
research de campo con tiempos cortos. Tu trabajo NO es diseñar una campaña: es diseñar el
instrumento que va a producir los insights sobre los que después se construirá la campaña.

## CONTEXTO

Somos un equipo de 6 estudiantes universitarios colombianos en un reto de innovación de 24
horas propuesto por OPPO (marca de celulares). Tenemos que entregar una propuesta de campaña
y el criterio con más peso en la evaluación es "Insights del target" con 25% de la nota, con
la exigencia explícita de que salgan de INVESTIGACIÓN PRIMARIA propia, no de fuentes
secundarias. Necesitamos lanzar la encuesta en la próxima hora y tener resultados en seis.

### La pregunta oficial del reto
"¿Cómo puede la serie OPPO Reno atraer la atención de los estudiantes universitarios en
Colombia y generar mayor reconocimiento, interacción y preferencia de marca dentro de esta
comunidad? Específicamente: ¿cómo puede OPPO comunicarse con los estudiantes universitarios
de una forma auténtica, relevante y alineada con su cultura digital y social?"

La fotografía es el territorio sugerido, pero la organización aclaró que "la solución está
abierta" y que hay que "empezar con un insight, no con un formato".

### La marca, en sus propias palabras
"En OPPO creemos que la verdadera generosidad con el futuro significa darlo todo en el
presente. Sé auténtico, sé tú mismo, ahora mismo. OPPO permite a todos crear y aprovechar la
belleza de la vida mediante tecnología de vanguardia. 'Make Your Moment' no es solo un
eslogan, es un llamado a la acción. (...) Empoderando a todos a disfrutar de la creatividad
sin esfuerzo y experimentar la alegría de la creación."

### El producto
Serie OPPO Reno (16 y 16F). Gama media-alta, entre $2.299.000 y $2.999.000 COP. Sus funciones
diferenciales de cámara son de ESTILO, no de nitidez: "Pop Camera" son filtros nativos que
degradan la imagen a propósito (cámara digital vieja, película instantánea, fuga de luz), y
"Pop Out 2.0" permite selfies con la cámara trasera. Existe además el OPPO Bubble ($399.000),
una pantallita que se lleva puesta como llavero o collar, muestra fotos y funciona también con
iPhone. La copy oficial del Bubble dice: "Vista trasera ultra nítida. La foto perfecta tomada
por tu amigo."

### Nuestro target
Estudiantes universitarios colombianos de 18 a 25 años. La mayoría NO son clientes de OPPO.

### Lo que ya sabemos (de una sesión con 6 personas del target — es opinión, no dato)
- "Yo no conocía OPPO." Bajo reconocimiento de marca.
- "Ahorita nadie cree que OPPO sea capaz de tomar las fotos que dicen que toman." Brecha de
  credibilidad de la cámara.
- "Se han adaptado tanto a las tendencias que no tienen identidad." El feed de la marca salta
  de K-pop al Mundial sin línea.
- Preguntamos "¿alguno iría a un evento de fotografía?" y nadie levantó la mano. "No, porque
  no me interesa."
- "El que toma la foto del grupo nunca sale en ella."
- "Los de iPhone buscan estatus, los de Huawei buscan tecnología" — y de OPPO, nadie supo
  completar la frase.
- El momento de esta generación no está en el salón: "no es su momento de estar en la
  universidad, sino después con los amigos, ese parche".
- Autocrítica del propio equipo: estudiamos en una universidad privada rodeada de iPhone. No
  sabemos qué pasa en las universidades públicas y ese sesgo es nuestro mayor riesgo.

### La hipótesis que queremos probar (o tumbar)
Queremos activar "Make Your Moment" con una mecánica de RETOS sostenidos en el tiempo, con la
estructura de las campañas de Red Bull (retos por etapas, progresión, comunidad, algo que se
documenta y se comparte). Pero tenemos una sospecha fuerte: el formato de reto puede sufrir el
mismo problema que un concurso de fotografía — atraer solo a quien ya se cree competitivo o
extrovertido, y dejar afuera a la mayoría. La encuesta tiene que decirnos si es así.

## LO QUE TIENES QUE ENTREGAR

Un instrumento de investigación completo, en español colombiano natural, hablado como habla un
universitario y no como habla una agencia.

1. CUESTIONARIO de 12 a 15 preguntas, máximo 3 minutos de respuesta, para Google Forms.
   Para cada pregunta indica: número, texto exacto, tipo (abierta / opción múltiple / escala /
   selección múltiple), y las opciones de respuesta redactadas.
   Marca cuáles son obligatorias.

2. TABLA DE TRAZABILIDAD: una fila por pregunta, con tres columnas — qué hipótesis prueba, qué
   resultado confirmaría la hipótesis, y qué resultado la tumbaría. Si una pregunta no puede
   llenar esas tres columnas, elimínala del cuestionario.

3. PLAN DE ANÁLISIS: los 3 o 4 cruces de variables que hay que mirar primero, y en particular
   cómo comparar universidad privada contra pública/otras ciudades. Dinos qué diferencia
   entre esos dos grupos sería un hallazgo publicable en el pitch.

4. GUION DE ENTREVISTA de 6 preguntas y 5 minutos, para hacer en persona en paralelo. Su
   objetivo es distinto al de la encuesta: conseguir la frase textual, no el porcentaje.
   Incluye repreguntas de profundización ("¿por qué?", "cuéntame la última vez que...").

5. TEXTO DE DIFUSIÓN: el copy de la historia de Instagram y el mensaje de WhatsApp para
   repartirla, en dos líneas cada uno, sin mencionar ninguna marca de celular.

## REGLAS QUE NO PUEDES ROMPER

1. NO menciones OPPO en ninguna pregunta antes de la pregunta de recordación de marca, y esa
   pregunta ubícala al final. El formulario tampoco puede titularse con el nombre de la marca:
   necesitamos medir qué sabe la gente de OPPO sin habérselo dicho nosotros primero.
2. Pregunta por CONDUCTA PASADA Y OBSERVABLE, no por intención futura. Prohibido "¿te gustaría
   que...?", "¿participarías en...?", "¿qué tan probable es que...?". En su lugar: "la última
   vez que...", "¿cuántas veces en el último mes...?", "abre tu galería ahora y dime...".
   Especialmente para la hipótesis de los retos: pregunta por retos, concursos o dinámicas en
   los que YA hayan entrado, cuáles terminaron, cuáles abandonaron y en qué momento los
   abandonaron.
3. Ninguna pregunta puede vender la idea ni insinuar la respuesta correcta. Si una pregunta
   describe nuestra mecánica y pregunta si les gusta, está mal escrita. Queremos que los datos
   puedan tumbarnos la idea.
4. Incluye al menos una pregunta diseñada para CONTRADECIR nuestras propias creencias — que
   nos permita descubrir que estábamos equivocados sobre el target.
5. Nada de escalas Likert de acuerdo/desacuerdo sobre afirmaciones de marca. No producen
   insights, producen promedios.
6. Al menos dos preguntas abiertas obligatorias, cortas, cuyas respuestas en bruto sirvan como
   citas para el pitch.
7. Las primeras 3 preguntas son de filtro y clasificación (universidad, carrera, edad) y
   tienen que permitir cruzar por tipo de universidad.
8. Lenguaje colombiano real. Nada de "dispositivo móvil", "contenido audiovisual" ni "usted".
9. Si alguna pregunta puede resultar incómoda o hacer que la gente mienta (por ejemplo sobre
   plata o sobre qué celular tiene), formúlala de la forma menos amenazante posible y dinos
   por qué la redactaste así.

## FORMATO DE SALIDA

Usa los cinco encabezados de la sección "LO QUE TIENES QUE ENTREGAR", en ese orden. Tablas
donde pedimos tablas. Sin introducción ni cierre: empieza directamente por el cuestionario.

Al final, y solo al final, agrega una sección corta llamada "LO QUE ESTA ENCUESTA NO VA A
RESPONDER" con las 2 o 3 preguntas que quedarían sin resolver y que tendríamos que averiguar
por otro método.

No me hagas preguntas antes de empezar: si algo es ambiguo, asume lo más razonable, entrega el
instrumento completo y anota el supuesto entre corchetes.
```

## Hasta aquí el prompt

## Cómo usar lo que devuelva

No lo copien y peguen a Google Forms sin más. Tres filtros de treinta segundos cada uno:

| Filtro | Qué mirar |
|---|---|
| **La columna que tumba** | En la tabla de trazabilidad, si una pregunta no tiene un resultado que pueda tumbar la hipótesis, esa pregunta solo sirve para darnos la razón. Fuera |
| **Las que ya tenemos** | Las 10 preguntas de [`investigacion-primaria.md`](investigacion-primaria.md) ya están validadas contra los insights. Si ChatGPT propone algo mejor para el mismo objetivo, se cambia; si propone lo mismo con otras palabras, se deja la nuestra |
| **El reloj** | 15 preguntas es el techo. Cada pregunta de más baja la tasa de respuesta, y con 24 horas el n importa más que la profundidad |

Y lo de siempre: la meta es que **el 40% de las respuestas venga de fuera de su universidad**. Una encuesta perfecta que solo circula en su burbuja confirma el sesgo en vez de romperlo.

## Si quieren dos versiones

Vale la pena correr el prompt dos veces cambiando una línea, y quedarse con lo mejor de las dos:

- **Versión A:** tal cual está.
- **Versión B:** agregando al final *"Diseña el cuestionario asumiendo que nuestra hipótesis de los retos es falsa y que la mecánica ganadora es algo que la gente ya hace sin que nadie se lo pida. ¿Qué preguntarías?"*

La B suele producir las preguntas raras, que son las que encuentran insights.
