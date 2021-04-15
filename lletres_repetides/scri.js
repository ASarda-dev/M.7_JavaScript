// exe1
function exe1() {
	// var nom = "Albert";
	nomArray = ["A", "L", "B", "E", "R", "T"];
	mnsj = "";
	for (i = 0; i < nomArray.length; i++) {
		mnsj += nomArray[i] + " => " + [i] + "<br>";
	}
	console.log(nomArray);

	document.getElementById("exe_1").innerHTML = mnsj;
}
// exe2
// function exe2_1() {
// 	nomArray = ["A", "L", "B", "E", "R", "T"];
// 	mnsj = "";
// 	let vocales = 'aeiouAEIOU';
// 	for (i = 0; i < nomArray.length; i++) {
// 		if (nomArray === nomArray.indexof(vocales[i])) {
// 			mnsj += "He trobat la VOCAL:   " + vocales[i];
// 		} else if (nomArray === nomArray.indexof(consonantes)) {
// 			mnsj += "He trobat la CONSONANT:  " + consonantes[i];
// 		} else {
// 			msj += "Els noms de persones no contenen el número:  " + [i]
// 		}
// 	}

// }

function exe2() {
	var cadena = document.getElementById("cadena").value;
	// var cadena = prompt("Introdueix el seu nom");
	// metodo split para separrar una cadenaenarrays
	var lletras = cadena.split('');
	let vocales = 'aeiouAEIOU';
	let numeros ='123456789';
	let msj ="";

	// var lletr_vocales = lletras.match(/[aeiou]/g);
	// var lletr_numeros = lletras.match(/[0-9]/g);
	// console.log(lletr_vocales);
	// console.log(lletr_numeros);

	for(i=0;i<lletras.length;i++){

		if(lletras != numeros){
			msj = "Els noms de persones no contenen numeros ";
			
		} else if (lletras === lletras.indexof(vocales)) {
			msj = "He trobat la Vocal :" ;
		}else{
			msj = "He trobat la consonant" ;
			
		}
	}
	document.getElementById('exe_2').innerHTML = "Ho trobara al console.log"
	console.log(cadena);
	console.log(lletras);
	console.log(msj);
}

// at ex 2
// var cadena = prompt("Introdueix el seu nom");
// var numchar = cadena.length; //Devuelve la longitud del string.
// cadena = cadena.toUpperCase(); //Devuelve el string en mayúsculas o minusculas.
// var car;
// let vocales = 'aeiouAEIOU';
// var msj = "";
// var contador = 0;
// var i;
// for (i = 0; i < numchar; i++) {
// 	car = cadena.charAt(i); //recupera el caracter i del string.
// 	if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
// 		contador++;
// 		msj = "He trobat la Vocal :" + car;
// 	} else if (car != vocales) {
// 		msj = "He trobat la consonant :" + car;
// 		contador++;

// 	} else {
// 		msj = "Els noms de persones no contenen numeros ";
// 		break;
// 	}
// }
// document.getElementById('exe_2').innerHTML = "Ho trobara al consoles.log"


// exe3

// function contar (){
// 	var nom = document.getElementById("escriu_nom").value;

// 	var nomLetras = nom.join(',');

// 	console.log(nom.length);

// 	var nomComplet = nom.map(function (nom, index) {
// 		for (i = 0; i < nom.length; i++) {
// 			return nom[i] + " => " + " posició : => " + index + "<br>";
// 		}
// 	})
// 	console.log(nomComplet);
// 	document.getElementById("exe_3").innerHTML = nomComplet;
// }


function exe3() {
	// var texto = document.getElementById("escriu_nom").value;
	// var letters = texto.join('');
	var letters = ["A", "L", "B", "E", "R", "T"];

	const letras_contadas = contar_letras(letters);

	console.log(letras_contadas);

	function contar_letras(letras) {
		let letras_contadas = {};

		letras.forEach(function (letra) {
			if (letra in letras_contadas) {
				letras_contadas[letra]++;
			} else {
				letras_contadas[letra] = 1;
			}
		});

		return letras_contadas;
	}

	document.getElementById("exe_3").innerHTML = "Ho trobara al console.log" + letras_contadas;

	// arraySincomas = nomArray.join();
	// var nomComplet = nomArray.map(function (nom, index, array) {
	// 	for (i = 0; i < nomArray.length; i++) {
	// 		return nom[i] + " => " + " posició : => " + index + "<br>";
	// 	}
	// })
	// console.log(nomArray);
	// console.log(nomComplet);
}

// exe 4
// Metodo join() para unir todos los elementos de una matriz
// Metodo concat para sumar dor arrays en una
function exe4() {

	nomArray = ["A", "L", "B", "E", "R", "T"];
	cogArray = ["S", "A", "R", "D", "A"];
	espacio = [" => "];
	fullName = nomArray.concat(espacio, cogArray);


	document.getElementById("exe_4").innerHTML = fullName.join('');
}

// nivel2

function nivel2(){

	let cadenOcurrencias =  'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';  
	// var res = cadenOcurrencias.match(/@/gi);

	porseparado = cadenOcurrencias.split(' ');
	
	porseparado.forEach(element => {
		if(element === function validar_email(element){})
		console.log(element);
		console.log(validar_email);
	});
	// var res = porseparado.match(/@/g); 
	// /g global /i insensitive
	
	
	console.log();
	console.log(porseparado);
	
	function validar_email(email) {
		var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email) ? true : false;
	}
}


function contarOcurrencias(cadena, subcadena){
	let contarOcurrencias = 0;
	let posicion = 0;

	while((posicion = cadena.indexof(subcadena, posicion)) !== -1){
		++contarOcurrencias;
		posicion += subcadena.length;
	}
}
