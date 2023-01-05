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

let checar1 = document.querySelector("#veri1");
let checar2 = document.querySelector("#veri2");
let checar3 = document.querySelector("#veri3");

var Resumo = document.querySelector("#sumarioPrecoPlano");

var sumarioPrecoServicos = document.querySelector("#sumarioPrecoServicos");
var sumarioPrecoServicos2 = document.querySelector("#sumarioPrecoServicos2");
var sumarioPrecoServicos3 = document.querySelector("#sumarioPrecoServicos3");
var sumarioPrecoServicos4 = document.querySelector("#sumarioPrecoServicos4");
var sumarioPrecoServicos5 = document.querySelector("#sumarioPrecoServicos5");
var sumarioPrecoServicos6 = document.querySelector("#sumarioPrecoServicos6");

var sumarioPrecoTotal = document.querySelector("#sumarioPrecoTotal");
var sumarioPrecoTotal2 = document.querySelector("#sumarioPrecoTota2");

var precoPlano = document.querySelector("#precoPlano");

var precoServico = document.querySelector("#precoServico");
var precoServico2 = document.querySelector("#precoServico2");
var precoServico3 = document.querySelector("#precoServico3");
var precoServico4 = document.querySelector("#precoServico4");
var precoServico5 = document.querySelector("#precoServico5");
var precoServico6 = document.querySelector("#precoServico6");

var precoTotal = document.querySelector("#precoTotal");
var precoTotal2 = document.querySelector("#precoTotal2");

if ( Periodo = 1 || document.querySelector("#periodo").checked && checar1.checked && checar2.checked && checar3.checked ) {
    Resumo.innerHTML = 'Básico (Mensal) : <hr>';
    precoPlano.innerHTML = 'R$9/Mês <hr>';

    sumarioPrecoServicos.innerHTML = 'Serviço online :';
    precoServico.innerHTML = 'R$5/Mês <br>';

    sumarioPrecoServicos2.innerHTML = 'Maior armazenamento :';
    precoServico2.innerHTML = 'R$15/Mês <br>';

    sumarioPrecoServicos3.innerHTML = 'Perfil personalizável :';
    precoServico3.innerHTML = 'R$1/Mês <br>';

    sumarioPrecoTotal.innerHTML = 'Total (Por mês)'+' :';
    precoTotal.innerHTML = ''+'R$30/Mês';

    sumarioPrecoServicos4.style.display = 'none';
    precoServico4.style.display = 'none';
    sumarioPrecoServicos5.style.display = 'none';
    precoServico5.style.display = 'none';
    sumarioPrecoServicos6.style.display = 'none';
    precoServico6.style.display = 'none';
    sumarioPrecoTotal2.style.display = 'none';
    precoTotal2.style.display = 'none';

} else if ( Periodo = 2 || document.querySelector("#periodo").checked && checar1.checked && checar2.checked && checar3.checked ) {
    Resumo.innerHTML = 'Básico (Anual) : <hr>';
    precoPlano.innerHTML = 'R$80/Ano <hr>';

    sumarioPrecoServicos.style.display = 'none';
    precoServico.style.display = 'none';
    sumarioPrecoServicos2.style.display = 'none';
    precoServico2.style.display = 'none';
    sumarioPrecoServicos3.style.display = 'none';
    precoServico3.style.display = 'none';
    sumarioPrecoTotal.style.display = 'none';
    precoTotal.style.display = 'none';

    sumarioPrecoServicos4.innerHTML = 'Serviço online :';
    precoServico.innerHTML = 'R$5/Mês <br>';

    sumarioPrecoServicos5.innerHTML = 'Maior armazenamento :';
    precoServico2.innerHTML = 'R$15/Mês <br>';

    sumarioPrecoServicos6.innerHTML = 'Perfil personalizável :';
    precoServico3.innerHTML = 'R$1/Mês <br>';

    sumarioPrecoTotal2.innerHTML = 'Total'+' :';
    precoTotal.innerHTML = ''+'R$80/Ano + R$21/Mês';

} else if ( Periodo = 1 || borda1.style.border == '1px solid blue' && checar1.checked && checar2.checked ) {
    Resumo.innerHTML = 'Básico (Mensal) : <hr>';
    precoPlano.innerHTML = 'R$9/Mês <hr>';

    sumarioPrecoServicos.innerHTML = 'Serviço online :';
    precoServico.innerHTML = 'R$5/Mês <br>';

    sumarioPrecoServicos2.innerHTML = 'Maior armazenamento :';
    precoServico2.innerHTML = 'R$15/Mês <br>';

    sumarioPrecoServicos3.style.display = 'none';
    precoServico3.style.display = 'none';

    sumarioPrecoTotal.innerHTML = 'Total (Por mês)'+' :';
    precoTotal.innerHTML = ''+'R$29/Mês';
} else if ( Periodo = 1 || document.getElementById("periodo").checked && checar1.checked ) {
    Resumo.innerHTML = 'Básico (Mensal) : <hr>';
    precoPlano.innerHTML = 'R$9/Mês <hr>';

    sumarioPrecoServicos.innerHTML = 'Serviço online :';
    precoServico.innerHTML = 'R$5/Mês <br>';

    sumarioPrecoTotal.innerHTML = 'Total (Por mês)'+' :';
    precoTotal.innerHTML = ''+'R$14/Mês';
} else if ( Periodo = 1 || document.getElementById("periodo").checked && checar1.checked && checar3.checked ) {
    Resumo.innerHTML = 'Básico (Mensal) : <hr>';
    precoPlano.innerHTML = 'R$9/Mês <hr>';

    sumarioPrecoServicos.innerHTML = 'Serviço online :';
    precoServico.innerHTML = 'R$5/Mês <br>';

    sumarioPrecoServicos3.innerHTML = 'Perfil personalizável :';
    precoServico3.innerHTML = 'R$1/Mês <br>';

    sumarioPrecoTotal.innerHTML = 'Total (Por mês)'+' :';
    precoTotal.innerHTML = ''+'R$15/Mês';
} else if ( Periodo = 1 || document.getElementById("periodo").checked && checar2.checked && checar3.checked ) {
    Resumo.innerHTML = 'Básico (Mensal) : <hr>';
    precoPlano.innerHTML = 'R$9/Mês <hr>';

    sumarioPrecoServicos2.innerHTML = 'Maior armazenamento :';
    precoServico2.innerHTML = 'R$15/Mês <br>';

    sumarioPrecoServicos3.innerHTML = 'Perfil personalizável :';
    precoServico3.innerHTML = 'R$1/Mês <br>';

    sumarioPrecoTotal.innerHTML = 'Total (Por mês)'+' :';
    precoTotal.innerHTML = ''+'R$25/Mês';
}