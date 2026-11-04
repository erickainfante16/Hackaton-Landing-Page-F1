# Hackaton-Landing-Page-F1

🏎️ MERCH F1 — The Paddock StoreLanding page interactiva de comercio electrónico para indumentaria deportiva y mercancía oficial de Formula 1, desarrollada en el marco del Hackathon Web de Generation México.
"Tu tienda oficial en México de F1 para conseguir mercancía 100% original y piezas únicas al mejor precio. Garantizamos envíos rápidos, como Checo Pérez, para que disfrutes de tu pasión sin esperas."

👥 Proyecto colaborativo realizado por el Equipo 3 — "Los Villanos"
Rol en el ProyectoTareas Asignadas
  Isai CoriaProduct Owner / Front-endHeader, Navegación, Footer y Pitch del Problema.
  Ericka InfanteFront-end LeadHero Section (Kimi Antonelli), Diseño UI/UX y Pitch Deck Lead.
  Kevin AldabaFront-endSección de Beneficios F1 y Catálogo de Productos Más Vendidos.
  Sofia ZambranoSCRUM Master / Front-endSección Sobre Nosotros, Formulario de Contacto y Coordinación Ágil.
  Alexander OlivieriBack-end / Front-endLógica de Carrito en JS, Salida en Consola Web, Testimonios y CTA.

Nuestra landing page consta de las siguientes secciones:
Header (encabezado): logotipo, nombre del proyecto y menú de navegación.
Hero Section (sección principal): título atractivo, descripción breve, imagen y botón CTA  (para registrarse y recibir descuentos en primera compra).
Sobre nosotros: breve presentación del negocio, proyecto o servicio.
Beneficios o características: principales ventajas de lo que ofrece el proyecto.
2 anuncios o mensajes de reforzamiento
Productos o servicios: presentación de productos, categorías o servicios destacados.
Testimonios o reseñas (opcional): opiniones de clientes o usuarios.
Call to Action (CTA): para registrarse y recibir descuentos en próximas compras
Contacto: formulario, correo electrónico, teléfono o redes sociales.
Footer (pie de página): información de contacto, enlaces importantes y derechos de autor.

📌 Enlaces del Proyecto
  🌐 Demo en vivo (GitHub Pages): https://erickainfante16.github.io/Hackaton-Landing-Page-F1/
  📂 Repositorio oficial en GitHub: https://github.com/erickainfante16/Hackaton-Landing-Page-F1
  
🎯 Planteamiento del Proyecto
El ProblemaLa adquisición de indumentaria y coleccionables oficiales de Formula 1 en México suele enfrentar fricciones considerables: tiendas oficiales extranjeras con plataformas lentas, tiempos de entrega prolongados (semanas de espera) y cargos sorpresivos por aranceles o impuestos de importación al momento de la entrega.

La Solución
MERCH F1 centraliza la oferta de productos oficiales de las principales escuderías bajo una experiencia de usuario rápida, transparente y moderna con 4 pilares:
1. Entrega Express en 3 días hábiles a nivel nacional.
2. Precios netos transparentes (Tax-Free) sin cargos ocultos de aduana.
3. Autenticidad 100% garantizada con licencias oficiales.
4. Catálogo para toda la familia (adultos, jóvenes y coleccionistas).

🎨 Identidad Visual y Paleta de Colores
La interfaz se construyó inspirándose en el lenguaje gráfico del motorsport de alta competición:MuestraNombreHexAplicación en la Landing
🔴Rojo F1 (Racing Red)#E10600Logotipo, botones de acción principal (CTA), acentos de urgencia y bordes activos.
⚫Negro Carbón (Asphalt Black)#0F0F0FFondo del Header, franja promocional del Hero, tarjetas de arquitectura y Footer.
⚪Blanco Puro#FFFFFFContenedores de contenido limpio, fondos de tarjetas y texto de alto contraste.
🌫️Gris Claro#F4F4F4Fondo general de la página para descanso visual.
⬛Gris Oscuro / Carbón Suave#1E1E1EBotones secundarios, badges de interfaz y contenedores de métricas.
🟡Amarillo Dorado (Podium Gold)#FFD700Estrellas de calificación en testimonios, insignias de podio y avisos clave.

🧱 Arquitectura de las 9 Secciones
La landing page cumple estrictamente con los 9 bloques requeridos por la rúbrica del evento:
Header & Menú de Navegación: 
  Barra superior con anclas fluidas (#home, #catalogo, #contacto), logotipo y botón dinámico con contador de carrito.
Hero Section: 
  Titular en cursiva de competición (Speed Sans), barra promocional con 10% OFF para nuevos suscriptores al Club F1 y banner del piloto campeón (Kimi Antonelli) con degradado para lectura clara.
Sobre Nosotros: 
  Presentación de la misión y el valor de comunidad de automovilismo.Beneficios F1: Grilla de 4 tarjetas destacando rapidez, autenticidad y política de impuestos.
Catálogo de Productos Más Vendidos: 
  Tarjetas interactivas (gorras, hoodies, polos y autos a escala) con precios y botones de compra con data-attributes.
Testimonios / Reseñas de Clientes: 
  Calificación 4.8/5 con comentarios geolocalizados (CDMX, Monterrey, Guadalajara, Puebla).
Call to Action (CTA intermedio): 
  Banner dinámico de campaña ("¡Estamos de F1esta! 3x2 en mercancía 2026").
Contacto: 
  Formulario con campos estructurados (Nombre, Correo, Escudería Favorita, Mensaje) y validación frontend.Footer: Navegación secundaria, inicio de sesión rápido, enlaces a redes sociales y derechos de autor.

⚙️ Funcionalidad Técnica (JavaScript)Carrito Dinámico: 
  Manejo del DOM a través de selectores de evento click sobre botones .btn-add. Lee atributos data-name y data-price, incrementa el contador persistente del Header en tiempo real y ofrece feedback visual al usuario.
  Procesamiento del Formulario: Escucha del evento submit con interceptación mediante event.preventDefault(), evitando la recarga innecesaria de la página. Los datos capturados se estructuran en un objeto JavaScript y se imprimen ordenadamente en la consola del navegador (F12) con console.table().

🛠️ Stack TecnológicoHTML5: 
  Marcado semántico y accesible (<header>, <main>, <section>, <footer>).
  CSS3 & Bootstrap 5 (v5.3.3): Sistema de rejilla responsiva (Grid/Flexbox), utilidades de espaciado y clases personalizadas con variables CSS.
  Vanilla JavaScript (ES6+): Manipulación del DOM, eventos asíncronos y captura de formularios.
  Git & GitHub: Control de versiones colaborativo mediante flujo de ramas individuales y despliegue automatizado con GitHub Pages.

🚀 Instalación y Ejecución LocalClona el repositorio en tu máquina: git clone https://github.com/erickainfante16/Hackaton-Landing-Page-F1.git
  Entra a la carpeta del proyecto:cd Hackaton-Landing-Page-F1
  Abre el archivo index.html en tu navegador o ejecuta la extensión Live Server en Visual Studio Code.
