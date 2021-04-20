// exe1
function exe1() {
	// var nom = "Albert";
	nomArray = ["A", "L", "B", "E", "R", "T"];
	mnsj = "";
	for (i = 0; i < nomArray.length; i++) {
		mnsj += nomArray[i] + " => " + "seria la posició " + [i] + "<br>";
	}
	console.log(nomArray);

	document.getElementById("exe_1").innerHTML = mnsj;
}

function exe2() {

    const valorR = document.getElementById('cadena').value.toLowerCase();
    const valor = valorR.split('');
    console.log(valor)
    // const vocales = ["a","e","i","o","u"];
    const mnsj ="este es el mensaje";
    for(i=0;i<valor.length ;i++){
    
        if(!isNaN(valor[i])){
            console.log('En el seu nom hi ha un numero '+ valor[i]);
			document.getElementById("exe_2").innerHTML += ('En el seu nom hi ha un numero '+ valor[i] +"<br>");
        }
        else if( valor[i] === "a" ) {
			console.log('En el seu nom hi ha una vocal ' + valor[i]);
			document.getElementById("exe_2").innerHTML +=('En el seu nom hi ha una vocal ' + valor[i]+"<br>");
	
        }else if (valor[i] === "e"){
			console.log('En el seu nom hi ha una vocal ' + valor[i]);
			document.getElementById("exe_2").innerHTML +=('En el seu nom hi ha una vocal ' + valor[i]+"<br>");
        }else if (valor[i] === "i"){
			console.log('En el seu nom hi ha una vocal ' + valor[i]);
			document.getElementById("exe_2").innerHTML +=('En el seu nom hi ha una vocal ' + valor[i]+"<br>");
        }else if (valor[i] === "o"){
			console.log('En el seu nom hi ha una vocal ' + valor[i]);
			document.getElementById("exe_2").innerHTML +=('En el seu nom hi ha una vocal ' + valor[i]+"<br>");
        }else if (valor[i] === "u"){
			console.log('En el seu nom hi ha una vocal ' + valor[i]);
			document.getElementById("exe_2").innerHTML +=('En el seu nom hi ha una vocal ' + valor[i]+"<br>");
        }else {
			console.log('En el seu nom hi ha una consonant ' + valor [i]);
			document.getElementById("exe_2").innerHTML +=('En el seu nom hi ha una consonant ' + valor[i]+"<br>");
        }
    }
}


// exe3

function contar (){
	var nom = document.getElementById("escriu_nom").value;
	var nomLetras = nom.split("");
	var nomComplet =[];
	var count = 1;

	console.log(nom);
	console.log(nomLetras);

	var nomComplet = nomLetras.map(function (lletra, count ) {
		for (i = 0; i < nomLetras.length; i++) {
			
			// if(lletra in nomLetras){
			// 	nomLetras[count]++;
			// }else{
			// 	nomLetras[count]=1;
			// }
			return lletra[i] + " => " + "apareix  " + count + " vegades " + "<br> ";
		}
	})
	document.getElementById("exe_3").innerHTML = nomComplet.join("");
}


function exe3() {

	var datos = document.getElementById("escriu_nom_2").value;
	var letters = datos.split("");
	
	// OTRA OPCION
	const letras_contadas = contar_letras(letters);

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
	
	console.log(letras_contadas);
	// let texto = document.getElementById("exe_3_2opcio");
	
	document.getElementById("exe_3_2opcio").innerHTML = "Ho trobara al console.log" + [letras_contadas] ;




	// var letters = ["A", "L", "B", "E", "R", "T"];
	// const newLetters = [];
	// Mutable
	// for(i=0;i<letters.length;i++){
	// 	letters[i] = letters[i] + 2;
	// 	console.log(letters);
	// }

	// Inmutable : NO SE MODIFICA EL ARRAY ORIGINAL 

	// 1 forma inmutable
	// for (i = 0; i <letters.length; i++){
	// 	newLetters.push(letters[i] +2);
	// 	console.log(newLetters);
	// 	console.log(letters);
	// }

	// 2 forma inmutable metodo forEach
	
	// letters.forEach(item =>{
	// 	newLetters.push(item +2);
	// 	console.log(newLetters);
	// });

	// 3 forma inmutable metodo map 

	// const newLetters =letters.map(item =>{
	// 	// code
	// 	// code
	// 	return contar_letras(item) ;
	// })
	

	// console.log(newLetters);
	// console.log(letters);

}

// exe 4
// Metodo join() para unir todos los elementos de una matriz
// Metodo concat para sumar dor arrays en una
function exe4() {

	nomArray = ["A", "L", "B", "E", "R", "T"," "];
	cogArray = ["S", "A", "R", "D", "A"];
	espacio = ["  "];
	fullName = nomArray.concat(espacio, cogArray);


	document.getElementById("exe_4").innerHTML = fullName.join('');
}

// nivel2

function nivel2(){

	let cadenOcurrencias =  'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';  
	// var res = cadenOcurrencias.match(/@/gi);
	let reCorto = /\S+@\S+\.\S+/;
	
	let emails = cadenOcurrencias.match(reCorto);
	// let emails = cadenOcurrencias.indexOf(reCorto);
	// let emails = cadenOcurrencias.search(/\S+@\S+\.\S+/);

	console.log(emails);
	console.log(cadenOcurrencias);


	document.getElementById("resultat").innerHTML = "Els emails serian : " + emails;
	// porseparado = cadenOcurrencias.split(' ');
	
	// porseparado.forEach(element => {
	// 	if(element === function validar_email(element){})
	// 	console.log(element);
	// 	console.log(validar_email);
	// });
	
	
	// var res = porseparado.match(/@/g); 
	// /g global /i insensitive

	// console.log();
	// console.log(porseparado);
	
}

// function validar_email(email) {
// 		let cadenOcurrencias =  'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';  
// 		var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 		return regex.test(email) ? true : false;

// 	}

// 	function validarEmail(valor) {
// 		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
// 		 alert("La dirección de email " + valor + " es correcta.");
// 		} else {
// 		 alert("La dirección de email es incorrecta.");
// 		}
// 	  }
