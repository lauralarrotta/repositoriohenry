function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  if (
    objetoUsuario.hasOwnProperty("email") &&
    objetoUsuario.email !== undefined &&
    objetoUsuario.email !== null
  ) {
    return true; // Si cumple ambas condiciones, retornar true
  } else {
    return false; // Caso contrario, retornar false
  }
}

module.exports = tieneEmail;
