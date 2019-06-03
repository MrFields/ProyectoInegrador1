$(document).ready(function(){

   $('#submit').click(function(event){


    var email = $('#email').val();
    var nombre = $('#nombre').val();
    var asunto = $('#asunto').val();
    var mensaje = $('#mensaje').val();
    var estatusElm = $('#asunto');
    estatusElm.empty();

    if(email.length > 5 && email.includes('@') && email.includes('.'))
    {
        estatusElm.append('<div>Email valido</div>');
    } else {
        event.preventDefault();
        estatusElm.append('<div>Email invalido</div>');
    }

    if(asunto.length > 2){
        estatusElm.append('<div>Asunto valido</div>');
    }else{
        event.preventDefault();
        estatusElm.append('<div>Asunto invalido</div>');
    }

    if(mensaje.length > 20){
        estatusElm.append('<div>Mensaje valido</div>');
    }else{
        event.preventDefault();
        estatusElm.append('<div>Mensaje invalido</div>');
    }
   }); 


});