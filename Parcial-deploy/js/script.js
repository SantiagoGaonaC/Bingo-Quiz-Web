var numerosHasta = new Array(75);
const numGen = document.getElementById("numGen");
var numBingo = new Array();
var numJugador = new Array();
// mostrar array
// icono de ganar al dar botón
// PASAR A TS
function nuevaCartilla() {
  for (var i = 0; i < 24; i++) {
    selectCuadro(i);
  }
}
function selectCuadro(idCasilla) {
  var cuadroNum = "cuadro" + idCasilla;
  var genNum;
  //0a4 x cada posicion de columna
  var posicionCol = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  do {
    genNum = posicionCol[idCasilla] * 5 + obGenNum() + 1;
  } while (numerosHasta[genNum]);
  numerosHasta[genNum] = true;
  document.getElementById(cuadroNum).innerHTML = genNum;
  document.getElementById(cuadroNum).innerText = genNum;
  //numShowGen.textContent = genNum.toString();
}
function obGenNum() {
  return Math.floor(Math.random() * 75);
}
function otraNuevaCartilla() {
  for (var i = 1; i < numerosHasta.length; i++) {
    numerosHasta[i] = false;
  }
  nuevaCartilla();
  genNumero();
}

window.onload = function () {
  nuevaCartilla();
};

setInterval(function () {
  const randNum = () => Math.floor(Math.random() * (75 - 0 + 1) + 0);
  numGen.innerHTML = "";
  numGen.innerHTML = randNum();
  numBingo.push((numGen.innerHTML = randNum()));
  console.log(numBingo);
}, 5000);
