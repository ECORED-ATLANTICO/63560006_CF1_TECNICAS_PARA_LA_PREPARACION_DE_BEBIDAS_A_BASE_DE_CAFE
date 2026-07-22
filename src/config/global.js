export default {
  global: {
    Name: 'Fundamentos y métodos de preparación del café ',
    Description:
      '​​​Este componente formativo desarrolla los fundamentos botánicos, históricos y de transformación del café, así como las técnicas de preparación mediante métodos espresso y alternativos. Aborda la calidad del agua, la molienda, el manejo de equipos y la conservación de atributos sensoriales para garantizar bebidas de alta calidad. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El café: botánica, historia y transformación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El agua en la preparación del café',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La molienda del café',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Maquinaria y equipos para la preparación de café',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Métodos de extracción de café',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Cremado de leche y arte latte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Conservación de atributos sensoriales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acidez (café)',
      significado:
        'Atributo sensorial positivo que percibe viveza o brillo, a menudo con notas frutales. No confundir con acidez estomacal.',
    },
    {
      termino: 'Aeropress',
      significado:
        'Método de preparación que combina inmersión y presión manual, de alta versatilidad.',
    },
    {
      termino: 'Arábica',
      significado:
        'Especie de café (Coffea arábica) valorada por su calidad sensorial superior. Es la única especie cultivada en Colombia.',
    },
    {
      termino: 'Beneficio del café',
      significado:
        'Conjunto de operaciones (despulpado, fermentación, lavado, secado) que transforman la cereza en grano seco.',
    },
    {
      termino: 'Caturra',
      significado:
        'Variedad de café arábica de porte bajo, muy productiva y de alta calidad.',
    },
    {
      termino: 'Cenicafé',
      significado:
        'Centro Nacional de Investigaciones de Café, adscrito a la FNC, fundado en 1938.',
    },
    {
      termino: 'Chemex',
      significado: 'Jarra de vidrio con filtro grueso para método de goteo.',
    },
    {
      termino: 'Crema (del espresso)',
      significado:
        'Capa de espuma de color avellana que corona un espresso bien extraído.',
    },
    {
      termino: 'Cremado de leche',
      significado:
        'Proceso de incorporar burbujas de aire a la leche mediante vapor para crear microespuma.',
    },
    {
      termino: 'Dureza del agua',
      significado:
        'Concentración de iones de calcio y magnesio que afecta la extracción y las incrustaciones.',
    },
    {
      termino: 'Espresso',
      significado:
        'Bebida concentrada obtenida por presión de 9 bares a través de café molido fino.',
    },
    {
      termino: 'FNC',
      significado:
        'Federación Nacional de Cafeteros de Colombia, gremio sin ánimo de lucro fundado en 1927.',
    },
    {
      termino: 'Granulometría',
      significado:
        'Distribución de los tamaños de partícula en el café molido.',
    },
    {
      termino: 'Microespuma',
      significado:
        'Leche vaporizada con burbujas muy pequeñas e invisibles, de textura sedosa.',
    },
    {
      termino: 'Molienda',
      significado:
        'Proceso de reducción del grano tostado a partículas de un tamaño determinado.',
    },
    {
      termino: 'Pour over',
      significado: 'Método de vertido manual (goteo) usando filtro de papel.',
    },
    {
      termino: 'Prensa francesa',
      significado: 'Método de inmersión con émbolo y malla metálica.',
    },
    {
      termino: 'Robusta',
      significado:
        'Especie de café (Coffea canephora) con mayor cafeína, cuerpo pesado y menor calidad sensorial.',
    },
    {
      termino: 'Roya del cafeto',
      significado:
        'Enfermedad fúngica (Hemileia vastatrix) que ataca las hojas. Cenicafé ha desarrollado variedades resistentes.',
    },
    {
      termino: 'TDS',
      significado: 'Sólidos disueltos totales en agua, medidos en ppm.',
    },
    {
      termino: 'Tueste',
      significado:
        'Proceso térmico que desarrolla aromas y sabores del café verde.',
    },
    {
      termino: 'Variedad Castillo',
      significado:
        'Variedad colombiana resistente a la roya, la más sembrada en el país.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cenicafé. (2012). <em>Manual del cafetero colombiano: Investigación y tecnología para la sostenibilidad de la caficultura (Vol. 1)</em>. Centro Nacional de Investigaciones de Café.',
      link:
        'https://biblioteca.cenicafe.org/bitstream/10778/4321/1/cenbook-0026_08.pdf',
    },
    {
      referencia:
        'Cenicafé. (2016). <em>Variedad Castillo®: preguntas frecuentes (Avances Técnicos No. 426)</em>. Centro Nacional de Investigaciones de Café.',
      link: 'https://biblioteca.cenicafe.org/bitstream/10778/410/1/avt0426.pdf',
    },
    {
      referencia:
        'Cenicafé. (2021). <em>Estructura del fruto del café</em>. Centro Nacional de Investigaciones de Café.',
      link:
        'https://biblioteca.cenicafe.org/bitstream/10778/4321/1/cenbook-0026_08.pdf',
    },
    {
      referencia:
        'Cortina, H. A. (2013). <em>Variedad Castillo®: preguntas frecuentes</em>. Centro Nacional de Investigaciones de Café.',
      link: '',
    },
    {
      referencia:
        'Farfán V., F. F., Baute B., J. E., & García L., J. C. (2008). <em>Efecto de las coberturas arbórea y vegetal muerta sobre la producción de café, en la zona cafetera norte de Colombia</em>. Cenicafé, 59(1), 29-38.',
      link: '',
    },
    {
      referencia:
        'Farfán V., F. F., & Solarte P., C. R. (2008). <em>Efecto de la cobertura arbórea y vegetal muerta sobre la producción de café en una localidad de la zona cafetera sur de Colombia</em>. Cenicafé, 59(2), 155-164.',
      link: 'https://biblioteca.cenicafe.org/handle/10778/206',
    },
    {
      referencia:
        'Federación Nacional de Cafeteros de Colombia. (2017). <em>90 años, vivir el café y sembrar el futuro</em>. Federación Nacional de Cafeteros.',
      link: 'https://biblioteca.cenicafe.org/handle/10778/4277',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). <em>Decreto 1575 de 2007, por el cual se establece el sistema para la protección y control de la calidad del agua para consumo humano</em>. Diario Oficial No. 46.684.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=30007',
    },
    {
      referencia:
        'Puerta, G. I. (2015). <em>La inocuidad y calidad del café requiere de agua potable para su beneficio y preparación de la bebida</em>. Centro Nacional de Investigaciones de Café.',
      link: 'https://biblioteca.cenicafe.org/handle/10778/599',
    },
    {
      referencia:
        'Ramos, M. M., & Castaño, J. J. (2004). <em>Almacenamiento de café tostado y molido en atmósfera de nitrógeno y gas carbónico</em>. Cenicafé, 55(1), 5-15.',
      link:
        'http://biblioteca.cenicafe.org/bitstream/10778/128/1/arc055%2801%29005-015.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Nacional Ecosistema de Recursos Educativos Digitales (RED) - Profesional 06',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca <em>Arguelles</em>',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael <em>Acosta Bedoya</em>',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván <em>Vera Briceño</em>',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime <em>Amaya Cabra</em>',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela <em>Burgos Rueda</em>',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel <em>Ospino Fritz</em>',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié <em>Villafañe</em>',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
