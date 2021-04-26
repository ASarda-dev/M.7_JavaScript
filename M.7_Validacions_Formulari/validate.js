const form = document.getElementById('myFormId');

// const expresiones = {
// 	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	password: /^.{4,12}$/, // 4 a 12 digitos.
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
// }

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputEmail = document.getElementById('inputEmail');
	
	var inputName = document.forms["myForm"]["inputName"];
	var inputPassword = document.forms["myForm"]["inputPassword"];
	var inputConPassword = document.forms["myForm"]["inputConPassword"];
	var inputAddress = document.forms["myForm"]["inputAddress"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	var inputCity = document.forms["myForm"]["inputCity"];
	var inputZip = document.forms["myForm"]["inputZip"];
	var gridCheck = document.forms["myForm"]["gridCheck"];

	if(inputName.value == "" ) {
		inputName.classList.add("is-invalid");
		document.getElementById("errorName").textContent = "Tiene que escribir su nombre";
		acumErrores ++;
	} else if(!validar_nombre(inputName.value)){
		inputName.classList.add("is-invalid");
		document.getElementById("errorName").textContent = "Tiene que añadir su nombre con mínimo 3 letras";
		acumErrores ++;
	}
	

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Tiene que poner su correo electrónico";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato válido";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "La contraseña es obligatoria";
		acumErrores ++;
	}else if(!validar_contraseña(inputPassword.value)){
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "La contraseña no tiene el formato válido, mínimo 8 carácteres, un número y una mayuscula";
		acumErrores ++;
	}
	
    if(inputConPassword.value != inputPassword.value) {
		inputConPassword.classList.add("is-invalid");
		document.getElementById("errorConPassword").textContent = "Tiene que ser igual a su contraseña ";
		acumErrores ++;
	}
	
    if(inputAddress.value == "") {
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorAddress").textContent = "Su dirección es obligatoria";
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Falta la ciudad";
		acumErrores ++;
	}
	
	if(inputZip.value == "" /* || inputZip.length!=5 */) {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "El codi postal no comple los requisitos";
		acumErrores ++;
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Acepta las bases";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    registerValidate();
}, true);

function validar_nombre(name) {

	var regex = /^.{3,12}$/;// 3 a 12 digitos
	return regex.test(name) ? true: false;
}

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}


function validar_contraseña(password) {
	var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; /* Mínimo de ocho caracteres, una letra mayúscula, una letra minúscula y un número */

	// 8 a 12 digitos
	// var regex = /^.{8,12}$/;
	return regex.test(password) ? true: false;
}

