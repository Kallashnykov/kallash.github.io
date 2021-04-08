
function mostrarImc() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    var resultado = "";
        
    if (imc < 18.5 ){
        resultado = "abaixo do peso";
    } else if ((imc >= 18.5) && (imc < 25)){
        resultado = "peso normal";
    } else if ((imc >= 25) && (imc < 30)){
        resultado = "sobrepreso";
    } else if ((imc >= 30) && (imc < 35)){
        resultado = "obesidade grau I";
    } else if ((imc >= 35) && (imc < 40)){
        resultado = "obesidade severa grau II";
    } else if (imc >= 40){
        resultado = "obesidade mórbida grau III";
    }
    document.getElementById("imc").innerHTML = "O seu IMC é " + imc;
    document.getElementById("resultado").innerHTML = "Isso indica que você está com " + resultado;
}