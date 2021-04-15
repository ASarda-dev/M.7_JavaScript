// console.log("hola mundo");

// var precioCoche = 50000;
// var dineroahorrado = prompt("Quanto dinero tienes");
// var edad = prompt("Que edad tienes? ");
// var loteria = prompt("Has ganado la loteria ");

// if(precioCoche <= dineroahorrado && edad>=18) {
//     console.log("Puedes comprar el coche")
// }else if(loteria=="si") {
//     console.log("claro has ganado la loteriar")
// }else{
//     console.log("no puedes comprarlo")
// }
// var nombre =["A", "L", "B", "E", "R", "T"]
// var coche = ["Ferrari" , "Ford" , "audi"]
// var nombre= "albert khhqer jelrjwer  weew t"

// var num1 = parseInt(prompt("Dime un numero"));
// var num2 = parseInt(prompt("Dime otro numero"));

// var operacion = prompt("Que operacion quieres realizar ? suma/resta/division/multiplicacion").toLowerCase();

// if(operacion != "suma"){
//     console.log("esta equivocado")
//     alert("esta equivocado")

// }else{
//     console.log(num1 +num2)
// }




// var cuerpo=document.getElementById("cuerpo");
// var colorWeb=prompt("Introduce el color azul/verde/rojo").toLowerCase();

// if(colorWeb=="azul"){
//     cuerpo.style.backgroundColor="blue";
//     console.log("color azul")
// }else if(colorWeb=="verde"){
//     cuerpo.style.backgroundColor="green";
// }else if(colorWeb=="rojo"){
//     cuerpo.style.backgroundColor="red"
// }else{
//     console.log("no esta contemplado");
//     cuerpo.style.backgroundColor="orange"
// }

function texto(){
    var texto = document.getElementById("texto").value.toLowerCase();
console.log(texto)
    textoArray= texto.split("");
    console.log(textoArray)

    for (i = 0; i <textoArray.length; i++){
        console.log(textoArray[i])
        document.write = textoArray[i];
    }

    console.log(textoArray)
}


