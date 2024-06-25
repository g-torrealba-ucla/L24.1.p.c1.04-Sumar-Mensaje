// Declaración tradicional
mostrarMensaje = function (mensaje) {
  alert(mensaje);
};
//Llamado de la función mostrarMensaje
mostrarMensaje("HOLA MUNDO ... ¡MI PRIMER PROGRAMA!");

// Declaración con función flecha
sumarNumeros = (nro1, nro2, nro3) => {
  return nro1 + nro2 + nro3;
};
// Llamado de las funciones anteriores
// Concatenación tradicional, con +
mostrarMensaje("Los números 2 + 4 + 6 suman: " + sumarNumeros(2, 4, 6));

// Concatenación con template literals, con la comilla `
mostrarMensaje(`Los números 2 + 4 + 6 suman: ${sumarNumeros(2, 4, 6)}`);

// Ambos producen el mismo resultado
