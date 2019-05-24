$(document).ready(function(){

   $('#submit').click(function(event){
    event.preventDefault();
    console.log('Le picaste al boton')

    var email = $('#email').val();
    var nombre = $('#nombre').val();
    var asunto = $('#asunto').val();
    var mensaje = $('#mensaje').val();
    var status

    if(email.length > 5 && email.includes('@') && email.includes('.'))
    {
        console.log('Email Valido');
    } else {
        console.log('Email invalido');
    }
   }); 


});