<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificando los fundamentos y métodos de preparación del café ',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar sus conocimientos sobre botánica del café, calidad del agua, molienda, maquinaria, métodos de extracción, cremado de leche, arte latte y conservación de atributos sensoriales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'La especie de café que se cultiva exclusivamente en colombia y es reconocida por su aroma complejo, acidez equilibrada y cuerpo suave es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Coffea canephora (robusta)',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Coffea liberica',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Coffea arábica',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Coffea excelsa',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Colombia es reconocido mundialmente por producir exclusivamente café arábico de alta calidad, con perfiles suaves y aromáticos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes afirmaciones describe correctamente el proceso de beneficio lavado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se fermenta la cereza completa para obtener un perfil de cuerpo pesado y notas afrutadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se despulpa la cereza, se fermenta el mucílago y se lava con agua, produciendo cafés de acidez brillante y taza limpia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se seca la cereza al sol sin despulpar, lo que resalta el dulzor y el cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se conserva parte del mucílago durante el secado para equilibrar la acidez y el dulzor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El beneficio lavado es el método tradicional en colombia, produce tazas limpias y ácidas, como las del huila o nariño.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El agua utilizada para preparar café de especialidad debe cumplir con ciertos parámetros. Según la SCA, ¿cuál es el rango de pH recomendado y qué efecto tienen los bicarbonatos en exceso?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'pH entre 5,5 y 6,5; los bicarbonatos realzan la acidez natural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'pH entre 6,5 y 7,5; los bicarbonatos en exceso neutralizan los ácidos y producen una taza insípida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'pH entre 7,5 y 8,5; los bicarbonatos aportan dulzor y cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'pH entre 6,0 y 7,0; los bicarbonatos son irrelevantes para el sabor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El pH debe estar entre 6,5 y 7,5. Los bicarbonatos en exceso actúan como tampón alcalino y neutralizan los ácidos del café, produciendo una taza "plana" o "apagada".',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la regla general para ajustar la molienda del café en función del método de preparación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'A mayor tiempo de contacto, más fina debe ser la molienda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La molienda debe ser siempre fina, independientemente del método.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La molienda debe ser siempre gruesa para evitar la sobre extracción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'A mayor tiempo de contacto, más gruesa debe ser la molienda.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. La regla es inversa: a mayor tiempo de contacto (como en la prensa francesa), más gruesa debe ser la molienda para evitar la sobre extracción de compuestos amargos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'En una cafetería de especialidad, el tipo de molino preferido por su uniformidad, baja generación de calor y durabilidad es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Molino de cuchillas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Molino de discos planos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Molino de fresas cónicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Molino de rodillos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Los molinos de fresas cónicas son el estándar profesional. Giran a baja velocidad (400-600 rpm), generan poco calor y producen muy pocos finos, lo que garantiza una extracción más limpia.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Para una extracción de espresso perfecta, la presión y la temperatura del agua deben ser:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '15 bares de presión y 75-80 °C de temperatura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '9 bares de presión y 92-96 °C de temperatura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '6 bares de presión y 85-90 °C de temperatura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '12 bares de presión y 88-92 °C de temperatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La presión ideal para la máquina de espresso es de 9 bares y la temperatura del agua debe estar entre 92 y 96 °C.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'El mantenimiento de la máquina de espresso incluye el proceso de backflush. ¿Cuál es la frecuencia correcta para el backflush con detergente especial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cada 6 meses, junto con el cambio de juntas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mensualmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Semanalmente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diariamente, al final de la jornada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El backflush con agua se realiza diariamente, pero el backflush con detergente (para eliminar aceites y residuos acumulados en el grupo) debe hacerse semanalmente.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el comportamiento ideal que indica una molienda y compactación adecuadas durante la extracción de un espresso?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las primeras gotas aparecen después de 10 segundos y el flujo es intermitente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El flujo es muy rápido, en menos de 20 segundos, y la crema es clara.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las primeras gotas aparecen entre 4 y 6 segundos y el flujo es constante en forma de "cola de ratón".',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El flujo es goteante, tarda más de 35 segundos y la crema es oscura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Ese es el comportamiento ideal, que indica una molienda y compactación adecuadas. El tiempo de extracción debe ser de 20-30 segundos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la relación café-agua (en peso) recomendada para un espresso tradicional y para un método de goteo (pour over), respectivamente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1:2 a 1:2,5 para espresso; 1:15 a 1:17 para filtrado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '1:15 a 1:17 para espresso; 1:2 a 1:2,5 para filtrado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1:10 para ambos métodos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '1:5 para espresso; 1:20 para filtrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Para espresso la relación es de 1:2 a 1:2,5, mucho más concentrada. Para métodos filtrados como el V60, la relación es de 1:15 a 1:17.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'En la técnica de cremado de leche con vaporizador, ¿cuál es la función de la fase de "estiramiento" (stretch)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sumergir la lanza profundamente para calentar la leche sin incorporar aire.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Crear un vórtice para integrar la espuma y cortar burbujas grandes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aspirar aire a la leche colocando la lanza justo debajo de la superficie, produciendo un sonido de siseo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Enfriar la jarra para que la espuma sea más estable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El estiramiento se realiza con la lanza justo debajo de la superficie para aspirar aire (sonido de siseo). La fase de texturizado es la que crea el vórtice.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Las figuras elementales del arte latte son el corazón y la roseta. ¿Cuál es la diferencia fundamental en el movimiento de vertido entre ambas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El corazón se forma con un movimiento oscilante de la jarra, mientras que la roseta requiere un chorro firme en el centro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ambas figuras se forman exactamente con el mismo movimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El corazón requiere un chorro firme en el centro y un corte hacia atrás, mientras que la roseta se forma con un movimiento oscilante de la jarra.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La roseta se forma primero y el corazón es un paso posterior para decorarla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Esa es la diferencia fundamental: el corazón se forma vertiendo un chorro firme en el centro, mientras que la roseta requiere un movimiento oscilante de la jarra para crear las hojas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Para obtener la microespuma más estable y sedosa, el barista debe utilizar:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Leche descremada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Leche semidescremada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Leche entera (3-4 % de grasa).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cualquier tipo de leche produce el mismo resultado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La leche entera (3-4 % grasa) produce la microespuma más estable y sedosa. La leche descremada genera burbujas grandes y espuma poco duradera.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la forma correcta de almacenar el café tostado en grano para preservar sus atributos sensoriales el mayor tiempo posible?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En un recipiente hermético y opaco, en un lugar fresco y alejado de la luz solar directa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En la nevera para mantenerlo fresco por más tiempo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En un recipiente de vidrio transparente y expuesto a la luz para que se mantenga seco.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En el congelador para detener el proceso de oxidación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El oxígeno, la humedad, el calor y la luz son los principales enemigos del café tostado. Se debe evitar la nevera, ya que la condensación daña el grano.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'La "regla de los 15" para garantizar la máxima calidad sensorial del café establece que:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El café verde dura 15 meses, el tostado 15 días y el molido 15 minutos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El café verde dura 15 semanas, el tostado 15 días y el molido 15 horas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El café verde dura 15 días, el tostado 15 horas y el molido 15 minutos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El café verde dura 15 meses, el tostado 15 semanas y el molido 15 días.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La regla es: 15 meses desde la cosecha (café verde), 15 días desde el tostado, 15 minutos desde la molienda.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La variedad castillo, desarrollada por cenicafé, es la más sembrada en colombia. ¿Cuál es su principal característica y su potencial de calidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es susceptible a la roya, pero tiene un excelente sabor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es una variedad de la especie robusta, con alto contenido de cafeína.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es de porte alto y baja productividad, por lo que se está dejando de sembrar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es resistente a la roya y ha demostrado alta calidad sensorial, superando los 85 puntos SCA.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. La variedad Castillo, lanzada en 2005, es resistente a la roya y ha demostrado un excelente potencial de calidad en taza (superior a 85 puntos SCA).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la función principal de un filtro de carbón activado en el sistema de tratamiento de agua para café?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina la dureza del agua (calcio y magnesio).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumenta el pH del agua para hacerla más alcalina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es el único filtro necesario para obtener agua de calidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Elimina el cloro y los malos sabores, pero no reduce la dureza del agua.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. El carbón activado mejora el sabor del agua, pero para reducir la dureza se necesita un ablandador o un sistema de ósmosis inversa con remineralización.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El sifón japonés es un método de extracción que se caracteriza por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar presión manual de 9 bares, similar a la máquina de espresso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ser un método de goteo (pour over) que utiliza filtros de papel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Funcionar por vacío: el agua asciende por presión de vapor y desciende al enfriarse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ser un método de inmersión donde el café se sumerge en agua caliente por varios minutos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. el sifón japonés es un método de extracción por vacío; no aplica presión manual, sino que el agua asciende por presión de vapor y desciende por vacío al apagar el calor.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'La preinfusión (o bloom) en los métodos de vertido manual (pour over) consiste en:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verter toda el agua de una vez para saturar el café rápidamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Humedecer el café con una pequeña cantidad de agua y esperar 30-45 segundos para que libere CO₂.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Agitar el café durante la extracción para aumentar la turbulencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un paso opcional que no afecta la calidad final de la taza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. la preinfusión permite que los gases (CO₂) escapen y que el agua penetre uniformemente en la cama de café, mejorando la extracción.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'El mantenimiento preventivo de la máquina de espresso incluye la inspección de juntas y empaques. ¿Cuándo se debe reemplazar la junta del grupo portafiltro?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De forma mensual, independientemente de su estado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Anualmente, como parte del mantenimiento general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cada dos años, ya que son piezas de larga duración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo cuando se detecta desgaste o fugas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. la inspección de juntas y empaques debe ser mensual, pero el reemplazo se hace cuando se detecta desgaste (fugas), no necesariamente cada mes.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La federación nacional de cafeteros (fnc) es una institución clave en colombia. ¿cuál de las siguientes no es una función de la fnc?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Representar los intereses de los productores de café.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar el fondo nacional del café.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Promover el café colombiano en el mundo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regular los precios internacionales del café.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. La FNC representa a los productores, administra el fondo nacional del café y promueve el café colombiano, pero no regula los precios internacionales del café.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
