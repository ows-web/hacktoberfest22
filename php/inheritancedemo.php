<?php
	// Base Class
	class human
	{
		public $name;
		
		public function eat()
		{
			echo $this->name . " is eating";
		}
		
		public function slp()
		{
			echo "<br /><br />" . $this->name . " is sleeping";
		}
	}
	// Derived class
	class male extends human
	{
		public $age;
		public function printt()
		{
			echo "<br />" . $this->name . " age is : " . $this->age;
		}
	}
	// Derived class
	class female extends human
	{
		public $hob;
		public function put()
		{
			echo "<br />" . $this->name . " hobby is : " . $this->hob;
		}
	}
	
	$m = new male();
	$m->name = "Swapnil";
	$m->age = 22;
	
	$f = new female();
	$f->name = "Pooja";
	$f->hob = "Travelling";
	
	$m->eat();
	$m->printt();
	
	$f->slp();
	$f->put();
	
?>