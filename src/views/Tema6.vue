<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Cremado de leche y arte latte
    img(data-aos="fade-up")(src="@/assets/curso/tema6/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow-sm
          p.mb-0 El cremado de leche es una de las habilidades más visibles del barista. No solo añade textura y dulzura a las bebidas con leche (#[em capuchino, latte, flat white]), sino que también permite la creación de arte latte, un elemento de valor agregado y de disfrute visual para el cliente. Este capítulo explica la ciencia detrás de la emulsión de la leche, la técnica para lograr una micro espuma perfecta, las temperaturas de servicio idóneas y los vertidos básicos para realizar corazones y rosetas. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Composición de la leche y su comportamiento al calentarse 

    p.mb-4 La leche de vaca es una emulsión de grasa en agua que contiene proteínas (caseínas y suero proteico), lactosa (azúcar), vitaminas y minerales. Al calentarla e inyectar vapor, ocurren dos procesos fundamentales:
  
    .row.align-items-stretch.justify-content-center.mb-4
      .col-sm-8.col-lg-6.col-xl-5.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema6/2.png' alt='')
          .tarjeta.bg-terciario-t5
            .p-4.py-3
              p.mb-0 Desnaturalización de proteínas: Las proteínas se despliegan y forman una red que atrapa burbujas de aire.
      .col-sm-8.col-lg-6.col-xl-5
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema6/3.png' alt='')          
          .tarjeta.bg-terciario-t5
            .p-4.py-3
              p.mb-0 Emulsión de la grasa: La grasa ayuda a dar cuerpo y brillo a la espuma.

    .p-4.bg-contenido-a5.rounded-4.mb-4.mb-lg-5
      p.mb-0 La leche entera (3-4 % grasa) produce la micro espuma más estable y sedosa. La leche descremada produce burbujas grandes y espuma poco duradera. Las leches vegetales requieren emulsionantes añadidos y temperaturas más bajas.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Técnica de cremado con vaporizador: temperatura, textura y micro espuma

    p Material: Jarra de acero inoxidable (preferiblemente con pico), termómetro (opcional), lanza de vapor.
    p Procedimiento:
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-xl-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/4.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        SlyderA(tipo="b").p-4.tarjeta.tarjeta--gris
          .row.justify-content-center.align-items-center
            .col-4.col-sm-3.col-lg-2
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema6/5.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              p.mb-4.mb-lg-0 Enfriar la jarra (puede refrigerarse). Verter leche fría hasta la base del pico.
          .row.justify-content-center.align-items-center
            .col-4.col-sm-3.col-lg-2
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema6/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              p.mb-4.mb-lg-0 Purgar la lanza para eliminar condensación.
          .row.justify-content-center.align-items-center
            .col-4.col-sm-3.col-lg-2
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema6/7.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              p.mb-4.mb-lg-0 Introducir la lanza justo debajo de la superficie de la leche, cerca del borde de la jarra. Abrir el vapor completamente.
          .row.justify-content-center.align-items-center
            .col-4.col-sm-3.col-lg-2
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema6/8.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              p.mb-4.mb-lg-0 Fase de estiramiento (stretch): Se escucha un chirrido suave (aspiración de aire). Dura 3-6 segundos. La leche aumenta ligeramente de volumen.
          .row.justify-content-center.align-items-center
            .col-4.col-sm-3.col-lg-2
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema6/9.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              p.mb-4.mb-lg-0 Fase de texturizado: Hundir la lanza hasta que quede sumergida unos 2-3 cm. Se debe formar un vórtice (remolino) que integra la espuma y corta burbujas grandes.
          .row.justify-content-center.align-items-center
            .col-4.col-sm-3.col-lg-2
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema6/10.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              p.mb-4.mb-lg-0 Control de temperatura: Cuando la jarra esté caliente al tacto (aproximadamente 55-65 °C), cerrar el vapor. No superar los 70 °C.
          .row.justify-content-center.align-items-center
            .col-4.col-sm-3.col-lg-2
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema6/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              p.mb-4.mb-lg-0 Limpiar la lanza con un paño húmedo y purgar de nuevo.
          .row.justify-content-center.align-items-center
            .col-4.col-sm-3.col-lg-2
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema6/11.png", alt="" data-aos="zoom-in-down")
            .col-lg-8
              p.mb-4.mb-lg-0 Golpear la jarra sobre la mesa para eliminar burbujas grandes y girar suavemente para homogeneizar.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 10.
          span Errores frecuentes y corrección
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Problema
                th Causa
                th Solución
            tbody
              tr(style="background-color: #F0F4EE")
                td Espuma con burbujas grandes
                td Demasiado tiempo de estiramiento
                td Aspirar solo 3 segundos
              tr
                td Leche muy caliente (>70 °C)
                td Texturizado excesivo
                td Usar termómetro o detenerse antes
              tr(style="background-color: #F0F4EE")
                td Sin vórtice
                td Lanza en posición incorrecta
                td Inclinar jarra y acercar boquilla al borde
              tr
                td Leche fría, sin espuma
                td No se aspiró aire
                td Asegurar que la punta esté en la superficie al inicio

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Vertido básico y figuras elementales del arte latte

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p.mb-4.mb-lg-0 El arte latte, o latte art, no es un adorno superficial, sino la culminación visible de una técnica de cremado perfecta y la prueba de que la leche ha sido texturizada con precisión. Lejos de ser un simple "dibujo", cada figura refleja la correcta emulsión de la leche y la maestría en el manejo de la jarra. Aunque se debate su origen exacto, el arte latte moderno nació en la cultura del café de especialidad de Estados Unidos a finales de los años ochenta. Baristas como David Schomer, de Espresso Vivace en Seattle, popularizaron el vertido de la roseta, observando que un movimiento oscilante de la jarra al final del vertido creaba un patrón similar a las hojas de un helecho. Desde entonces, el corazón y la roseta se han convertido en los dos pilares fundamentales sobre los que se construyen todas las demás figuras.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/12.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.order-1.order-lg-0
        figure
          img(src="@/assets/curso/tema6/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-8.order-0.order-lg-1
        p.mb-4.mb-lg-0 El corazón es la primera figura que un barista debe dominar. Su ejecución no depende de movimientos complejos, sino de un control absoluto del caudal y la altura del vertido. Se requiere una leche con microespuma sedosa y brillante. Su nombre no es casual: su forma redonda y simétrica representa la perfección del punto de vertido y la estabilidad de la emulsión. En la cultura del café, un corazón bien definido es el sello de un barista que ha interiorizado los fundamentos del cremado. Para lograrlo, se vierte desde altura media hasta llenar dos tercios de la taza, luego se acerca la jarra a la superficie y se vierte un chorro firme en el centro; cuando la mancha blanca alcanza el tamaño deseado, se mueve la jarra hacia atrás y se corta con un movimiento rápido hacia adelante.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p.mb-4.mb-lg-0 La roseta, en cambio, exige un movimiento más dinámico. Su origen está ligado al vaivén natural de la jarra, un gesto que, bien ejecutado, produce una serie de hojas que se despliegan a lo largo de la taza. Es la figura que mejor representa el concepto de "flujo": el barista no "dibuja" las hojas, sino que sugiere el patrón mediante el balanceo rítmico del chorro de leche, permitiendo que la gravedad y la tensión superficial hagan el resto. Cada roseta es única, y su asimetría controlada es parte de su belleza orgánica. Para realizarla, se vierte desde altura media hasta la mitad de la taza, luego se acerca la jarra y se vierte un punto blanco, moviendo la jarra suavemente de un lado a otro mientras se avanza y se retrocede, finalizando con un corte hacia adelante.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/12.png", alt="")

    .row.justify-content-center
      .col-xl-10
        .tarjeta.color-primario.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.d-none.d-sm-block
              img(src="@/assets/curso/tema6/15.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Explore los siguientes videos y descubra cómo realizar los diseños más representativos del arte latte: el corazón y la rosetta. Indague cada etapa del proceso y reconozca las técnicas que permiten lograr un acabado limpio y uniforme: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-contenido.texto-blanco.d-block(href="https://www.youtube.com/watch?v=TwC6TN9YKU4" target="_blank")
                    span Abrir video
                    i.fas.fa-file-video
                  a.boton.color-acento-contenido.texto-blanco.d-block(href="https://www.youtube.com/watch?v=HlPyr8-IQm8" target="_blank")
                    span Abrir video
                    i.fas.fa-file-video















  </template>

<script>
export default {
  name: 'Tema6',
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
