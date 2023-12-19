

function nombre_imagen() {
    const input = document.getElementById('cargarimagen');
    // const nombre_imagen_display = document.getElementById('nombre_imagen');
    const previewImage = document.getElementById('cargarimagen');
  
    if (input.files.length > 0) {
      const archivo = input.files[0];
      const nombre_archivo= archivo.nombre
    //   nombre de la imagen
       nombre_imagen_display.textContent = `imagen seleccionada ${nombre_archivo}`;

    //   actualiza laimagen
      const verimagen = new FileReader();
      verimagen.onload = function(e) {
        previewImage.src = e.target.result;
      };
      verimagen.readAsDataURL(archivo);

    } else {
      nombre_imagen_display.textContent = '';
      previewImage.src = '';
    }
  }
  
  

  