function funcionIniciar() {
  let name = document.getElementById("nombre").value;
  document.getElementById("demo").innerHTML = "Hola "+name+", a jugar!";
  document.getElementsByClassName("bloque1")[0].style.display = "none";
  document.getElementsByClassName("pregunta")[0].style.display = "block";
}

function funcionSiguiente1() {
  document.getElementById("demo").style.display = "none";
  document.getElementsByClassName("pregunta")[0].style.display = "none";
  document.getElementsByClassName("pregunta")[1].style.display = "block";
}
function funcionSiguiente2() {
  document.getElementsByClassName("pregunta")[1].style.display = "none";
  document.getElementsByClassName("pregunta")[2].style.display = "block";
}
function resultado() {
  var score = 0;
  if (document.getElementById("correcta1").checked) {
    score++;
  }
  if (document.getElementById("correcta2").checked) {
    score++;
  }
  if (document.getElementById("correcta3").checked) {
    score++;
  }
  document.getElementsByClassName("pregunta")[2].style.display = "none";
  document.getElementById("resultado").innerHTML = "Tu puntaje fue " + score +" de 3 en el mejor quiz de Crepusculo";
}