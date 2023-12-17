document.addEventListener('DOMContentLoaded', function () {
    const filtros = document.querySelectorAll('.fBtnPrincipal');
    filtros.forEach((filtro) => {
      filtro.addEventListener('click', function () {
        console.log('Filtrar por:', filtro.textContent);
        // Agregar aquí la lógica para mostrar los productos correspondientes
      });
    });
  });
  