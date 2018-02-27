<?php
session_start();

?>

<?php
include("includes/dbfunctions.php");
$db = new DB_FUNCTIONS();

 // $con=mysqli_connect("localhost","root","","image_gallery");
  
  if($_POST['submitlogin'])
  { 
	$username=$_POST['username'];
	$password=$_POST['password'];
	  	
	
	$sql="select * from admin_login where username='$username' AND  password='$password'";
	
	$result=mysqli_query($db->con,$sql);
	
	
		 $rows = mysqli_num_rows($result);

		     if ($rows==0) {
    ?>
    <script type="text/javascript">
        alert("Username or Password not matched try again");

        window.location.href = "index.php";

    </script>

    <?php
	 }
	
 else 
 {
		$_SESSION['login_user']=$username; 
	 
		
		// Initializing Session
	?>

        <script type="text/javascript">
            alert("login success");
            window.location.href = "home.php";

        </script>

        <?php
	 }
	  
  }


 
else
{
	?>

            <script type="application/javascript">
                window.location.href = "index.php"

            </script>

            <?php
}

?>
