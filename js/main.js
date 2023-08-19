function exibirCalculos() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var soma = somar(input1.value, input2.value);
}

function somar(a,b) {
    return a+b;
}