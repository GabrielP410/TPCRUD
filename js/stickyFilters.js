window.addEventListener('scroll', function () {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const barraFiltros = document.querySelector('.barra-filtros');

    if (window.pageYOffset >= navbarHeight) {
      barraFiltros.style.top = `${navbarHeight}px`;
    } else {
      barraFiltros.style.top = '0';
    }
  });
