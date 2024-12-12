document.addEventListener('DOMContentLoaded', function () {
  // Obtener el botón de Ingresar por su ID
  const btnIngresar = document.getElementById('btnIngresar');
  
  // Agregar un evento click al botón de Ingresar
  if (btnIngresar) {
    btnIngresar.addEventListener('click', function () {
      window.location.href = 'index.ingreso.html';
    });
  }

  // Obtener el enlace de Lecciones por su ID
  const leccionesyprogresoLink = document.querySelector('#leccionesyprogresoLink');
  if (leccionesyprogresoLink) {
    leccionesyprogresoLink.addEventListener('click', function () {
      window.location.href = 'index.progreso.html'; // Redirige a index.progreso.html
    });
  }

  // Obtener todos los enlaces de navegación inferiores
  const btncalificaciones = document.querySelectorAll('btncalificaciones');

  navigationLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');

      // Verificar si el enlace es diferente de "#"
      if (href && href !== "#") {
        if (href === 'calificaciones') {
          // Redirigir específicamente a la página de calificaciones
          window.location.href = 'index.calificaciones.html';
        } else {
          // Redirigir a otras secciones
          window.location.href = href;
        }
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Botón para Lecciones y Progreso en la página de ingreso
  const leccionesProgresoButton = document.querySelector('#leccionesProgresoButton');
  if (leccionesProgresoButton) {
    leccionesProgresoButton.addEventListener('click', function () {
      window.location.href = 'index.progreso.html';
    });
  }

  // Enlace de Economía en la página de calificaciones
  const economiaLink = document.querySelector('#economiaLink');
  if (economiaLink) {
    economiaLink.addEventListener('click', function () {
      window.location.href = 'index.progreso.html';
    });
  }
});








