<?php

//-- Cambiar estas l�neas si hace falta
$dirPara     = "info@sediex.com.ar";
$asunto      = "Sediex - Contacto v�a website";
$paginaOk    = "enviado.html";
$paginaMal   = "contacto.html";

// -- NO CAMBIAR NADA DESDE AC� --

$nombre = getRequest('nombre');
$email  = getRequest('email');

$consulta = getRequest('consulta');

if (!empty($nombre) or 
	!empty($consulta)){

	$cuerpo = "Fecha y hora: " . date("d-m-Y H:i:s") . "\r\n\r\n";
	$cuerpo.= "Nombre: {$nombre}\r\n\r\n";
	$cuerpo.= "Correo Electr�nico: {$email}\r\n\r\n";
	$cuerpo.= "Comentarios: {$consulta}\r\n";
	$header = empty($email) ? "" : "From: {$email}\r\n";
	mail($dirPara,$asunto,$cuerpo,$header);
	header("Location: {$paginaOk}");
} else {
	header("Location: {$paginaMal}" );
}

function getRequest($variable){
	return empty($_REQUEST[$variable]) ? "" : $_REQUEST[$variable];
}

?>