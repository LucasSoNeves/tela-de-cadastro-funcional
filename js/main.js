var Secao1 = document.getElementById("secao1");
var Secao2 = document.getElementById("secao2");
var Secao3 = document.getElementById("secao3");
var Secao4 = document.getElementById("secao4");

var Prosseguir = document.getElementById("botao");
var Voltar = document.getElementById("voltar");
var Continuar = document.getElementById("continuar");
var Voltar1 = document.getElementById("voltar1");
var Continuar1 = document.getElementById("continuar1");
var Voltar2 = document.getElementById("voltar2");
var Confirmar = document.getElementById("confirmar");

Prosseguir.onclick = function() {
    Secao1.style.display = "none";
    Secao2.style.display = "block";
}

Voltar.onclick = function() {
    Secao1.style.display = "block";
    Secao2.style.display = "none";
}

Continuar.onclick = function() {
    Secao2.style.display = "none";
    Secao3.style.display = "block";
}

Voltar1.onclick = function() {
    Secao2.style.display = "block";
    Secao3.style.display = "none";
}

Continuar1.onclick = function() {
    Secao3.style.display = "none";
    Secao4.style.display = "block";
}

Voltar2.onclick = function() {
    Secao3.style.display = "block";
    Secao4.style.display = "none";
}

Confirmar.onclick = function() {
    Secao4.style.display = "none";
}