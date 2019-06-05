$(document).ready(function(){

   $('#submit').click(function(event){


    var email = $('#email').val();
    var asunto = $('#asunto').val();
    var mensaje = $('#mensaje').val();
 

    if(email.length > 5 && email.includes('@') && email.includes('.'))
    {
        console.log(email);
    } else {
        event.preventDefault();
        alert('Email invalido, favor de verificar su correo');
    }

    if(asunto.length > 5){
        console.log(asunto);
    }else{
        event.preventDefault();
        alert('Asunto muy corto, favor de ser mas descriptivo');
    }

    if(mensaje.length > 15){
        console.log(mensaje.length);
    }else{
        event.preventDefault();
        alert('Mensaje muy corto, favor de ser mas descriptivo');
    }
   }); 


});