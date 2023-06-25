function enviarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  var link = "mailto:alexisbogarin61@gmail.com?subject=Formulario de Contacto&body=Nombre: " + nombre + "%0D%0AEmail: " + email + "%0D%0AMensaje: " + mensaje;

  window.location.href = link;
}
