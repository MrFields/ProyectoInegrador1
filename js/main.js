function CE() {
   $('#title').html(
      "Inscripcion para Constancia Empleador"
   );
   $('#description').html("La Constancia de Inscripción del Empleador es el registro que debe obtener todo empleador residente en México," +
      "sea persona moral o física, ante el Instituto Nacional de Migración (INM) que le permite realizar trámites migratorios relacionados" +
      "con sus trabajadores extranjeros, entre otros trámites, emitir ofertas de empleo para poder contratar ejecutivos, profesionistas" +
      "o técnicos especializados provenientes del extranjero, como lo señala el primer párrafo, del artículo 166, del Reglamento de la " +
      "Ley de Migración.");
   $('#archivos').html(
      '<h3>Favor de proporcionar la informacion siguiente</h3>' +
      '<form action="mailto:dm.danmarlo@gmail.com" method="post" id="myform">' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Acta constitutiva y sus modificaciones.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Instrumento público que contenga el poder donde conste las facultades del Representante legal de la empresa.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      ' <label class="negritas" for="exampleFormControlFile1"> •IFE del Rep. Legal de la empresa.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      ' </div>' +
      '<div class="form-group">' +
      ' <label class="negritas" for="exampleFormControlFile1"> •Constancia de inscripción en el RFC.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Constancia de la última declaración de impuestos.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Comprobante de domicilio (menor de 30 días).</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Lista de empleados y sus nacionalidades.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<input type="submit" class="btn btn-info" href="javascript: submitform();">' +
      '</form>'
   );

}

function VTOT() {
   $('#title').html(
      "Visa Temporal por Oferta de Trabajo"
   );
   $('#description').html("Te sirve para viajar a México, presentarte en los lugares autorizados al tránsito internacional" +
    "de personas y tu propósito sea permanecer en territorio mexicano por un período mayor a 180 días y no mayor a 4 años.");
   $('#archivos').html(
      '<h3>Favor de proporcionar la informacion siguiente</h3>' +
      '<form action="mailto:dm.danmarlo@gmail.com" method="post" id="myform">' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Constancia de Empleador.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Copia de pasaporte vigente.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      ' <label class="negritas" for="exampleFormControlFile1"> •Actividad laboral para desarrollar y nombre del puesto.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      ' </div>' +
      '<div class="form-group">' +
      ' <label class="negritas" for="exampleFormControlFile1"> •Temporalidad que se oferta el trabajo al extranjero.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Lugar de trabajo.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Quien tendrá la responsabilidad de financiar el viaje de la persona extranjera (empresa o el extranjero).</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '</div>' +
      '<input type="submit" class="btn btn-info" href="javascript: submitform();">' +
      '</form>'
   );
}
function VTUF()
{
   $('#title').html(
      "Visa Temporal por Unidad Familiar"
   );
   
   $("#description").html(
      "¿Eres persona extranjera titular de la condición de estancia de visitante, deseas residir de manera temporal"+ 
      "en el país y tienes vínculo con mexicano o persona extranjera residente temporal o permanente?."
   );
   $("#archivos").html(
      '<h3>Favor de proporcionar la informacion siguiente</h3>' +
      '<form action="mailto:dm.danmarlo@gmail.com" method="post" id="myform">' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •INE del cónyuge (parentesco consanguíneo) mexicano o extranjero legal en el país.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '</div>' +
      '<div class="form-group">' +
      '<div class="form-group">' +
      ' <label class="negritas" for="exampleFormControlFile1"> •Acta de nacimiento del cónyuge (parentesco consanguíneo) mexicano o extranjero legal en el país.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      ' </div>' +
      '<div class="form-group">' +
      ' <label class="negritas" for="exampleFormControlFile1">•Copia de pasaporte vigente del visado.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Domicilio de residencia en el país de origen.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Si ya esta en el país, el original del documento migratorio.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '</div>' +
      '<input type="submit" class="btn btn-info" href="javascript: submitform();">' +
      '</form>'
   );
}
function CCRT()
{
   $('#title').html(
      "Cambio de Condición de residencia temporal"+
      "estudiante a residente temporal con permiso de trabajo"
   );
   
   $("#description").html
   (
      "¿Eres persona extranjera titular de la condición de estancia de residente temporal estudiante y deseas cambiar a residente temporal?."
   );
   $("#archivos").html
   (
      '<h3>Favor de proporcionar la informacion siguiente</h3>' +
      '<form action="mailto:dm.danmarlo@gmail.com" method="post" id="myform">' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1">•Pasaporte vigente, original y copia. (parentesco consanguíneo) mexicano o extranjero legal en el país.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '</div>' +
      '<div class="form-group">' +
      '<div class="form-group">' +
      ' <label class="negritas" for="exampleFormControlFile1"> •Pago de derechos por Recepción y Estudio de la solicitud, y en su caso la Autorización del Cambio de Condición de Estancia a Residente Temporal por un año.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      ' </div>' +
      '<div class="form-group">' +
      ' <label class="negritas" for="exampleFormControlFile1">•Tarjeta de Residente temporal Estudiante vigente.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Oferta de empleo.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Constancia de Empleador Actualizada de la empresa ofertante.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Puesto y Sueldo.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1">•Temporalidad del empleo.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Lugar donde desempeñaría sus actividades.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •El formato básico del estudiante.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Carta de Aviso de Datos personales y Notificaciones electrónicas.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<div class="form-group">' +
      '<label class="negritas" for="exampleFormControlFile1"> •Tres fotografías tipo infantil (tamaño 2.5x3 cm.), dos de frente y una de perfil derecho de la cara, fondo blanco, con la frente y las orejas descubiertas, sin aretes y sin anteojos. No instantáneas.</label>' +
      '<input type="file" class="form-control-file" id="exampleFormControlFile1">' +
      '</div>' +
      '<input type="submit" class="btn btn-info" href="javascript: submitform();">' +
      '</form>'
   )
}