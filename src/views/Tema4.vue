<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Maquinaria y equipos para la preparación de café

    img(data-aos="fade-up")(src="@/assets/curso/tema4/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow-sm.banner-text--green
          p.mb-0 La máquina de espresso y el molino son las herramientas centrales del barista. Su correcto funcionamiento, limpieza y mantenimiento son condiciones indispensables para obtener una bebida de calidad consistente. Este capítulo describe los componentes principales de estos equipos, los tipos de máquinas según su caldera y grado de automatización, así como las rutinas de limpieza diaria, semanal y periódica que garantizan la inocuidad y la vida útil de los equipos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Máquina de espresso: componentes y funcionamiento

    p.mb-4 La máquina de espresso profesional se compone de:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        SlyderA(tipo="b").p-4.py-xl-5.tarjeta.tarjeta--gris
          .row.justify-content-center
            .col-lg-10
              h4 Caldera o intercambiador de calor
              p Calienta el agua y genera vapor. Las máquinas de doble caldera permiten extraer espresso y vaporizar leche simultáneamente.
          .row.justify-content-center
            .col-lg-10
              h4 Bomba (rotativa o vibratoria)
              p Genera la presión de 9 bares. Las bombas rotativas son más silenciosas y duraderas.
          .row.justify-content-center
            .col-lg-10
              h4 Grupo porta filtro
              p Conjunto que incluye el porta filtro, la cesta, el difusor y la junta. En grupos de calidad, la temperatura se mantiene estable mediante sistemas termostáticos o de circulación de agua.
          .row.justify-content-center
            .col-lg-10
              h4 Manómetros
              p Indican la presión de la bomba y de la caldera.
          .row.justify-content-center
            .col-lg-10
              h4 Lanza de vapor y agua caliente
              p Permite generar vapor para texturizar la leche y suministrar agua caliente para la preparación de bebidas e infusiones.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/3.png', alt='')
          .tarjeta.p-4.bg-terciario-t5(x="90%" y="80%" numero="1")
            p.mb-0 #[strong 1. Bandeja de goteo]. 
          .tarjeta.p-4.bg-terciario-t5(x="20%" y="80%" numero="2")
            p.mb-0 #[strong 2. Bomba]. 
          .tarjeta.p-4.bg-terciario-t5(x="30%" y="40%" numero="3")
            p.mb-0 #[strong 3. Caldera].  
          .tarjeta.p-4.bg-terciario-t5(x="5%" y="70%" numero="4")
            p.mb-0 #[strong 4. Conexión de red].  
          .tarjeta.p-4.bg-terciario-t5(x="72%" y="40%" numero="5")
            p.mb-0 #[strong 5. Grupo portafiltro]. 
          .tarjeta.p-4.bg-terciario-t5(x="45%" y="30%" numero="6")
            p.mb-0 #[strong 6. Intercambiador de calor]. 
          .tarjeta.p-4.bg-terciario-t5(x="83%" y="35%" numero="7")
            p.mb-0 #[strong 7. Lanza de agua caliente]. 
          .tarjeta.p-4.bg-terciario-t5(x="95%" y="45%" numero="8")
            p.mb-0 #[strong 8. Lanza de vapor]. 
          .tarjeta.p-4.bg-terciario-t5(x="83%" y="15%" numero="9")
            p.mb-0 #[strong 9. Manómetros]. 
          .tarjeta.p-4.bg-terciario-t5(x="30%" y="75%" numero="10")
            p.mb-0 #[strong 10. Rotario volumétrico bomba ]. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Molinos de café: dosificadores y de fresas

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p Ya se ha abordado el mecanismo de fresas. En cuanto a la dosificación, se diferencian:
        p Molinos dosificadores: almacenan el café molido en una cámara y lo liberan mediante una palanca. No son recomendables porque el café molido se oxida rápidamente.
        p.mb-4.mb-lg-0 Molinos a demanda (on demand / grind-by-weight): muelen directamente la cantidad programada en gramos justo antes de la extracción. Son la mejor opción para preservar la frescura.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/4.png", alt="")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Métodos alternativos: equipos y utensilios

    p.mb-4 Además de la máquina de espresso, una cafetería completa debe ofrecer métodos alternativos. Cada uno requiere su equipo específico y su técnica:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/5.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-gris-sistema.p-4
            .row.justify-content-center.mb-3
              .col-4.col-xl-6
                img(src='@/assets/curso/tema4/6.png' alt='')
            h4.mb-4 Pour over (V60, Chemex, Kalita Wave)
            p Cono, filtros de papel (blanqueados o sin blanquear), tetera de cuello de cisne, jarra de vidrio.
          .tarjeta.bg-gris-sistema.p-4
            .row.justify-content-center.mb-3
              .col-4.col-xl-6
                img(src='@/assets/curso/tema4/7.png' alt='')
            h4.mb-4 Prensa francesa
            p Cilindro de vidrio o acero, émbolo con malla, tapa.
          .tarjeta.bg-gris-sistema.p-4
            .row.justify-content-center.mb-3
              .col-4.col-xl-6
                img(src='@/assets/curso/tema4/8.png' alt='')
            h4.mb-4 Aeropress
            p Cilindro de plástico, pistón, filtros de papel o metálico.
          .tarjeta.bg-gris-sistema.p-4
            .row.justify-content-center.mb-3
              .col-4.col-xl-6
                img(src='@/assets/curso/tema4/9.png' alt='')
            h4.mb-4 Sifón japonés
            p Matraz inferior (agua), matraz superior (café), filtro de tela o vidrio, fuente de calor.
          .tarjeta.bg-gris-sistema.p-4
            .row.justify-content-center.mb-3
              .col-4.col-xl-6
                img(src='@/assets/curso/tema4/10.png' alt='')
            h4.mb-4 Cafetera moka (greca)
            p Cuerpo inferior, cesta, cuerpo superior; generalmente de aluminio.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Mantenimiento básico y rutinas de limpieza

    .p-4.bg-terciario-t5.rounded-4.mb-4.mb-lg-5
      p.mb-0 La falta de limpieza es una de las causas principales de sabores indeseables (rancios, amargos, metálicos) y de fallos técnicos. Se debe establecer un plan de mantenimiento.
  
    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 8.
          span Rutina de mantenimiento de equipos
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Equipo
                th Tarea
                th Frecuencia
                th Observaciones
            tbody
              tr(style="background-color: #F0F4EE")
                td Portafiltro y cesta
                td Cepillar y enjuagar
                td Después de cada café
                td Evitar que se acumulen residuos carbonizados
              tr
                td Grupo de máquina
                td Purgar agua
                td Antes de cada café
                td Elimina posos y estabiliza temperatura
              tr(style="background-color: #F0F4EE")
                td Lanza de vapor
                td Limpiar exterior con paño húmedo
                td Después de cada uso
                td Evita leche quemada que atraiga bacterias
              tr
                td Máquina de espresso
                td Backflush con agua
                td Diario (final de jornada)
                td Limpieza superficial del circuito hidráulico
              tr(style="background-color: #F0F4EE")
                td Máquina de espresso
                td Backflush con detergente
                td Semanal
                td Elimina aceites y café acumulado
              tr
                td Molino
                td Limpieza de tolva y fresas
                td Diario (aspirar o cepillar)
                td Previene mezcla con café viejo
              tr(style="background-color: #F0F4EE")
                td Molino
                td Calibración de molienda
                td Diario (antes del servicio)
                td Ajustar según humedad y temperatura
              tr
                td Filtros de agua
                td Reemplazo
                td Según fabricante (3-12 meses)
                td Mantener calidad del agua
              tr(style="background-color: #F0F4EE")
                td Juntas y empaques
                td Inspección
                td Mensual
                td Reemplazar si hay fugas
              tr
                td Fresas del molino
                td Reemplazo
                td Cada 500-1000 kg de café
                td Desgaste afecta uniformidad

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Procedimiento de backflush con detergente

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-12.col-lg-6
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-6
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Preparar el portafiltro")
            p.mb-0 Retirar la cesta del portafiltro y colocar el disco ciego.
          div(numero="2" titulo="Agregar el detergente")
            p.mb-0 Agregar 1-2 g de detergente especial (cafiza) sobre el disco.
          div(numero="3" titulo="Iniciar el backflush")
            p.mb-0 Insertar el portafiltro y accionar la bomba durante 10 s.
          div(numero="4" titulo="Repetir el ciclo")
            p.mb-0 Esperar 10 s. Repetir 5 veces.
          div(numero="5" titulo="Enjuague final")
            p.mb-0 Retirar el portafiltro, enjuagar y realizar 3 ciclos de backflush solo con agua para eliminar residuos de detergente.











</template>

<script>
export default {
  name: 'Tema4',
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
