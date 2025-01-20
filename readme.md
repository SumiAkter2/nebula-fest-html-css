# Nebulafest

## index.html

### Esta estructura HTML representa un sitio web del festival "Nebulafest", que incluye varias secciones como:
- header,
- contenido principal (incluyendo banners, actualizaciones día a día y ediciones anteriores)
- footer
### Elementos HTML del índice:
- header: para la sección de encabezado de la página. El encabezado contiene:
i.top-header section: para el menú de la barra de navegación superior
ii.nav-right-content: para el contenido derecho en la barra de navegación
- nav: la barra de navegación para escritorio y otros.
- main: para la sección principal. La sección de encabezado contiene:
.banner-content: para la sección de banners,
.day-by-day-content: para el contenido diario,
.edition-content: para el contenido de la edición
- footer: para el contenido del pie de página. Tiene: i.top-footer-content y
ii. bottom-footer-content

#### index.css:
- .container - solo para llenar toda la página
- .banner-content - para el contenido del banner
- .banner-btn - para el botón del banner
- .wheel-icon - para el ícono que está en el banner y otras secciones
- .card-slider - para el contenido del control deslizante de tarjetas
- .img-slider - para el contenido del control deslizante de imágenes
- .footer-images-content - para el ícono del pie de página que aparece en la parte superior
- .bottom-footer-content - para la sección inferior del pie de página
- .media query - para capacidad de respuesta en todos los dispositivos

## festival.html

### Elementos HTML del festival:
- header - para la sección del encabezado
- main - para el contenido principal. Que contienen:
i.edition-content: para contenido de texto e imagen
ii.festival-content: para mostrar imágenes
iii.card-section: para mostrar y deslizar imágenes
iv.arrive-content: para mostrar mapas y texto
ii.equip-section: para la sección de texto e imagen de EQUIP

- footer: para el pie de página

### fistival.css:
- .festival-content:
- .equip-content-left: para el contenido del lado izquierdo de Equip
- controles: este es el control del botón deslizante utilizado para el botón ubicado en esta página
- .arrive-content: para el contenido de Arrive
- .location-icon: para el ícono de ubicación en la imagen del mapa.
-
## programming.html

### Elementos HTML de la página de programación:
- header: para la sección de encabezado
- main: para el contenido principal. Que contiene:
i.festival-content - para el icono que aparece en la parte superior
ii.programing-content - para el contenido de texto de programación

- footer - para el pie de página

### El CSS para la página de programación está en el archivo festival.css:
- .programing-content - para el contenido de programación
- .programing-card - tiene imagen y texto
- programing-icon - para el icono que aparece en la parte superior

## film.html

### Elementos HTML para la película:
- header - para la sección de encabezado
- main - para el contenido principal. Que contienen:
i.festival-content - para el icono que aparece en la parte superior
ii.programing-content - para programar contenido de texto

- footer - para pie de página

#### El CSS para la página de la película está en el archivo festival.css:
- .edition-content - para mostrar el contenido del festival
- .film-section - tiene imagen y texto
- .festival-content - para el texto y el icono del encabezado del festival

#### El CSS para la página de archivo está en el archivo festival.css:
- .film-section - para el contenido de la película
- .film-section img - para la imagen
- .film-icon - para el icono de esta página

### Algunos archivos CSS que también se comparten para otras páginas:

### share.css:
- .header-text - para el título de la página
- .card - para todas las tarjetas
- .card-section
- .card-text-section - para la sección de texto de las tarjetas
- .arrow - que solo está en dispositivos móviles y Vista de tableta
- .left-arrow - para la flecha izquierda
- .right-arrow - para la flecha derecha

### slider.css:
- .img-slider,.card-slider - para el control deslizante de imagen y tarjeta
- .wrapper - este es el contenedor para el contenido del control deslizante
- .img-slide-container,.card-slide-container
- .slideDiv - para todo el contenido de la diapositiva
- .slide,.card-slide - establece el ancho y la altura de la imagen o el contenido de la tarjeta
- .slide:nth-of-type - establece la imagen en la diapositiva
- .button - este es el botón en el control deslizante
- .selected - para el botón seleccionado