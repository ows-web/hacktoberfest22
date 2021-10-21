<?php 
	//automatic type
	$nome = $_GET["a"];
	var_dump($nome);

	//strong type
	$nome = (int)$_GET["b"];
	var_dump($nome);

	//get environment address
	$ip = $_SERVER["REMOTE_ADDR"];
	echo $ip;

	//get executing script
	$ip = $_SERVER["SCRIPT_NAME"];
	echo $ip;

	
 ?>