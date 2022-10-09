function prueba(posicion) {
  const innerCuadro = document.getElementsByName("cuadro")[posicion].innerText;
  numJugador.push(innerCuadro);
  console.log(innerCuadro);
  console.log(numJugador);
}
