<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 La molienda del café 

    img(data-aos="fade-up")(src="@/assets/curso/tema3/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow-sm
          p.mb-0 La molienda es el puente entre el grano tostado y el agua. Es la operación que decide qué tan rápido y qué compuestos se extraerán. Una molienda mal ajustada es la principal causa de tazas desbalanceadas: ácidas o amargas, aguadas o astringentes. Este capítulo explica los fundamentos de la molienda, la importancia de la uniformidad (granulometría), los tipos de molinos disponibles en el mercado colombiano y cómo ajustar la molienda según el método de preparación elegido. 
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Concepto e importancia de la molienda en la extracción 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p.mb-3 Cuando se muele un grano de café, se aumenta exponencialmente la superficie de contacto con el agua. Un grano entero de unos 100 mg tiene una superficie aproximada de 0,5 cm². Al molerlo fino (partículas de 400 micras), la superficie total puede alcanzar los 5.000 cm². Este enorme aumento facilita la disolución de compuestos solubles: ácidos clorogénicos, cafeína, azúcares, lípidos y melanoidinas.
        .bg-primario-p10.p-4.rounded-4
          p.mb-0 Sin embargo, no todos los compuestos se disuelven a la misma velocidad. Los ácidos y la cafeína son muy solubles y se liberan rápidamente; los azúcares y las melanoidinas lo hacen más lentamente. Si la molienda es muy gruesa, el agua pasa rápidamente y extrae solo los compuestos más solubles, resultando en una taza ácida y aguada (subextracción). Si la molienda es muy fina, el agua permanece demasiado tiempo en contacto con el café, extrayendo compuestos amargos y astringentes (sobre extracción). 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Granulometría: definición y medición 

    .p-4.bg-terciario-t5.rounded-4.mb-4.mb-lg-5
      p.mb-0 La granulometría es la distribución del tamaño de partículas en el café molido. Idealmente, todas las partículas deberían tener un tamaño similar (distribución estrecha). En la práctica, siempre hay partículas más pequeñas (finos) y más grandes (gruesos). Los molinos de baja calidad producen una distribución amplia, con muchos finos que generan amargor. 

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 6.
          span Clasificación de tamaños de partícula (micras).
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Denominación 
                th Rango (μm) 
                th Referencia visual 
            tbody
              tr(style="background-color: #F0F4EE")
                td Extrafina
                td < 200 
                td Polvo de talco
              tr(style="background-color: #F0F4EE")
                td Fina
                td 200 - 400 
                td Azúcar refinada
              tr(style="background-color: #F0F4EE")
                td Media-fina
                td 400 - 700 
                td Arena fina
              tr(style="background-color: #F0F4EE")
                td Media
                td 700 - 1000 
                td Sal de mesa gruesa
              tr(style="background-color: #F0F4EE")
                td Gruesa
                td 1000 - 1400 
                td Pan rallado
              tr(style="background-color: #F0F4EE")
                td Extra gruesa
                td > 1400 
                td Hojuelas de avena

    .p-4.bg-terciario-t5.rounded-4.mb-4.mb-lg-5
      p.mb-0 Medición en cafetería: se puede usar un analizador manual de tamices como el Kruve. Para ajustes rápidos, basta con observar el flujo de la extracción (en espresso, tiempo de 20-30 s; en filtro, tiempo de goteo de 2-4 min). 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Tipos de molinos y su incidencia en la consistencia 
    
    .p-4.bg-secundario-s20.rounded-4.mb-4.mb-lg-5
      p.mb-0 La elección del molino es una de las decisiones más importantes en una cafetería o en el ámbito doméstico, pues de él depende directamente la uniformidad de la molienda y, por ende, la calidad de la extracción. A continuación se describen los tres tipos principales de molinos, desde los menos recomendados hasta el estándar profesional, incorporando hallazgos de investigaciones y referentes internacionales validados por la Federación Nacional de Cafeteros. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Molinos de cuchillas (no recomendados para uso profesional) 

    p.mb-5 Estos molinos, también llamados "molinos de hélice", funcionan mediante una cuchilla giratoria de alta velocidad (entre 20.000 y 30.000 rpm) que corta y golpea los granos de café de manera aleatoria. Su diseño es similar al de una licuadora doméstica. Se caracterizan por: 

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/3.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Molienda extremadamente heterogénea
            p.mb-0 La cuchilla no produce partículas de tamaño controlado; se obtiene una mezcla de polvo fino (finos) y fragmentos grandes (gruesos) que extraerán de manera desigual.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Sobrecalentamiento del café
            p.mb-0 La alta fricción eleva la temperatura de la molienda hasta 50-60 °C o más, lo que volatiliza los aceites esenciales y compuestos aromáticos, achatando el perfil sensorial.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/5.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Oxidación acelerada
            p.mb-0 Al generar mucho polvo, la superficie de contacto con el oxígeno aumenta drásticamente, haciendo que el café pierda su frescura en cuestión de minutos.


    .bg-terciario-t5.p-4.rounded-4.mb-4.mb-lg-5
      p.mb-0 Aunque son económicos (desde 30.000 COP hasta 150.000 COP), no son aptos para ningún método de preparación que busque calidad. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Molinos de discos (muelas planas) 

    p.mb-5 Son molinos eléctricos que utilizan dos discos metálicos o cerámicos enfrentados, cuyas superficies están talladas con estrías radiales o concéntricas. Los granos caen entre los discos, y al girar uno de ellos (el otro permanece fijo) son triturados por compresión y cizalladura. Características técnicas: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        TabsA.color-acento-botones
          .tarjeta.row.align-items-center.justify-content-center.bg-terciario-t5.p-4.py-5(titulo="Velocidad de giro")
            .col-lg-8
              h4 Velocidad de giro
              p Entre 900 y 1.400 rpm (más rápida que los cónicos, pero menor que las cuchillas). 
            .col-lg-2
              figure
                img(src="@/assets/curso/tema3/7.svg", alt="alt")
          .tarjeta.row.align-items-center.justify-content-center.bg-terciario-t5.p-4.py-5(titulo="Ajuste de molienda")
            .col-lg-8
              h4 Ajuste de molienda
              p Se puede ajustar fácilmente desde 0 (extremadamente fino) hasta 10 (extremadamente grueso). 
            .col-lg-2
              figure
                img(src="@/assets/curso/tema3/8.svg", alt="alt")
          .tarjeta.row.align-items-center.justify-content-center.bg-terciario-t5.p-4.py-5(titulo="Uniformidad")
            .col-lg-8
              h4 Uniformidad
              p Media. La distribución de partículas es aceptable para métodos filtrados, pero produce una cantidad moderada de finos que pueden causar algo de amargor en espresso. 
            .col-lg-2
              figure
                img(src="@/assets/curso/tema3/9.svg", alt="alt")
          .tarjeta.row.align-items-center.justify-content-center.bg-terciario-t5.p-4.py-5(titulo="Generación de calor")
            .col-lg-8
              h4 Generación de calor
              p Moderada. Si se muelen grandes volúmenes de forma continua, los discos se calientan, lo que puede degradar ligeramente los aromas. 
            .col-lg-2
              figure
                img(src="@/assets/curso/tema3/10.svg", alt="alt")
          .tarjeta.row.align-items-center.justify-content-center.bg-terciario-t5.p-4.py-5(titulo="Mantenimiento")
            .col-lg-8
              h4 Mantenimiento
              p Los discos deben reemplazarse cada 300-500 kg de café molido (dependiendo de la dureza del grano y la frecuencia de uso). 
            .col-lg-2
              figure
                img(src="@/assets/curso/tema3/11.svg", alt="alt")

    .row.justify-content-center
      .col-xl-10
        .tarjeta.bg-terciario-t10.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.d-none.d-sm-block.p-0
              img.w-72(src="@/assets/curso/tema3/12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Aplicación recomendada:
                  p.mb-0 Uso doméstico o en cafeterías de muy bajo volumen (menos de 2 kg/día) para métodos de filtro (V60, Chemex, prensa francesa). No son ideales para espresso por la falta de precisión en los ajustes finos y la presencia de finos. 
                  p Ejemplo Molino Eureka Mignon Manuale véase.
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-contenido.texto-blanco.d-block(href="https://www.homecenter.com.co/homecenter-co/product/3015070/molino-eureka-mignon-manuale-color-negro/3015070/" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Molinos de fresas cónicas (estándar profesional) 

    p.mb-4 Son el tipo de molino preferido por baristas profesionales y tostadores de especialidad. Su mecanismo consiste en un cono interior (rotor) que gira dentro de una carcasa exterior fija (estator), ambos con estrías en forma de espiral o muescas. El café es triturado por compresión gradual a medida que avanza hacia la salida. Sus atributos técnicos son superiores: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        SlyderA(tipo="b").p-4.py-xl-5.tarjeta.tarjeta--gris
          .row.justify-content-center
            .col-lg-10
              h4  Velocidad de giro reducida
              p.mb-0 Entre 400 y 600 rpm, lo que minimiza el calentamiento por fricción. La temperatura del café molido rara vez supera los 35 °C. 
          .row.justify-content-center
            .col-lg-10
              h4  Distribución de partículas muy estrecha
              p.mb-0 La relación entre el tamaño medio de partícula y la cantidad de finos es la mejor entre todos los tipos. Esto se traduce en una extracción más limpia, sin amargores ni astringencias. 
          .row.justify-content-center
            .col-lg-10
              h4 Amplio rango de ajuste
              p.mb-0 Desde 100 micras para espresso turco hasta más de 1.200 micras para cold brew. el ajuste es micrométrico, permitiendo cambios de apenas 5-10 micras. 
          .row.justify-content-center
            .col-lg-10
              h4 Menor generación de estática
              p.mb-0 Al trabajar a baja velocidad, se reduce la electricidad estática que hace que el café molido salga proyectado y se desperdicie. 
          .row.justify-content-center
            .col-lg-10
              h4 Durabilidad
              p.mb-0 Las fresas cónicas de acero templado o titanio pueden durar entre 800 y 1.500 kg de café molido, dependiendo del fabricante y del mantenimiento. 

    .row.justify-content-center
      .col-xl-10
        .tarjeta.bg-terciario-t10.p-4.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.d-none.d-sm-block.p-0
              img.w-72(src="@/assets/curso/tema3/12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Aplicación recomendada:
                  p.mb-0 Todo tipo de métodos, especialmente espresso y aeropress. Son indispensables en cafeterías de especialidad, tostadores y laboratorios de control de calidad. 
                  p Ejemplos Mazzer Kold S, Vease.  
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-contenido.texto-blanco.d-block(href="https://almanegra.cafe/products/molino-mazzer-kold-s?srsltid=AfmBOoqsxzaKp9lsq0inE0dztWjn7wv4rJe_wx6wnDYp1XY41kbRvyRx" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    .row.justify-content-center
      .col-xl-10
        .tarjeta.color-primario.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.d-none.d-sm-block
              img(src="@/assets/curso/tema6/15.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Explore el siguiente recurso audiovisual para fortalecer sus conocimientos sobre los molinos de café. Preste atención a los diferentes sistemas de dosificación, sus características y la importancia del mantenimiento para garantizar una molienda precisa y un espresso de alta calidad.
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-contenido.texto-blanco.d-block(href="https://www.youtube.com/watch?v=8FxCpLcC47c" target="_blank")
                    span Abrir video
                    i.fas.fa-file-video

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Esquema comparativo de tipos de molinos de café

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/14.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Molienda extremadamente heterogénea
            p.mb-0 Uniformidad de molienda: muy baja.
            p.mb-0 Rango de ajuste (micras): no ajustable.
            p.mb-0 Generación de finos (% en masa):  25 %.
            p.mb-0 Velocidad de rotación (rpm): 20.000 - 30.000.
            p.mb-0 Temperatura alcanzada (molido continuo): 60 °C.
            p.mb-0 Vida útil de las fresas (kg de café): N/A (se reemplaza el equipo).
            p.mb-0 Aplicación ideal: uso doméstico ocasional.
            p.mb-0 Rango de precios (COP): 30.000 - 150.000.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/15.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Molino de discos planos
            p.mb-0 Uniformidad de molienda: media.
            p.mb-0 Rango de ajuste (micras): 200 - 1.200.
            p.mb-0 Generación de finos (% en masa): 10 - 20 %.
            p.mb-0 Velocidad de rotación (rpm): 900 - 1.400.
            p.mb-0 Temperatura alcanzada (molido continuo): 45 - 55 °C.
            p.mb-0 Vida útil de las fresas (kg de café): 300 - 500.
            p.mb-0 Aplicación ideal	filtro casero, bajo volumen.
            p.mb-0 Rango de precios (COP): 250.000 - 1.200.000.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/16.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Molino de fresas cónicas
            p.mb-0 Uniformidad de molienda: muy alta.
            p.mb-0 Rango de ajuste (micras): 50 - 1.500.
            p.mb-0 Generación de finos (% en masa): 2 - 8 %.
            p.mb-0 Velocidad de rotación (rpm): 400 - 600.
            p.mb-0 Temperatura alcanzada (molido continuo): 30 - 40 °C.
            p.mb-0 Vida útil de las fresas (kg de café): 800 - 1.500.
            p.mb-0 Aplicación ideal: espresso, laboratorio, alta producción.
            p.mb-0 Rango de precios (COP): 1.500.000 - 12.000.000
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Ajuste de molienda según método de preparación

    p.mb-4.mb-lg-5 En la práctica, el barista debe calibrar el molino todos los días, o incluso varias veces al día, porque la humedad ambiental cambia las propiedades mecánicas del grano. Un aumento de la humedad hace que el grano sea más blando y la molienda tiende a hacerse más fina; por el contrario, un ambiente seco produce más finos.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 7.
          span Ajuste de molienda por método y diagnóstico
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Método
                th Tamaño recomendado
                th Señal de molienda muy gruesa
                th Señal de molienda muy fina 
            tbody
              tr
                td #[em Espresso ]
                td Fina (200-400 μm) 
                td Flujo muy rápido (< 20 s), poca crema, sabor ácido 
                td Flujo gotea (> 35 s), crema oscura, sabor amargo 
              tr(style="background-color: #F0F4EE")
                td #[em Pour over] 
                td Media-fina (400-700 μm) 
                td Tiempo de goteo < 2 min, sabor aguado 
                td Tiempo > 4 min, sabor astringente 
              tr
                td Prensa francesa 
                td Gruesa (900-1200 μm) 
                td Bebida débil, sin cuerpo 
                td Muchos sedimentos en la taza, sabor amargo 

    .row.justify-content-center
      .col-xl-10
        .tarjeta.color-primario.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.d-none.d-sm-block
              img(src="@/assets/curso/tema6/15.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recomendación práctica: 
                  p.mb-0 Utilice siempre una balanza de precisión (0,1 g) para medir el café y el agua. No confíe en medidas volumétricas (cucharas o tazas) porque la densidad del café molido varía con el tamaño de partícula y la humedad.
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-contenido.texto-blanco.d-block(href="https://www.youtube.com/watch?v=8FxCpLcC47c" target="_blank")
                    span Abrir video
                    i.fas.fa-file-video

</template>

<script>
export default {
  name: 'Tema3',
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
