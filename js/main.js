function exibirCalculos() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");


    // Get the value of the input element
    var num1 = input1.value;
    var num2 = input2.value;

    var resultadoSub = subtracao (num1, num2)
    var soma = somar(input1.value, input2.value);
} 

function subtracao(a, b){
    var sub = a - b
    return sub

}

function somar(a,b) {
    return a+b;
}