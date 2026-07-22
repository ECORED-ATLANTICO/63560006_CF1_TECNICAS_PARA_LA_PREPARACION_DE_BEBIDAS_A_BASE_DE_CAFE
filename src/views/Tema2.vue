<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El agua en la preparación del café
    
    img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow-sm
          p.mb-0 El agua es el principal componente de la bebida de café, representando hasta el 98 % de su volumen. Sin embargo, con frecuencia se subestima su importancia. La composición química del agua -su contenido de minerales, dureza, alcalinidad y pH- determina la eficacia con la que se extraen los compuestos solubles y aromáticos del café, así como la estabilidad de los equipos. Este capítulo expone los parámetros de calidad del agua recomendados para la preparación de café de especialidad, los métodos de tratamiento más comunes y la relación óptima entre la cantidad de café y agua.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Composición química del agua y su impacto en la extracción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .p-3.bg-terciario-t5.rounded-2.mb-4.mb-lg-0
          p.mb-0 El agua pura (H₂O) no es el mejor solvente para el café; necesita una concentración adecuada de ciertos iones para extraer selectivamente los compuestos deseables y evitar los indeseables. Los iones de calcio (Ca²⁺) y magnesio (Mg²⁺) son especialmente importantes porque se enlazan con los ácidos clorogénicos y las melanoidinas, facilitando su disolución y contribuyendo a la percepción de dulzor, cuerpo y acidez brillante. Por el contrario, los bicarbonatos (HCO₃⁻) actúan como tampón alcalino y pueden neutralizar los ácidos del café, produciendo una taza "plana" o "apagada" si su concentración es demasiado alta.
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/2.png", alt="")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Parámetros de calidad del agua para café (minerales, pH, dureza)

    p.mb-4 La #[em Specialty Coffee Association] (SCA) ha establecido parámetros ampliamente aceptados, los cuales pueden ser adaptados a las condiciones del agua en Colombia. El Decreto 1575 de 2007 del Ministerio de la Protección Social define las características del agua potable, pero estas no siempre coinciden con los parámetros óptimos para la extracción del café.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3.
          span Parámetros de calidad del agua para la preparación de café.
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Parámetro
                th Rango recomendado
                th Valor ideal
                th(colspan="2") Efecto en la taza
            tbody
              tr
                td Sólidos disueltos totales (TDS)
                td 75 - 250 mg/L
                td 150 mg/L
                td(colspan="2") < 75 mg/L: ácida y agresiva; > 250 mg/L: plana y amarga
              tr(style="background-color: #F0F4EE")
                td pH
                td 6,5 - 7,5
                td 7,0
                td(colspan="2") pH bajo: sabores ácidos agresivos; pH alto: sabores metálicos y apagados
              tr
                td Dureza total (como CaCO₃)
                td 50 - 175 mg/L
                td 100 mg/L
                td(colspan="2") Muy baja: extracción pobre; muy alta: incrustaciones y sabores metálicos
              tr(style="background-color: #F0F4EE")
                td Alcalinidad (HCO₃⁻)
                td 40 - 75 mg/L
                td 50 mg/L
                td(colspan="2") > 75 mg/L: neutraliza ácidos, taza insípida
              tr
                td Sodio (Na⁺)
                td ≤ 30 mg/L
                td 10 mg/L
                td(colspan="2") Exceso: sabor salado
              tr(style="background-color: #F0F4EE")
                td Cloruros (Cl⁻)
                td ≤ 30 mg/L
                td 15 mg/L
                td(colspan="2") Exceso: sabor metálico

    .bg-terciario-t5.rounded-4.mb-4.mb-lg-5.pb-4.pb-lg-0
      .row.align-items-center.justify-content-center
        .col-lg-10
          .p-4
            h5 Instrumentos de medición: 
            p.mb-4.mb-lg-0 Para el control diario, se pueden usar medidores portátiles de TDS (conductímetros) y tiras reactivas para dureza y pH. Cenicafé recomienda realizar análisis de laboratorio al menos una vez al año para ajustar los sistemas de tratamiento.
        .col-sm-4.col-lg-2
          figure
            img.w-145(src="@/assets/curso/tema2/3.png", alt="")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Contaminantes comunes y métodos de tratamiento

    .p-4.bg-primario-p10.rounded-4.mb-4.mb-lg-5
      p.mb-0.text-center Los contaminantes del agua pueden afectar la extracción del café, ya que pueden enmascarar los sabores naturales o producir sabores indeseables. Los métodos de tratamiento más comunes son la filtración, la ozonización, la desinfección y la remoción de sedimentos.

    .row.align-items-stretch.justify-content-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5.col-xl-3.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/4.svg' alt='')
          .tarjeta.bg-terciario-t5
            .p-4
              h4 Cloro y cloraminas
              p.mb-0 Añadidos para desinfección, generan sabores a "medicina" y pueden reaccionar con compuestos del café produciendo clorofenoles.
      .col-sm-8.col-lg-5.col-xl-3.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/5.svg' alt='')          
          .tarjeta.bg-terciario-t5
            .p-4
              h4 Sedimentos (arena, óxido, arcilla)
              p.mb-0 Obstruyen válvulas y calderas, reducen la vida útil de las máquinas.
      .col-sm-8.col-lg-5.col-xl-3.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/6.svg' alt='')          
          .tarjeta.bg-terciario-t5
            .p-4
              h4 Metales pesados (hierro, manganeso, cobre)
              p.mb-0 Producen sabores metálicos y manchas.
      .col-sm-8.col-lg-5.col-xl-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/7.svg' alt='')          
          .tarjeta.bg-terciario-t5
            .p-4
              h4 Microorganismos (bacterias, hongos)
              p.mb-0 Riesgo para la salud y formación de biopelículas en tuberías.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 4.
          span Métodos de tratamiento.
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Método
                th Elimina
                th Ventajas
                th Desventajas
            tbody
              tr
                td Filtro de sedimentos (polipropileno, 5-10 micras)
                td Partículas en suspensión
                td Económico, fácil instalación
                td No elimina cloro ni dureza
              tr(style="background-color: #F0F4EE")
                td Filtro de carbón activado (granular o bloque)
                td Cloro, olores, compuestos orgánicos
                td Mejora significativamente el sabor
                td No reduce dureza; requiere reemplazo periódico
              tr
                td Ablandador (intercambio iónico)
                td 5Calcio, magnesio (dureza)
                td Previene incrustaciones
                td Aporta sodio; no elimina cloro
              tr(style="background-color: #F0F4EE")
                td Ósmosis inversa (OI)
                td 95-98 % de todos los sólidos disueltos
                td Agua de gran pureza
                td Requiere remineralización; alto costo
              tr
                td Remineralización (post-OI)
                td Aporta calcio y magnesio
                td Ajusta el agua a perfil óptimo
                td Necesario equipo adicional

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/8.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-gris-sistema.p-4
            .row.justify-content-center.mb-3
              .col-4.col-xl-6
                img(src='@/assets/curso/tema2/9.png' alt='')
            h4.mb-4 Red de agua
            p #[strong Función]: suministra e agua proveniente de la red 
            p.mb-0 #[strong Mantenimiento]: verificar la prsióna deacuada con la que debe entrar y hacer revisiones periodicas. 
          .tarjeta.bg-gris-sistema.p-4
            .row.justify-content-center.mb-3
              .col-4.col-xl-6
                img(src='@/assets/curso/tema2/10.png' alt='')
            h4.mb-4 Filtro de sedimentos
            p #[strong Funcion]: retiene partículas sólidas (arena, óxido, sedimentos).
            p.mb-0 #[strong Mantenimiento]: se debe cambiar cada 3-6 meses (o según carga de agua). 
          .tarjeta.bg-gris-sistema.p-4
            .row.justify-content-center.mb-3
              .col-4.col-xl-6
                img(src='@/assets/curso/tema2/11.png' alt='')
            h4.mb-4 Filtro de carbón activado 
            p #[strong Funcion]: elimina cloro, olores y compuestos orgánicos. 
            p.mb-0 #[strong Mantenimiento]: se debe cambiar cada 6 - 12 meses (o según consumo). 
          .tarjeta.bg-gris-sistema.p-4
            .row.justify-content-center.mb-3
              .col-4.col-xl-6
                img(src='@/assets/curso/tema2/12.png' alt='')
            h4.mb-4 Ablandador (opcional)  
            p #[strong Funcion]: reduce dureza (calcio y magnesio) para evitar incrustaciones. 
            p.mb-0 #[strong Mantenimiento]: se debe regenerar con sal cada 2 - 4 semanas. Revisar resinas cada 2 - 3 años.  
          .tarjeta.bg-gris-sistema.p-4
            .row.justify-content-center.mb-3
              .col-4.col-xl-6
                img(src='@/assets/curso/tema2/13.png' alt='')
            h4.mb-4 Máquina de espresso / Tetera  
            p #[strong Funcion]: preparar café con agua tratada. Protege caldera y termo bloque. 
            p.mb-0 #[strong Mantenimiento]: realizar limpieza diaria (portafiltro, lanza). Backflush semanal con detergente.  

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/icon-title.svg")
        h3.titulo-con-imagen__texto Relación agua-café: proporciones y temperaturas óptima

    .p-4.bg-terciario-t5.rounded-4.mb-4.mb-lg-5
      p.mb-0 La proporción entre la masa de café molido y la masa de agua es la variable que controla la concentración de la bebida. La regla general es utilizar una relación de 1:16 a 1:18 (café:agua) para métodos filtrados, y de 1:2 a 1:2,5 para espresso. Estas relaciones se expresan en peso (gramos).

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 5.
          span Proporciones recomendadas por método.
        .tabla-a.color-terciario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #C9D6C0")
                th Método
                th Relación café:agua (peso)
                th Ejemplo (café / agua)
            tbody
              tr(style="background-color: #F0F4EE")
                td Espresso (tradicional)
                td 1:2 - 1:2,5
                td 18 g / 36 - 45 g
              tr
                td Pour over (V60/Chemex)
                td 1:15 - 1:17
                td 15 g / 240 - 270 g
              tr(style="background-color: #F0F4EE")
                td Prensa francesa
                td 1:15 - 1:17
                td 18 g / 270 - 306 g
              tr
                td Aeropress
                td 1:12 - 1:16
                td 15 g / 180 - 240 g

    p.mb-4 Temperatura del agua: debe mantenerse entre 90 °C y 96 °C. Los tuestes más oscuros extraen compuestos más fácilmente, por lo que se recomienda usar temperaturas más bajas (90-92 °C) para evitar la extracción de amargores. Los tuestes claros requieren temperaturas más altas (94-96 °C) para extraer los ácidos y dulzores sin dejar notas vegetales.

    .bg-contenido-a5.rounded-4.mb-4.mb-lg-5.pb-4.pb-lg-0
      .row.align-items-center.justify-content-center
        .col-lg-10
          .p-4
            h5 Recomendación práctica:
            p.mb-4.mb-lg-0 Utilice siempre una balanza de precisión (0,1 g) para medir el café y el agua. No confíe en medidas volumétricas (cucharas o tazas) porque la densidad del café molido varía con el tamaño de partícula y la humedad.
        .col-sm-4.col-lg-2
          figure
            img.w-145(src="@/assets/curso/tema2/14.png", alt="")

</template>

<script>
export default {
  name: 'Tema2',
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
