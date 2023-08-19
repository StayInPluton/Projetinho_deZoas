function exibirCalculos() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    // Get the value of the input element
    var multiResultado = multiplica(input1.value, input2.value) ;
}

function multiplica (a,b){
    var multi = a*b;
    return multi
}