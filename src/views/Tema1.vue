<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El café: botánica, historia y transformación

    img(data-aos="fade-up")(src="@/assets/curso/tema1/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow-sm
          p.mb-0 El conocimiento del café comienza por entender su naturaleza biológica, su trayectoria histórica y los procesos que convierten un fruto rojo en el grano tostado que se muele a diario. Este capítulo proporciona los cimientos sobre los cuales se asienta toda práctica profesional posterior.
  
    .bg-terciario-t5.p-3.rounded-2.mb-4
      .row.justify-content-center.align-items-center
        .col-sm-4.col-lg-2
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema1/2.png", alt="" data-aos="zoom-in-down")
        .col-lg-10
          h5 Origen y botánica del café
          p.mb-0 El café es la semilla contenida en el fruto del cafeto, una planta perteneciente al género Coffea, de la familia de las rubiáceas. El fruto es una drupa que se asemeja a una cereza, compuesta por varias capas que cumplen funciones específicas de protección y nutrición de la semilla. Desde el exterior hacia el interior se distinguen:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-12.col-lg-6
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-6
        SlyderA(tipo="b").p-4.py-xl-5.tarjeta.tarjeta--gris
          .row.justify-content-center
            .col-lg-10
              p.mb-0.py-xl-3 Epicarpio: la capa externa, o cáscara, que al madurar cambia de color verde a rojo intenso o amarillo, indicando el punto óptimo de cosecha.
          .row.justify-content-center
            .col-lg-10
              p.mb-0.py-xl-3 Mesocarpio: el mucílago, una capa gelatinosa y azucarada que envuelve el pergamino y que es fundamental en los procesos de beneficio, especialmente en los métodos natural y honey.
          .row.justify-content-center
            .col-lg-10
              p.mb-0.py-xl-3 Endocarpio: el pergamino, una envoltura dura y fibrosa que protege la semilla.
          .row.justify-content-center
            .col-lg-10
              p.mb-0.py-xl-3 Película plateada: una membrana delgada que recubre directamente la semilla.
          .row.justify-content-center
            .col-lg-10
              p.mb-0.py-xl-3 Endospermo: la semilla propiamente dicha, conocida comercialmente como grano de café, generalmente presenta dos unidades por fruto, enfrentadas por sus caras planas.
          
    p.mb-4 El café es la semilla contenida en el fruto del cafeto, una planta perteneciente al género Coffea, de la familia de las rubiáceas. El fruto es una drupa que se asemeja a una cereza, compuesta por varias capas que cumplen funciones específicas de protección y nutrición de la semilla. Desde el exterior hacia el interior se distinguen:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .p-3.bg-terciario-t5.rounded-2.mb-4.mb-lg-0
          p.mb-0 El ciclo de vida del cafeto es un proceso que demanda paciencia y cuidado. Desde la siembra del colino, la planta tarda entre año y medio y dos años en dar sus primeros frutos, y alcanza su máximo rendimiento productivo entre los tres y los seis años. La floración está influida por la distribución de las lluvias; en regiones como el Eje Cafetero, con patrón bimodal, se presentan dos cosechas principales al año, mientras que en zonas de altiplano la cosecha es más concentrada. El conocimiento de este ciclo permite al barista valorar la estacionalidad del café fresco y comprender por qué los cafés de cosecha principal suelen exhibir perfiles sensoriales más complejos. Cada cereza madura, recolectada a mano por los caficultores, es el resultado de meses de trabajo y de un ecosistema que incluye árboles de sombra, biodiversidad asociada y cuidados constantes.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/4.png", alt="")
          
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/5-mob.png", alt="")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/5.png", alt="")

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
