// exe1
function exe1(){
// var nom = "Albert";
nomArray = ["A","L","B","E","R","T"];
mnsj= "";
for(i=0; i<nomArray.length; i++){
    mnsj +=nomArray[i] + " => " +[i]+"<br>";
}
console.log(nomArray);

document.getElementById("exe_1").innerHTML = mnsj;
}
// exe2
function exe2(){
    nomArray = ["A","L","B","E","R","T"];
mnsj= "";

let vocales='aeiouAEIOU'; 

newArray= nomArray.indexOf("a","e");

// console.log(nomArray);
console.log(newArray);

// let letras='ca';
// if (vocales.indexOf(nomArray) != -1) ){

//     mmsj += nomArray[i];
// }

 
}