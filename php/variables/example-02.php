<?php 

	$firstName = "Name";
	$lastName = "Last Name";

	//concatenando variaveis
	$fullName = $firstName." ".$lastName;

	echo $fullName;

	echo $firstName;

	echo "<br/>";

	//apaga a variavel
	unset($firstName);

	//isset verifica se a variavel existe
	if (isset($firstName)) {
		echo $firstName;
	}
 ?>