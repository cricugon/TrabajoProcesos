
var url="http://127.0.0.1:1338/";
//Funciones que modifican el index

function inicio(){

	mostrarCabecera();
}

function borrarControl(){

	$('#control').remove();
}

function mostrarCabecera(){
	$('#cabecera').remove();
	$('#control').append('<div id="cabecera"> <h2> Panel de control </h2><input type="text" id="nombre" placeholder="introduce tu nombre">');
	botonNombre();
}
function botonNombre(){
	$('#cabecera').append('<button type="button" id="nombreBtn" class="btn btn-primary">Primary</button>');
	$('#nombreBtn').on('click', function(){
		$('nombreBtn').remove();
		crearUsuario($('#nombre').val());
		//control de excepciones
	});
}

//Funciones de comunicacion
function crearUsuario(nombre){
	if (nombre==""){
		nombre="jugador";
	}
	$.getJSON(url+'crearUsuario/'+nombre,function(datos){
		//tiene la respuesta del servidor
		//mostrar los datos del usuario
	});
	//mostrar datos
}