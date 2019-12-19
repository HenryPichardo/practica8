$(function() {
    // lets test this 
    var isOkayName = false;
    var isOkayApellido = false;
    var isOkayEmail = false;
    var isOkayPassword = false;
    var isOkayConfirmPassword = false;
    var isOkaySexo = false;
    $("#submit").click(function() {
        var name = $("#name").val();
        var apellido = $("#apellido").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirm-password").val();
        var sexo = $("#gender").val();
        if (name == "") {
            error("name", "es un campo requerido")
            isOkayName = false;
        } else {
            clearError("name");
            isOkayName = true;
        }
        if (apellido == "") {
            error("apellido", "es un campo requerido")
            isOkayApellido = false;
        } else {
            clearError("apellido");
            isOkayApellido = true;
        }
        if (email == "" || email.indexOf("@") < 0 || email.indexOf(".") < 0 || email.indexOf(" ") >= 0) {
            error("email", "Direccion de E-mail invalida");
            isOkayEmail = false;
        } else {
            clearError("email");
            isOkayEmail = true;
        }
        if (password == "") {
            error("password", "es un campo requerido");
            isOkayPassword = false;
        } else {
            clearError("password");
            isOkayPassword = true;
        }
        if (password != confirmPassword) {
            error("confirm-password", "Your password did not match");
            isOkayConfirmPassword = false;
        } else {
            clearError("confirm-password");
            isOkayConfirmPassword = true;
        }
        if (sexo == "") {
            error("sexo", "Por favor seleccione una opcion");
            isOkaySexo = false;
        } else {
            clearError("sexo");
            isOkaySexo = true;
        }
        // now we nee to submit the form if everything is okay

        if (isOkayName && isOkayApellido && isOkayEmail && isOkayPassword && isOkayConfirmPassword && isOkaySexo) {
            // everything looks promising, you can now submit your form to the databases
            alert("Form submited");
        }
    });

    // now we validating
});

function error(id, errorText) {
    // this is the css id <input type='' name='' id='id' /> 
    $("#" + id).next().show().html("<span class='error'>" + errorText + "</span>");
    $("#" + id).addClass("error-indicator");
}

function clearError(id) {
    $("#" + id).next().hide();
    $("#" + id).removeClass("error-indicator");
}
// $(document).ready(function() {

//     $("#boton1").click(function() {
//         /* $("p").append("hola mundo en Jquery");
//         $("div").append("hola mundo en Jquery para div"); */
//         var valor1 = $("#valor1").val();
//         var valor2 = $("#valor2").val();
//         var resultado = parseFloat(valor1) + parseFloat(valor2);
//         $("#resultado").val(resultado);


/* $(".clase1").append("Esta es la clase1 ");
  $(".clase2").append("Esta es la clase2");
  $("#Id1").append("Este es el Id 1");
  $("#Id2").append("Este es el Id 2"); */
//     });
// })