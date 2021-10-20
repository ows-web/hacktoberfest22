<?php 

	/*BASIC VARIABLES*/
	//String
	$name = "Name";
	$site = 'www.web-site.com';
	//int
	$year = 1998;
	//float
	$income = 1250.90;
	//boolean
	$blocked = false;

	/*COMPOUND TYPE*/
	//array
	$fruits = array("pineapple", "orange", "apple");
	echo $fruits[2];

	//object
	$birthDay = new DateTime();
	var_dump($birthDay);

	/*SPECIAL TYPE*/
	//file
	$file = fopen("example-03.php", "r");
	var_dump($file);

	//nullable
	$nullable = null;

 ?>