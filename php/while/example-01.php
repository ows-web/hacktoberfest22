<?php 

	$condition = true;

	while ($condition) {
		$number = rand(1, 10);

		if ($number === 3) {
			echo "TRÊS!!!";
			$condition = false;
		}

		echo $number." ";
	}

 ?>