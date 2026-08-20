<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5.z-2
      .col-lg-9.order-1.order-lg-0
        p La preparación de una taza de café de calidad es el resultado de un proceso que inicia mucho antes de la extracción. Desde el cultivo y la cosecha hasta el beneficio y la tostión, cada etapa influye en las características sensoriales de la bebida. En Colombia, este proceso ha sido fortalecido por el trabajo de la Federación Nacional de Cafeteros y Cenicafé, instituciones que han impulsado el desarrollo técnico y científico del sector cafetero. 
        p Este componente formativo tiene como propósito desarrollar en el aprendiz los conocimientos y habilidades necesarios para comprender los fundamentos de la preparación del café y aplicar métodos de extracción que permitan resaltar sus atributos de aroma, sabor y calidad. Para ello, integra principios técnicos, buenas prácticas y procedimientos ampliamente utilizados en la industria cafetera. 
        .p-4.py-3.bg-azul.rounded-3
          p.mb-0 A lo largo de siete capítulos se abordarán temas relacionados con la historia y botánica del café, la calidad del agua, la molienda, los equipos de preparación, los principales métodos de extracción, el cremado de leche y las estrategias para la conservación del café. Estos conocimientos proporcionarán las bases para realizar preparaciones estandarizadas, garantizar la calidad de las bebidas y ofrecer una experiencia acorde con los estándares del servicio profesional. 
      .col-sm-6.col-lg-3.order-0.order-lg-1
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/intro/2.png", alt="")

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WQ3HQImnDc0" title="Calibración del molino y parámetros del espresso" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Calibración del molino y parámetros del espresso

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
