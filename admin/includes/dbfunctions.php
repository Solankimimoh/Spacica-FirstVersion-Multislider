<?php

define("DBHOST","localhost");
define("DBUSER","root");
define("DBPWD","");
define("DB","image_gallery");


class DB_FUNCTIONS {

	public $con;
	public $temp;
	
	public function __construct() {
		if($conn = mysqli_connect(DBHOST,DBUSER,DBPWD,DB))
		{
		
		}
		
		$this->con=$conn;
		return $this->con;
		
	
	}
	
	public function getResults($table) 
	{
		$data = array();
		$query = mysql_query("SELECT * FROM $table") or die(mysql_error());
		$num_rows = mysqli_num_rows($query);
		if($num_rows>0) {
			while($row=mysqli_fetch_assoc($query))
				$data[]=$row;
		}
		return $data;		
	}
	
	public function allProducts()
	{
		
		$query = mysqli_query($this->con,"SELECT * FROM `parentimginfo`") or die(mysqli_error());	
		while($row=mysqli_fetch_assoc($query))
		{
			$data[]=$row;
		}
		if (empty($data)) 
		{
			?>	
<!--
			<script type="text/javascript">

				alert("No product are available insert new product");

				window.location.href="addnew.php";

			</script>
-->

			

			<?php
			$data="NO";
		}
		else
		{
			return $data;
		}

	}

	public function productofCategory($id)
	{
		$query = mysql_query("SELECT * FROM `product` WHERE `cat_id`='$id'");	
		while($row=mysql_fetch_assoc($query))
		{
			$data[]=$row;
		}
		if (empty($data)) 
		{
			?>	


			<h1 style="font-family:'Arial Black', Gadget, sans-serif;font-size:30px;color:#0099FF;text-align:center;">No Results with this filter
			<?php
		}
		else
		{
			return $data;
		}
	}
	
	public function getproductPhoto($id)
	{
		$photo = mysqli_query($this->con,"SELECT `imgname` FROM `imageinfo` WHERE `parentimgid` = '$id' LIMIT 1");
		
//		$row=mysqli_fetch_assoc($result);
		
		$row=mysqli_fetch_row($photo);
		
//			$photo=$row[0];
		
		return $row[0];

		
	}
	

	public function getProductDetails($id)
	{
		$query = mysql_query("SELECT * FROM product where p_id = $id");	
		while($row=mysqli_fetch_assoc($query))
			$data=$row;
		
		return $data;

	}
	
	public function getAvailableSize($id)
	{
		$query = mysql_query("SELECT sizeID from tbl_productsizes where ProductID = $id");
		while($row=mysql_fetch_assoc($query))
			$data[]=$row;
		
		return $data;
	}
	
}
?>