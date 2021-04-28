$(function() {

    $.validator.setDefaults({
      errorClass: 'help-block' ,
      highlight: function(element) {
        $(element)
          .closest('.form-group')
          .addClass('has-error');
      },
      unhighlight: function(element) {
        $(element)
          .closest('.form-group')
          .removeClass('has-error');
      },
      errorPlacement: function (error, element) {
        if (element.prop('type') === 'checkbox') {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      }
    });

    $.validator.addMethod('strongPassword', function(value, element) {
      return this.optional(element) 
        || value.length >= 6
        && /\d/.test(value)
        && /[a-z]/i.test(value);
    }, 'La contraseña no tiene el formato válido, mínimo 6 carácteres, un número y una mayuscula\'.')
  
    $("#register-form").validate({
      rules: {
        email: {
          required: true,
          email: true,
          remote: "http://localhost:3000/inputValidator"
        },
        password: {
          required: true,
          strongPassword: true
        },
        password2: {
          required: true,
          equalTo: '#password'
        },
        firstName: {
          required: true,
          nowhitespace: true,
          lettersonly: true
        },
        secondName: {
          required: true,
          nowhitespace: true,
          lettersonly: true
        },
       
        address: {
          required: true
        },
        town: {
          required: true,
          lettersonly: true
        },
        postcode: {
          required: true,
          // postcodeUK: true,
          postcodeSpain:true
        },
        terms: {
          required: true
        }
      },
      messages: {
        email: {
          required: 'Por favor introduzca un correo electrónico.',
          email: 'Por favor introduzca un <em>valido</em> correo electrónico.',
          remote: $.validator.format("{0} Este correo ya esta registrado.")
        }
      }
    });
  
  });