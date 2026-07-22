<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La preparación de una bebida de café de calidad depende del dominio de múltiples variables que comienzan en el origen del grano y culminan en la taza. Este componente formativo ha desarrollado los fundamentos botánicos del café (especies arábica y robusta, variedades colombianas como Castillo y Caturra), la historia del café en Colombia (Federación Nacional de Cafeteros, Cenicafé, Juan Valdez, Paisaje Cultural Cafetero) y los procesos de beneficio (lavado, natural y honey) que definen el perfil sensorial. Se abordó la importancia crítica del agua en la extracción, sus parámetros de calidad (TDS, pH, dureza, alcalinidad), los métodos de tratamiento y las proporciones óptimas café-agua. Luego se profundizó en la molienda: granulometría, tipos de molinos (cuchillas, discos planos, fresas cónicas) y el ajuste diario según el método de preparación. Se describieron los componentes de la máquina de espresso, los molinos a demanda, los equipos para métodos alternativos (V60, Chemex, prensa francesa, Aeropress, sifón, moka) y las rutinas de mantenimiento y limpieza (backflush, calibración, cambio de fresas). Posteriormente, se explicaron los métodos de extracción (espresso, vertido manual, inmersión, vacío, presión manual) con sus parámetros característicos y una tabla comparativa. Se detalló la técnica del cremado de leche (estiramiento, texturizado, microespuma, temperatura) y las figuras elementales del arte latte (corazón y roseta) con sus movimientos de vertido. Finalmente, se expusieron los principios de conservación del café tostado (oxígeno, humedad, calor, luz), las recomendaciones de almacenamiento, la regla de los 15 (meses desde cosecha, días desde tostado, minutos desde molienda) y la trazabilidad desde el origen hasta la taza, cerrando con la importancia de la frescura y el registro de lotes en cafetería. 
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Este componente formativo, Fundamentos y métodos de preparación del café, proporciona las bases conceptuales, históricas y técnicas para que el aprendiz desarrolle la capacidad de preparar bebidas de café mediante métodos espresso y alternativos bajo estrictos estándares de calidad sensorial. Su recorrido formativo inicia con la botánica, las variedades colombianas (Castillo, Caturra, Colombia) y los procesos de beneficio (lavado, natural, honey), se adentra en la calidad del agua (TDS, pH, dureza, alcalinidad), la molienda (granulometría, tipos de molinos, calibración), la operación y mantenimiento de maquinaria (máquina de espresso, métodos alternativos), y finaliza con los métodos de extracción, el cremado de leche, el arte latte y los principios de conservación, conformando un sistema de conocimiento integral. Su apropiación es el cimiento sobre el cual se construye la aplicación práctica de la técnica para garantizar los atributos sensoriales como pilar fundamental de la preparación profesional del café")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
