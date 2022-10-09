function bingo() {
  var carton = 24;
  var iguales = 0;
  for (var i = 0; i < numBingo.length; i++) {
    for (var j = 0; j < numBingo.length; j++) {
      if (numBingo[i] == numJugador[j]) iguales++;
    }
  }
  if (iguales == carton) {
    console.log("Ganaste el bingo!");
    document.getElementById("numGen").innerHTML = "GG";
  } else {
    console.log("No ha ganado el bingo!");
    document.getElementById("numGen").innerHTML = "F";
  }
}
