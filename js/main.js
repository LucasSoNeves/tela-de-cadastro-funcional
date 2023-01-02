var Secao1 = document.getElementById("secao1");
var Secao2 = document.getElementById("secao2");
var Secao3 = document.getElementById("secao3");
var Secao4 = document.getElementById("secao4");
var Secao5 = document.getElementById("secao5");
var Principal = document.getElementById("principal");

var Prosseguir = document.getElementById("botao");
var Voltar = document.getElementById("voltar");
var Continuar = document.getElementById("continuar");
var Voltar1 = document.getElementById("voltar1");
var Continuar1 = document.getElementById("continuar1");
var Voltar2 = document.getElementById("voltar2");
var Confirmar = document.getElementById("confirmar");

Prosseguir.onclick = function() {
    var dadoNome = document.getElementById("nome").value;
    var dadoEmail = document.getElementById("email").value;
    var padrao = /[^a-zà-ú- ]/gi;
    var padraoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var texto = dadoNome.match(padrao);
    var textoEmail = dadoEmail.match(padraoEmail);

    if ( texto  || !dadoNome ) {
        window.alert('O nome deve possuir apenas letras!');
        Secao1.style.display = 'block';
        Secao2.style.display = 'none';
    } else {
            Secao1.style.display = "none";
            Secao2.style.display = "block";
    }

    if ( textoEmail || !dadoEmail ) {
        window.alert('Insira o email corretamente!');
        Secao1.style.display = 'block';
        Secao2.style.display = 'none';
    } else {
        Secao1.style.display = "none";
        Secao2.style.display = "block";
    }
    
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
    Secao5.style.display = "block";
    Principal.style.display = 'none';
    Secao5.style.marginTop = '-154%';
    Secao5.style.marginLeft = '0.5%';
}