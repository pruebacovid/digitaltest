


$( window ).load(function() {
  let searchParams = new URLSearchParams(window.location.search);
  let clave = searchParams.get('id1');
  let codigo = searchParams.get('id2');
  $('#id1').val(clave);
  $('#id2').val(codigo);
});




$('body').click(function() {
   $('#modalcontenedor').hide();
});

$('#buscar').click(function(event){
	
  var noclickeo = $('#yaclickeo').val();
  var id1 =  $('#id1').val();
  var id2 =  $('#id2').val();
  
  if(noclickeo == 0){
	$('#modalerror').show();

  } else {

  		if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226ca") && (id2="1633986730888") ) {

		$('#modalcontenedor').show();
             document.getElementById('modalcontenedor').style.opacity = "1"; 
             document.getElementById('modal').style.opacity = "1";
             $( "#modalcontenedor" ).addClass( "swal-overlay--show-modal" );
 			 event.stopPropagation();

  		} else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226ju") && (id2="1633986730888") ) {

    $('#modalcontenedortulio').show();
             document.getElementById('modalcontenedortulio').style.opacity = "1"; 
             document.getElementById('modaltulio').style.opacity = "1";
             $( "#modalcontenedortulio" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226ga") && (id2="1633986730888") ) {

    $('#modalcontenedorbucha').show();
             document.getElementById('modalcontenedorbucha').style.opacity = "1"; 
             document.getElementById('modalbucha').style.opacity = "1";
             $( "#modalcontenedorbucha" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226ni") && (id2="1633986730888") ) {

    $('#modalcontenedorniki').show();
             document.getElementById('modalcontenedorniki').style.opacity = "1"; 
             document.getElementById('modalniki').style.opacity = "1";
             $( "#modalcontenedorniki" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226jo") && (id2="1633986730888") ) {

    $('#modalcontenedorjosex').show();
             document.getElementById('modalcontenedorjosex').style.opacity = "1"; 
             document.getElementById('modaljosex').style.opacity = "1";
             $( "#modalcontenedorjosex" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226ro") && (id2="1633986730888") ) {

    $('#modalcontenedorrolo').show();
             document.getElementById('modalcontenedorrolo').style.opacity = "1"; 
             document.getElementById('modalrolo').style.opacity = "1";
             $( "#modalcontenedorrolo" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226mi") && (id2="1633986730888") ) {

    $('#modalcontenedormicu').show();
             document.getElementById('modalcontenedormicu').style.opacity = "1"; 
             document.getElementById('modalmicu').style.opacity = "1";
             $( "#modalcontenedormicu" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226lu") && (id2="1633986730888") ) {

    $('#modalcontenedorlucy').show();
             document.getElementById('modalcontenedorlucy').style.opacity = "1"; 
             document.getElementById('modallucy').style.opacity = "1";
             $( "#modalcontenedorlucy" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226pi") && (id2="1633986730888") ) {

    $('#modalcontenedorpiki').show();
             document.getElementById('modalcontenedorpiki').style.opacity = "1"; 
             document.getElementById('modalpiki').style.opacity = "1";
             $( "#modalcontenedorpiki" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226fel") && (id2="1633986730888") ) {

    $('#modalcontenedorfeli').show();
             document.getElementById('modalcontenedorfeli').style.opacity = "1"; 
             document.getElementById('modalfeli').style.opacity = "1";
             $( "#modalcontenedorfeli" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226mar") && (id2="1633986730888") ) {

    $('#modalcontenedormaria').show();
             document.getElementById('modalcontenedormaria').style.opacity = "1"; 
             document.getElementById('modalmaria').style.opacity = "1";
             $( "#modalcontenedormaria" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226ra") && (id2="1633986730888") ) {
   
$('#modalcontenedorrasta').show();
             document.getElementById('modalcontenedorrasta').style.opacity = "1"; 
             document.getElementById('modalrasta').style.opacity = "1";
             $( "#modalcontenedorrasta" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      } else if (  (id1=="c1badb02-21d6-451d-9a1a-234e135226luq") && (id2="1633986730888") ) {
	
$('#modalcontenedorluquita').show();
             document.getElementById('modalcontenedorluquita').style.opacity = "1"; 
             document.getElementById('modalluquita').style.opacity = "1";
             $( "#modalcontenedorluquita" ).addClass( "swal-overlay--show-modal" );
       event.stopPropagation();

      }
		   

      else { $('#modalerror').show();  }

      }

});

$("#modalcontenedor").click(function(e){
    e.stopPropagation();
});

$("#modalcontenedortulio").click(function(e){
    e.stopPropagation();
});

$("#modalcontenedorbucha").click(function(e){
    e.stopPropagation();
});
$("#modalcontenedorniki").click(function(e){
    e.stopPropagation();
});
$("#modalcontenedorjosex").click(function(e){
    e.stopPropagation();
});
$("#modalcontenedorrolo").click(function(e){
    e.stopPropagation();
});
$("#modalcontenedorlucy").click(function(e){
    e.stopPropagation();
});
$("#modalcontenedormicu").click(function(e){
    e.stopPropagation();
});
$("#modalcontenedorfeli").click(function(e){
    e.stopPropagation();
});
$("#modalcontenedorpiki").click(function(e){
    e.stopPropagation();
});
$("#modalcontenedormaria").click(function(e){
    e.stopPropagation();
});
$("#modalcontenedorluquita").click(function(e){
    e.stopPropagation();
});
$("#modalcontenedorrasta").click(function(e){
    e.stopPropagation();
});
$("#botoncerrar").click(function(e){
    $('#modalcontenedor').hide();
});
$("#botoncerrartulio").click(function(e){
    $('#modalcontenedortulio').hide();
});
$("#botoncerrarbucha").click(function(e){
   $('#modalcontenedorbucha').hide();
});
$("#botoncerrarniki").click(function(e){
    $('#modalcontenedorniki').hide();
});
$("#botoncerrarjosex").click(function(e){
    $('#modalcontenedorjosex').hide();
});
$("#botoncerrarrolo").click(function(e){
    $('#modalcontenedorrolo').hide();
});
$("#botoncerrarmicu").click(function(e){
    $('#modalcontenedormicu').hide();
});
$("#botoncerrarlucy").click(function(e){
    $('#modalcontenedorlucy').hide();
});
$("#botoncerrarpiki").click(function(e){
    $('#modalcontenedorpiki').hide();
});
$("#botoncerrarfeli").click(function(e){
    $('#modalcontenedorfeli').hide();
});
$("#botoncerrarmaria").click(function(e){
    $('#modalcontenedormaria').hide();
});
$("#botoncerrarluquita").click(function(e){
    $('#modalcontenedormaria').hide();
});
$("#botoncerrarrasta").click(function(e){
    $('#modalcontenedormaria').hide();
});
$("#okdeerror").click(function(e){
    $('#modalerror').hide();
});


$("#contendorrecaptcha").click(function(e){
	var noclickeo = $('#yaclickeo').val();

	if(noclickeo == 0 ) {
	$('#cuadraditocaptcha').hide();
	$('#spinner').show(1).delay(1100).hide(1);
	$('#checkimagen').delay(1000).show(1)
	$('#yaclickeo').val(1);
	}


});


