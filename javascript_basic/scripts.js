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

    var fraseC = ["Tinc","un","cotxe","de","color","blau"];
    // 1 opcio eliminar ultmo valor y añadir uno nuevo
    fraseC.pop();
    fraseC.push("verd");
    document.getElementById("exe6").innerHTML = fraseC.join(" ") ;
    
    // 2opcio cambar 5 posicion por nuevo valor
    fraseC[5]="verd";
    // console.log(fraseC);
    
    // 3 opcio
    fraseC.splice(5,1,"verd");
    console.log(fraseC);

    // 4 opcio
    // fraseCom= document.getElementById("frase_blau").value;
    // fraseCom.toString();
    // console.log(fraseCom);
    // fraseCom.join(" ");
    
 document.getElementById("exe6_2").innerHTML = "Tinc un cutxe de culur verd" ;


}
// exe7
function exe7(){
    let frase = ['taula', 'cadira', 'ordinador', 'libreta'];
    let mnsj ="";
    let i =0 ;
    for(i=0; i<frase.length; i++) {
    //  console.log(frase[i] + [i]);   
        mnsj +=  frase[i]+ " es la posició número "+[i] +"<br>" ;
    }
    // para consola
    frase.forEach(function(elemento, indice, array) {
        console.log(elemento, indice);
    })
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

// Nivell 3 laCalculadora
var operandoa;
var operandob;
var operacion;

function init(){
//variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
  }
//Eventos de click
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}
// funciones
function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }