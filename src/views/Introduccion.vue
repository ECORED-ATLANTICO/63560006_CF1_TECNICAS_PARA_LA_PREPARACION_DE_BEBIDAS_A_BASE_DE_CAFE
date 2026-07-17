<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p.mb-0 La preparación de una taza de café de excepcional calidad es el punto de llegada de una compleja cadena de valor que involucra cerca de 560.000 familias cafeteras colombianas, distribuidas en más de 500 municipios del país. Colombia, reconocida mundialmente por la producción de cafés suaves lavados de alta calidad, cuenta con una institucionalidad sólida representada por la Federación Nacional de Cafeteros (FNC), fundada en 1927, y el centro nacional de investigaciones de café (Cenicafé), creado en 1938, que han dedicado décadas a la investigación científica para mejorar la productividad y la calidad del grano. El presente componente formativo, Fundamentos y métodos de preparación del café, se ha diseñado con base en los avances técnicos generados por estas instituciones y en las prácticas estandarizadas por la industria nacional, con el propósito de desarrollar en el aprendiz las competencias necesarias para preparar bebidas de café que preserven y exalten los atributos sensoriales cuidadosamente desarrollados desde la semilla hasta la taza.
    
    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-lg-9.order-1.order-lg-0
        .p-4.bg-azul.rounded-3
          p.mb-0 Para alcanzar este objetivo, el componente se estructura en torno a siete ejes temáticos fundamentales. Inicia con el estudio de la botánica y la historia del café, con énfasis en el contexto colombiano, y los procesos de transformación del grano desde la cosecha hasta el beneficio. A continuación, aborda la calidad del agua, un componente que representa hasta el 98 % del volumen de una taza de café filtrado y cuyas características fisicoquímicas determinan en gran medida el éxito de la extracción. Luego se adentra en los fundamentos de la molienda, reconociendo que la distribución del tamaño de partícula es uno de los factores más críticos para lograr una extracción balanceada. Posteriormente, se describen los equipos utilizados en la preparación, desde la máquina de espresso hasta los métodos alternativos, haciendo énfasis en las rutinas de mantenimiento y limpieza que garantizan la inocuidad y la vida útil de los equipos. Los capítulos centrales se dedican a los diferentes métodos de extracción y a la técnica del cremado de leche, pilares del oficio del barista. Finalmente, se abordan los principios de conservación del café y la importancia de la trazabilidad y la frescura.
      .col-sm-6.col-lg-3.order-0.order-lg-1
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/intro/2.png", alt="")
    


    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
