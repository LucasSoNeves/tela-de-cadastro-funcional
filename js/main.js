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
    var padrao = /[^a-zà-ú- ]/gi;
    var texto = dadoNome.match(padrao);

    if ( texto  || !dadoNome ) {
        window.alert('O nome deve possuir apenas letras!');
        Secao1.style.display = 'block';
        Secao2.style.display = 'none';
    } else {
            Secao1.style.display = "none";
            Secao2.style.display = "block";
    }

    var dadoEmail = document.getElementById("email").value;
    var padraoEmail = /^(?=[a-z])(?=[A-Z])(?=[0-9])(?![!@#$%&_-])$/;
    var textoEmail = dadoEmail.match(padraoEmail);

    if ( textoEmail  || !dadoEmail ) {
        window.alert('Email inválido!');
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

var borda1 = document.getElementById("bordaPlano1");
borda1.style.border = '1px solid lightgray';

function plano1() {
    borda1.addEventListener('click', function() {
        if ( borda1.style.border = '1px solid lightgray' || borda2.style.border == '1px solid blue' || borda1.style.border == '1px solid blue' ) {
            borda1.style.border = '1px solid blue';
            borda2.style.border = '1px solid lightgray';
            borda3.style.border = '1px solid lightgray';
        }

        borda1.addEventListener('click',  function() {
            if ( borda1.style.border = '1px solid blue' ) {
                borda1.style.border = '1px solid lightgray';
            }
            plano1();
        })
    })
}

var borda2 = document.getElementById("bordaPlano2");
borda2.style.border = '1px solid lightgray';

function plano2() {
    borda2.addEventListener('click', function() {
        if ( borda2.style.border = '1px solid lightgray' || borda1.style.border == '1px solid blue'|| borda3.style.border == '1px solid blue') {
            borda2.style.border = '1px solid blue';
            borda1.style.border = '1px solid lightgray';
            borda3.style.border = '1px solid lightgray';
        }

        borda2.addEventListener('click',  function() {
            if ( borda2.style.border = '1px solid blue' ) {
                borda2.style.border = '1px solid lightgray';
            }
            plano2();
        })
    })
}

var borda3 = document.getElementById("bordaPlano3");
borda3.style.border = '1px solid lightgray';

function plano3() {
    borda3.addEventListener('click', function() {
        if ( borda3.style.border = '1px solid lightgray' || borda1.style.border == '1px solid blue' || borda2.style.border == '1px solid blue') {
            borda3.style.border = '1px solid blue';
            borda1.style.border = '1px solid lightgray';
            borda2.style.border = '1px solid lightgray';
        }

        borda3.addEventListener('click',  function() {
            if ( borda3.style.border = '1px solid blue' ) {
                borda3.style.border = '1px solid lightgray';
            }
            plano3();
        })
    })
}

var Periodo = document.getElementById("periodo").value;
var precoAnual1 = document.getElementById("precoPlano1");
var precoAnual2 = document.getElementById("precoPlano2");
var precoAnual3 = document.getElementById("precoPlano3");

function precosDosPlanosAnual() {
    if ( Periodo = 2 || document.getElementById("periodo").checked ) {
        precoAnual1.innerHTML = 'R$ 80,00/Ano';
        precoAnual2.innerHTML = 'R$ 130,00/Ano';
        precoAnual3.innerHTML = 'R$ 190,00/Ano';
    }
}

function precosDosPlanosMensal() {
    if ( Periodo = 1 || document.getElementById("periodo").checked ) {
        precoAnual1.innerHTML = 'R$ 9,00/Mês';
        precoAnual2.innerHTML = 'R$ 15,00/Mês';
        precoAnual3.innerHTML = 'R$ 20,00/Mês';
    }
}


var cont = 0;
var checar1 = document.getElementById("veri1");
var checar2 = document.getElementById("veri2");
var checar3 = document.getElementById("veri3");

if ( checar1.checked ) {
    cont += 5,00;
} else if ( checar2.checked ) {
    cont += 15,00;
} else if ( checar3.checked ) {
    cont += 1,00;
} else if ( checar1.checked && checar2.checked && checar3.checked) {
    cont += 21,00;
} else if ( checar1.checked && checar3.checked ) {
    cont += 6,00;
} else if ( checar1.checked && checar2.checked ) {
    cont += 20,00;
} else if ( checar2.checked && checar3.checked ) {
    cont += 16,00;
}