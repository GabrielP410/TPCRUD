// Variables para almacenar datos simulados
let usuariosRegistrados =
  JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];


// Función para registrar un nuevo usuario
function registrarUsuario() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simulamos almacenar los datos del usuario registrado en localStorage
  const nuevoUsuario = { email, password };
  usuariosRegistrados.push(nuevoUsuario);
  localStorage.setItem(
    "usuariosRegistrados",
    JSON.stringify(usuariosRegistrados)
  );

  alert("Usuario registrado exitosamente");
  window.location.href = '../index.html';
}

// Función para el login del administrador y redirigir al index
function loginAdministrador() {
  const adminEmail = document.getElementById("adminEmail").value;
  const adminPassword = document.getElementById("adminPassword").value;

  // Verificamos las credenciales del administrador
  if (
    adminEmail === "adminderaiz@gmail.com" &&
    adminPassword === "deraiz1234"
  ) {
    alert("Login del administrador exitoso");
    // Redirigir a la pagina de administracion
    window.location.href = "../pages/administracion.html";
  } else {
    alert("Credenciales incorrectas para el administrador");
  }
}
