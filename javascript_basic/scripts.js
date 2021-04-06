// Exercici 1
function exe1(){
    console.log("Hola mundo");
    alert("Hola mundo, revisarlo en la consola");

}
// Exe 2
function exe2(){
    alert("El meu nom es: Albert Sarda")
    
}
// Exe 3
function exe3(){
    var nom = "Albert";
    var cognom = "Sarda";
    var nomComplet = nom + " " + cognom;
    document.getElementById("exe3").innerHTML = nomComplet;
}
// Exe4
function exe4(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("exe4").innerHTML = "El resultat de la operació es " +resultado;
    
}
// Exe5
function exe5(){
    var nota = document.getElementById("nota_examen").value;
    var mensaje = " ";
    if(nota < 5){
        mensaje = "La seva nota es " + nota + " " + "Suspés"
    }else if (nota >=5 && nota <=6){
        mensaje = "La seva nota es " + nota + " " + "Aprobat"
    }else if(nota >=6 && nota<= 8){
        mensaje = "La seva nota es " + nota + " " + "Notable"
    }else{
        mensaje = "La seva nota es " + nota + " " + "Excelent"
    }

    document.getElementById("exe5").innerHTML = mensaje;
    alert(mensaje);
}

// Exe6
function exe6(){
    var frase = document.getElementById("frase");
    var mensaje = "";
    console.log(frase);
    frase.contains("blau");
    document.getElementById("exe6").innerHTML = mensaje;
}
// exe7
function exe7(){
    let frase = ['taula', 'cadira', 'ordinador', 'libreta'];
    let myArray = frase.split(',');
    let mnsj ="";
    let i =0 ;
    for(i=0; i<frase.length; i++) {
        frase.split('');
        mnsj +=  frase[i] ;
    }
    // for(i=0; i<myArray.length; i++) {
    //     mnsj +=  myArray[i] ;
    // }
    document.getElementById("exe7").innerHTML = mnsj;

   
}

// exe8

function exe8(){
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var operador = document.getElementById("operador").value;
    var resultat = "";

    switch (operador){
        case "+":
            resultat = opSuma(valor1,valor2);
            break;
        case "-":
            resultat = opResta(valor1,valor2);
            break;   
        case "*":
            resultat = opMultiplicacion(valor1,valor2);
            break;
        // case "/":
        //     resultat = opDivision(valor1,valor2);
        //     break;
        // case "%":
        //     resultat = opResto(valor1,valor2);
        //     break;
        default:
        alert("Introdueix un operador correcte");
    }
    document.getElementById("exe8").innerHTML = resultat;
    
    document.getElementById("exe8").innerHTML = "function calculadora( " + valor1 + " ,"+ operador + " ," + valor2 + " )" + "{" + resultat +"}" +
    "var resultat = calculadora ( " + operador + "," + valor1 + "," + valor2 +") ;" + "El resultat total sera " + resultat;
}
function opSuma(valor1,valor2){
    return valor1 + valor2;
}
function opResta(valor1,valor2){
    return valor1 - valor2;
}
function opMultiplicacion(valor1,valor2){
    return valor1 * valor2;
}
function opDivision(valor1,valor2){
    return valor1 / valor2;
}
function opResto(valor1,valor2){
    return valor1 % valor2;
}

// Nivell 2 ex 1

function nivell2_exe1(){
    var valor1_nivell2 = parseInt(document.getElementById("valor1_nivell2").value);
    var valor2_nivell2 = parseInt(document.getElementById("valor2_nivell2").value);
    var operador_nivell2 = document.getElementById("operador_nivell2").value;
    var resultat = "";

    switch (operador_nivell2){
        case "+":
            resultat = opSuma(valor1_nivell2,valor2_nivell2);
            break;
        case "-":
            resultat = opResta(valor1_nivell2,valor2_nivell2);
            break;   
        case "*":
            resultat = opMultiplicacion(valor1_nivell2,valor2_nivell2);
            break;
        case "/":
            resultat = opDivision(valor1_nivell2,valor2_nivell2);
            break;
        case "%":
            resultat = opResto(valor1_nivell2,valor2_nivell2);
            break;
        default:
        alert("Introdueix un operador correcte");
    }
    document.getElementById("nivell2_exe").innerHTML = "El resultat es " + resultat;
}
function opSuma(valor1_nivell2,valor2_nivell2){
    return valor1_nivell2 + valor2_nivell2
}
function opResta(valor1_nivell2,valor2_nivell2){
    return valor1_nivell2 - valor2_nivell2;
}
function opMultiplicacion(valor1_nivell2,valor2_nivell2){
    return valor1_nivell2 * valor2_nivell2;
}
function opDivision(valor1_nivell2,valor2_nivell2){
    return valor1_nivell2 / valor2_nivell2;
}
function opResto(valor1_nivell2,valor2_nivell2){
    return valor1_nivell2 % valor2_nivell2;
}