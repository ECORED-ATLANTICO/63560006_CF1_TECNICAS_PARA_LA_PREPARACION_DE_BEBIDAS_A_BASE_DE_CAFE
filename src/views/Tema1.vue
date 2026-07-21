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
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/4.png", alt="")
          
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/5-mob.png", alt="")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/5.png", alt="")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Historia del café en el mundo y en Colombia

    img(data-aos="fade-up")(src="@/assets/curso/tema1/6.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Desde sus orígenes en las mesetas de Etiopía, donde la leyenda atribuye su descubrimiento al pastor Kaldi, el café se propagó hacia la península arábiga, donde los árabes comenzaron su cultivo y comercialización. A Europa llegó en el siglo XVII a través de los mercaderes venecianos, y de allí se extendió a las colonias americanas. Sin embargo, es en Colombia donde el café adquirió una dimensión social y económica única.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .p-3.bg-terciario-t5.rounded-2.mb-3
          p.mb-0 La introducción del café al territorio nacional se remonta al siglo XVIII, posiblemente a través de los jesuitas que lo llevaron a las misiones del oriente del país. El primer registro fehaciente de cultivo con fines comerciales data de 1835 en la región de los Santanderes. La expansión del cultivo hacia Antioquia y el Viejo Caldas transformó la economía nacional y consolidó una estructura de producción basada en la pequeña propiedad familiar, que hoy caracteriza al sector: el 96 % de los caficultores colombianos cultivan en áreas inferiores a cinco hectáreas
        p.mb-0 Un hito fundamental fue la creación de la Federación Nacional de Cafeteros de Colombia en 1927, una entidad gremial que ha representado los intereses de los productores, administra el Fondo Nacional del Café y ha liderado la promoción del grano a nivel mundial a través del exitoso personaje de Juan Valdez.

    .bg-timeline.mb-5
      .p-4.p-lg-5.z-2
        LineaTiempoC.tarjeta--blanca.shadow-sm.tarjeta.p-3.p-lg-4
          .row(titulo="1730").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 1730:
              p.mb-0 Primeros cultivos de café en Santander, introducidos por los jesuitas.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/8.png', alt='alt')
          .row(titulo="1800-1835").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 1800-1835: 
              p.mb-0 Colombia se convierte en exportador neto de café.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/9.png', alt='alt')
          .row(titulo="1860 - 1890").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 1860 - 1890:
              p.mb-0 El café se consolida como principal producto de exportación.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/10.png', alt='alt')
          .row(titulo="1927").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 1927:
              p.mb-0 Creación de la Federación Nacional de Cafeteros (FNC).
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/11.png', alt='alt')
          .row(titulo="1938").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 1938:
              p.mb-0 La fundación de Cenicafé (Centro de Investigaciones de Café).
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/12.png', alt='alt')
          .row(titulo="1950-1970").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 1950-1970:
              p.mb-0 La FNC inicia el programa "Café de Colombia" con el personaje Juan Valdez.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/13.png', alt='alt')
          .row(titulo="1991").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 1991:
              p.mb-0 El café de Colombia es registrado como Indicación Geográfica Protegida.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/14.png', alt='alt')
          .row(titulo="2000s").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 2000s:
              p.mb-0 Implementación de programas de certificación de cafés especiales.
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/15.png', alt='alt')

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Procesos de transformación: del grano a la taza

    p.mb-4 Para que la fruta se convierta en el grano seco y estable que se comercializa, es necesario someterla a un proceso de transformación conocido como beneficio. Este proceso influye de manera decisiva en el perfil sensorial del café. Los principales métodos utilizados en Colombia son tres:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/16.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a10")
          div(titulo="Beneficio lavado")
            p.mb-0 Es el método tradicionalmente empleado en Colombia. Consiste en despulpar la cereza mecánicamente para eliminar la cáscara y luego fermentar el mucílago remanente en tanques, seguido de un lavado con agua limpia. Finalmente, el café pergamino se seca al sol o mecánicamente. Este método resalta la acidez y la limpieza de la taza, produciendo cafés suaves y aromáticos.
          div(titulo="Beneficio natural")
            p.mb-0 Las cerezas completas se extienden al sol sobre patios o camas africanas, sin quitarles la pulpa, hasta alcanzar la humedad deseada. Produce cafés con cuerpo más pesado y notas frutales intensas.
          div(titulo="Beneficio honey o miel")
            p.mb-0 Se despulpa la cereza, pero se conserva parte del mucílago durante el secado. A medida que el grano se seca, adquiere tonalidades que van del amarillo al rojo y al negro, según la cantidad de mucílago dejada. Este método ofrece un equilibrio entre la acidez de un lavado y el dulzor y cuerpo de un natural.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1.
          span Historia de la moda y su desarrollo en Colombia
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Proceso
                th Eliminación de pulpa
                th Fermentación
                th(colspan="2") Perfil sensorial típico
            tbody
              tr
                td Lavado
                td Sí
                td Sí, en tanques
                td(colspan="2") Acidez brillante, taza limpia, aroma floral o frutal refinado
              tr(style="background-color: #F0F4EE")
                td Natural
                td No
                td No
                td(colspan="2") Cuerpo pesado, dulzor intenso, notas afrutadas y a vino
              tr
                td Honey
                td Sí
                td No
                td(colspan="2") Dulce, acidez equilibrada, cuerpo medio a alto
                
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/17.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p.mb-0 El beneficio lavado, predominante en Colombia, merece una descripción más pormenorizada por su impacto directo en la calidad final del grano. La etapa de despulpado debe realizarse como máximo doce horas después de la cosecha para evitar fermentaciones no deseadas que generarían defectos en taza. Durante la fermentación, que puede durar según la temperatura ambiente entre catorce y veinticuatro horas, las levaduras y bacterias presentes de forma natural descomponen los azúcares del mucílago, produciendo compuestos precursores del aroma y facilitando que el lavado posterior elimine completamente la capa gelatinosa. Un retraso en la fermentación más allá del punto óptimo ocasiona los defectos conocidos como “vinagre” o “fermento”, sabores que arruinan la taza y se consideran faltas graves en la cata. Por eso Cenicafé desarrolló el “fermaestro”, un sencillo dispositivo que indica con precisión el momento de finalización de la fermentación.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .p-3.px-4.bg-gris.rounded-3
          p.mb-0 El lavado posterior debe emplear agua limpia, preferiblemente en tanques de tina o canales de correteo bien diseñados. El consumo de agua puede reducirse drásticamente con el tanque tina, que emplea menos de cinco litros por kilogramo de café pergamino seco, frente a los cuarenta litros por kilogramo de los sistemas tradicionales. El secado, último paso del beneficio, debe llevarse hasta que la humedad residual del grano se sitúe entre el diez y el doce por ciento. Una humedad superior favorece la proliferación de hongos productores de micotoxinas; una humedad inferior (por debajo del nueve por ciento) provoca la cristalización del grano, que se vuelve quebradizo y pierde parte de su complejidad aromática. En Colombia coexisten el secado solar en patios y camas africanas con el secado mecánico en silos estáticos o guardiolas, pero siempre cuidando que la temperatura del grano no supere los cuarenta y cinco grados centígrados para no dañar la calidad.
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/18.png", alt="")
    
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/19.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Beneficio lavado
            p.mb-0 El método insignia de Colombia. Requiere infraestructura y acceso a agua. Produce tazas limpias y ácidas, como las del Huila o Nariño
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/20.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Beneficio natural
            p.mb-0 Más común en Brasil y Etiopía. Ahorra agua, pero requiere clima seco y supervisión constante. Exalta la frutosidad del grano.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/21.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Beneficio honey
            p.mb-0 Popular en Costa Rica y Centroamérica. Versátil, ahorra agua y aporta una dulzura característica muy buscada.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Especies y variedades: arábica, robusta y sus características sensoriales.

    img(data-aos="fade-up")(src="@/assets/curso/tema1/22.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Aunque existen más de 100 especies de coffea, Colombia ha centrado históricamente su producción en una sola: coffea arabica, reconocida por su superior calidad en taza. A diferencia de su competidora, Coffea canephora (robusta), que contiene hasta el doble de cafeína y presenta notas terrosas y amargas, la arábica se caracteriza por su aroma complejo, su acidez equilibrada y su cuerpo suave. Su demanda en el mercado es significativamente mayor.

    p.mb-4 Dentro de la especie arábica, el trabajo de mejoramiento genético de Cenicafé ha sido fundamental para dotar a los cafetales colombianos de variedades altamente productivas y resistentes a la roya del cafeto (hemileia vastatrix). Las principales variedades en Colombia son:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/23.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.bg-terciario-t5.p-4(titulo="Típica y borbón")
            h4 Típica y borbón: 
            p Son las variedades tradicionales de porte alto, introducidas por los colonizadores. Producen tazas de excelente calidad, pero son susceptibles a la roya y menos productivas. Actualmente representan una porción mínima de los cultivos.
          .tarjeta.bg-terciario-t5.p-4(titulo="Caturra")
            h4 Caturra:  
            p Variedad de porte bajo, resultado de una mutación natural del Borbón. Fue clave para la "revolución verde" de la caficultura colombiana por su alta productividad y facilidad de recolección.
          .tarjeta.bg-terciario-t5.p-4(titulo="Caturra")
            h4 Variedad Colombia:  
            p Lanzada por Cenicafé en 1982, fue el primer híbrido exitoso creado para combatir la roya del cafeto.
          .tarjeta.bg-terciario-t5.p-4(titulo="Caturra")
            h4 Variedad Castillo: 
            p Lanzada en 2005, es una evolución de la variedad Colombia, fruto de más de dos décadas de investigación. Es resistente a la roya y presenta un excelente potencial de calidad en taza, con notas frutales y cítricas, y una acidez balanceada.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Comparación entre Coffea arábica y Coffea #[em canephora] (Robusta).
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Característica
                th Arábica
                th Robusta
            tbody
              tr(style="background-color: #F0F4EE")
                td Altura ideal de cultivo
                td 1.000 – 2.000 m s.n.m.
                td 0 – 800 m s.n.m.
              tr
                td Contenido de cafeína
                td 0,8 – 1,5 %
                td 1,7 – 4,0 %
              tr(style="background-color: #F0F4EE")
                td Forma del grano
                td Plana y alargada
                td Redondeada y pequeña
              tr
                td Cuerpo
                td Suave a medio
                td Pesado, a menudo gomoso
              tr(style="background-color: #F0F4EE")
                td Acidez
                td Media a alta
                td Baja, a veces áspera
              tr
                td Aroma
                td Complejo (floral, frutal)
                td Terroso, a caucho
                
      .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
        .col-lg-9
          .p-3.px-4.bg-terciario-t5.rounded-3.mb-4.mb-lg-0
            p.mb-0 El trabajo de mejoramiento genético de Cenicafé no se ha detenido en la variedad castillo. En 2016 se lanzó la variedad Cenicafé 1, de porte alto y muy buena calidad potencial, que se ha sembrado especialmente en zonas tradicionales donde la roya es un problema recurrente y se requiere un manejo agronómico intensivo. Además de la resistencia a la roya (hemileia vastatrix), estas variedades presentan tolerancia a otras enfermedades como la mancha de hierro (cercospora coffeicola ) y una arquitectura que facilita el control biológico de la broca. Es fundamental que el barista entienda la relación entre la variedad y la preparación: un café Castillo cultivado a 1.800 metros de altitud en el Huila puede exhibir notas de caramelo, frutos rojos y acidez media-alta, ideal para métodos filtrados (V60 o Chemex), mientras que un Caturra de 1.200 metros en Santander tendrá cuerpo más ligero, acidez baja y notas de chocolate, que se presta muy bien para mezclas de espresso o para bebidas con leche. Los catadores de la FNC han documentado que la variedad Castillo, cuando se cosecha en el punto óptimo y se beneficia adecuadamente, puede alcanzar puntajes superiores a 85 puntos en la escala de la Specialty Coffee Association, lo que la sitúa dentro de la categoría de café especial. Por ello, en cafeterías de especialidad es común que el barista ajuste la molienda y la proporción agua-café según la variedad y el origen. Conocer las características varietales permite al barista tomar decisiones informadas y comunicar al consumidor el origen del café.
        .col-sm-8.col-lg-3
          figure
            img(data-aos="fade-down-right", src="@/assets/curso/tema1/24.png", alt="")
      































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
