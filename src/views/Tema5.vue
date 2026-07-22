<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Métodos de extracción de café

    img(data-aos="fade-up")(src="@/assets/curso/tema5/1.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Cada método de extracción - espresso, goteo, inmersión, vacío, presión manual- ofrece un perfil sensorial diferente y exige un dominio de variables específicas: molienda, temperatura, proporción agua-café, tiempo de contacto, turbulencia y tipo de filtro. Este capítulo presenta en detalle los procedimientos estandarizados para los métodos más utilizados en Colombia, incluyendo consejos para la resolución de problemas comunes y tablas comparativas que sirve como guía rápida.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        .p-3.px-4.bg-terciario-t5.rounded-3.mb-4.mb-lg-0
          p.mb-0 La elección del método de extracción no es arbitraria; cada método resalta atributos diferentes de un mismo lote de café. Por ejemplo, un café con notas florales y cítricas brillará más en un método de vertido (pour over) que en una prensa francesa, donde el cuerpo pesado y los aceites pueden opacar esas sutilezas. En cambio, un café con notas de chocolate y nueces, de cuerpo medio, puede ser excelente tanto en espresso como en Aeropress, e incluso en una cafetera moka bien calibrada. El tiempo de contacto entre el agua y el café es el factor discriminante fundamental: los métodos de contacto breve (espresso, de 20 a 30 segundos) requieren molienda fina y presión para extraer con eficiencia; los de contacto prolongado (prensa francesa, de cuatro a cinco minutos) requieren molienda gruesa para evitar la sobre extracción de compuestos amargos. Además, la presión aplicada modifica la emulsión de aceites: el espresso con nueve bares de presión crea la crema característica, rica en compuestos hidrofóbicos que aportan sensación en boca. El barista debe dominar no solo los procedimientos, sino los principios físicos y químicos que hay detrás, para poder innovar y adaptarse a distintos cafés y preferencias del consumidor. Esta comprensión también le permitirá ajustar variables como la temperatura y la turbulencia según el método elegido, garantizando así la consistencia en el servicio.
      .col-sm-8.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/2.png", alt="")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Procedimiento paso a paso (espresso doble, 18 g de café, 36 g de bebida):

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a10")
          div(titulo="Precalentamiento")
            p.mb-0 Encienda la máquina 20-30 minutos antes. Purge el grupo durante 2-3 segundos.
          div(titulo="Moler y dosar")
            p.mb-0 Muela la cantidad exacta (use balanza) en el portafiltro. Nivele la superficie con el dedo o con un distribuidor.
          div(titulo="Apisonar (tampeo)")
            p.mb-0 Aplique presión vertical de unos 10-15 g. La superficie debe quedar plana y nivelada, sin inclinaciones.
          div(titulo="Purgar el grupo")
            p.mb-0 Deje correr agua 1-2 segundos antes de insertar el portafiltro para eliminar posos residuales y estabilizar la temperatura.
          div(titulo="Extraer")
            p.mb-0 Inicie la bomba. Las primeras gotas deben aparecer entre 4-6 segundos. El flujo debe ser constante, como "cola de ratón". Detenga la extracción cuando alcance los 36 g (en balanza) o al observar aclaramiento de la crema (blonde).
          div(titulo="Servir")
            p.mb-0 Sirva inmediatamente en taza precalentada.
 
    .row.justify-content-center
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 9.
          span Diagnóstico de errores en espresso
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Problema observado
                th Posible causa
                th Corrección
            tbody
              tr(style="background-color: #F0F4EE")
                td Tiempo < 20 s, sabor ácido
                td Molienda gruesa
                td Ajustar molino más fino
              tr
                td Tiempo > 35 s, sabor amargo
                td Molienda fina
                td Ajustar molino más grueso
              tr(style="background-color: #F0F4EE")
                td Chorreo por un solo lado
                td Tamping inclinado
                td Practicar presión nivelada
              tr
                td Crema muy clara y fina
                td Café muy fresco (mucho CO₂) o muy viejo 
                td Ajustar molienda y dosis; usar café reposado 5-10 días post-tostón
              tr(style="background-color: #F0F4EE")
                td Ausencia de crema
                td Grano robusta o baja presión
                td Revisar bomba (9 bares)


    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a10")
          div(titulo="Métodos de goteo (<em>pour over</em>): V60, Chemex")
            p.mb-0 #[strong V60 (Hario)]:
            ul.checklist.ms-3
              li Molienda: media-fina (500-700 μm, similar a azúcar morena).
              li Relación: 1:15 o 1:16.
              li Temperatura: 93-96 °C.
            p.mb-0 #[strong Procedimiento]:
            ol.lista-ol.mb-3
              li.mb-0 
                span.text-bold 1. 
                | Colocar filtro de papel, enjuagar con agua caliente (elimina sabor a papel).
              li.mb-0 
                span.text-bold 2. 
                | Agregar 15 g de café, nivelar.
              li.mb-0 
                span.text-bold 3. 
                | Preinfusión (bloom): verter 40-50 g de agua en círculos, esperar 30-45 s (burbujeo).
              li.mb-0 
                span.text-bold 4. 
                | Vertido principal: verter lentamente hasta 250 g, manteniendo el nivel de agua. Realizar movimientos en espiral.
              li.mb-0 
                span.text-bold 5. 
                | Dejar gotear completamente (tiempo total 2:30-3:30 min).
            p.mb-0 #[strong Chemex]:
            ul.checklist.ms-3
              li Similar a V60, pero con filtro más grueso y molienda ligeramente más gruesa (media: 700-900 μm).
              li Resultado: taza extremadamente limpia, sin aceites.

          div(titulo="Método de inmersión: prensa francesa")
            ul.checklist.ms-3
              li Molienda: gruesa (1000-1200 μm, como pan rallado).
              li Relación: 1:15 o 1:16.
              li Temperatura: 93-95 °C.
            p.mb-0 #[strong Procedimiento]:
            ol.lista-ol.mb-3
              li.mb-0 
                span.text-bold 1. 
                | Precalentar la prensa.
              li.mb-0 
                span.text-bold 2. 
                | Agregar 18 g de café. 
              li.mb-0 
                span.text-bold 3. 
                | Verter 300 g de agua, remover para asegurar humectación total.
              li.mb-0 
                span.text-bold 4. 
                | Colocar el émbolo sin presionar, tapar y dejar reposar 4 minutos.
              li.mb-0 
                span.text-bold 4. 
                | Presionar el émbolo lentamente y servir inmediatamente.

          div(titulo="Aeropress: versatilidad y control de variables")
            p Permite dos técnicas principales: la tradicional (con el cilindro sobre la taza) y la invertida (para mayor tiempo de contacto). Se recomienda molienda media-fina a fina (según receta), relación 1:12 a 1:16, temperatura 85-96 °C. Tiempo de inmersión: 1-2 minutos.

            p.mb-0 Técnica invertida (por ejemplo, receta del campeón mundial)
            ul.checklist.ms-3
              li 15 g de café molido medio-fino.
              li 200 g de agua a 85 °C.
              li Verter y agitar, reposar 1 minuto, volver a agitar, voltear y presionar suavemente.

          div(titulo="Sifón japonés: extracción por vacío")
            p.mb-0 #[strong Procedimiento]:
            ol.lista-ol.mb-3
              li.mb-0 
                span.text-bold 1. 
                | Llenar el matraz inferior con agua caliente (acelera el proceso).
              li.mb-0 
                span.text-bold 2. 
                | Encender la fuente de calor; cuando el agua hierva, colocar el matraz superior con el filtro (tela o vidrio).
              li.mb-0 
                span.text-bold 3. 
                | El agua asciende por presión. Agregar el café (molienda media, similar a V60).
              li.mb-0 
                span.text-bold 4. 
                | Remojar 50-60 segundos, apagar el calor.
              li.mb-0 
                span.text-bold 5. 
                | El vacío succiona la bebida filtrada al matraz inferior.

          div(titulo="Cafetera moka (greca): preparación tradicional italiana")
            ul.checklist.ms-3
              li Molienda: media-fina (más gruesa que espresso).
            p.mb-0 #[strong Procedimiento]:
            ol.lista-ol.mb-3
              li.mb-0 
                span.text-bold 1. 
                | Llenar la cámara inferior con agua hasta la válvula de seguridad.
              li.mb-0 
                span.text-bold 2. 
                | Llenar la cesta sin compactar el café.
              li.mb-0 
                span.text-bold 3. 
                | Enroscar la cámara superior y colocar a fuego medio.
              li.mb-0 
                span.text-bold 4. 
                | Cuando salga la bebida con un sonido característico, apagar y servir.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Tabla comparativa de métodos

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 10.
          span Resumen de parámetros por método
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Método
                th Molienda
                th Relación (café:agua)
                th Temperatura
                th Tiempo
                th Perfil sensorial
            tbody
              tr(style="background-color: #F0F4EE")
                td Espresso
                td Fina
                td 1:2 - 1:2,5
                td 92-96 °C
                td 20-30 s
                td Concentrado, crema densa
              tr(style="background-color: #F0F4EE")
                td V60
                td Media-fina
                td 1:15 - 1:17
                td 93-96 °C
                td 2,5-3,5 min
                td Limpio, acidez brillante
              tr(style="background-color: #F0F4EE")
                td Chemex
                td Media
                td 1:15 - 1:17
                td 93-96 °C
                td 3-5 min
                td Muy limpio, sin aceites
              tr(style="background-color: #F0F4EE")
                td Prensa francesa
                td Gruesa
                td 1:15 - 1:17
                td 93-95 °C
                td 4-5 min
                td Cuerpo completo, aceites
              tr(style="background-color: #F0F4EE")
                td Aeropress
                td Media-fina
                td 1:12 - 1:16
                td 85-95 °C
                td 1-2 min
                td Variable, limpio
              tr(style="background-color: #F0F4EE")
                td Sifón
                td Media
                td 1:12 - 1:15
                td 90-95 °C
                td 4-6 min
                td Limpio, complejo
              tr(style="background-color: #F0F4EE")
                td Moka
                td Media-fina
                td 1:7 - 1:9
                td (vapor)
                td 3-5 min
                td Concentrado, similar a espresso
    
      .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
        .col-lg-9
          .p-3.px-4.bg-terciario-t5.rounded-3.mb-4.mb-lg-0
            p.mb-0 La tabla comparativa de métodos sirve como guía de referencia rápida para el barista, pero es importante recordar que los valores presentados son puntos de partida. La temperatura del agua debe ajustarse según el tueste: tuestes oscuros requieren temperaturas más bajas (90-92 °C) para no extraer amargores, mientras que tuestes claros se benefician de temperaturas más altas (94-96 °C). Del mismo modo, la molienda debe afinarse ligeramente si el café es muy fresco (con alta emisión de CO₂) para compensar la resistencia al flujo. El barista experimentado desarrolla un criterio propio basado en la observación constante del flujo, el color de la crema y la duración de la extracción. La tabla comparativa debe interpretarse como una herramienta de aprendizaje y no como un dogma inmutable.
        .col-sm-8.col-lg-3
          figure
            img(data-aos="fade-down-right", src="@/assets/curso/tema5/4.png", alt="")


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
