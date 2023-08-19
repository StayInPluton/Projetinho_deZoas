function exibirCalculos() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    var num1 = input1.value;
    var num2 = input2.value;

    var resultadoSub = subtracao (num1, num2)
    var soma = somar(input1.value, input2.value);
    var divisao = dividir(input1.value, input2.value)
    var multiResultado = multiplica(input1.value, input2.value) ;
}

function subtracao(a, b){
    var sub = a - b
    return sub
}

function somar(a,b) {
    return a+b;
}

function dividir(a, b){
    return a/b;
}
function multiplica (a,b){
    var multi = a*b;
    return multi
}