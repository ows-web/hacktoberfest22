<?php 

	$name = "Name";

	function test() {
		global $name;
		echo $name;
	}
	function test2() {
		$name = "Example";
		echo $name." t2";
	}

	test();
	test2();
 ?>