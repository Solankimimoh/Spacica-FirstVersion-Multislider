<?php
$kv = mysqli_connect("localhost", "root", "", "image_gallery");
$uploads_dir = "uploads/";

if ($kv->connect_error)
{ // Check connection
	die("Connection failed: " . $kv->connect_error);
}

if (isset($_POST['submit']) && isset($_FILES['file-fr']))
{
	if (count($_FILES['file-fr']['name']) > 0)
	{
		$i_name = $_POST['i_name'];
		$i_desc = $_POST['i_desc'];
		$sql = "INSERT INTO `parentimginfo`(`image-title`, `image-desc`) VALUES ('$i_name','$i_desc')";
		$result = mysqli_query($kv, $sql);
		$last_id = mysqli_insert_id($kv);

		// File Error Checking

		foreach($_FILES['file-fr']['error'] as $error)
		{
			if ($error)
			{ ?>

                        <script>

                        alert("</script><?php
				echo $error; ?> <script>")



                        // window.location.href="home.php";



                        </script>

                        <?php
			}
		}


		// File size Resctrictions

		$maxsize = 2 * 1024 * 1024; //5MB maximum allowed.
		foreach($_FILES['file-fr']['size'] as $size)
		{
			if ($size > $maxsize)
			{
				$FLAG = 0;
?>

            <script>

            alert("Error: File size is larger than the allowed limit.");

           window.location.href="home.php";

            </script>


            <?php
				break;
			}
			else
			{
				$FLAG = 1;
			}
		}

		// File Typ Restrictions

		$allowed = array(
			'jpg',
			'JPG',
			'jpeg',
			'gif',
			'png'
		);
		foreach($_FILES['file-fr']['name'] as $name)
		{
			$type = pathinfo($name, PATHINFO_EXTENSION);
			if (!in_array($type, $allowed))
			{ ?>


            <script>

            alert("Error: Please select a valid file format.-");



           window.location.href="home.php";
  </script>

            <?php
			}
		}

		$Kv_items = array();
		$Kv = 0;
		if ($FLAG == 1)
		{
			foreach($_FILES['file-fr']['name'] as $filename)
			{
				$fullpath = "uploads/" . $filename;
				if (file_exists($fullpath))
				{
          ?>


                <script>

                alert("Error: Already Exists-");



               window.location.href="home.php";
      </script>

                <?php

                break;
				}
				else
				{

          foreach($_FILES['file-fr']['name'] as $filename)
    			{
            if (move_uploaded_file($_FILES["file-fr"]["tmp_name"][$Kv], $uploads_dir . basename($filename)))
  					{
  						if (mysqli_query($kv, "INSERT INTO `imageinfo`(`imgname`, `imgtype`, `imgsize`, `parentimgid`) VALUES ('" . $_FILES["file-fr"]["name"][$Kv] . "','" . $_FILES["file-fr"]["type"][$Kv] . "','" . $_FILES["file-fr"]["size"][$Kv] . "','$last_id')"))
  						{
  ?>

                            <script>

                            alert("Upload Successfully");


                           window.location.href="home.php";


                            </script>

                <?php
  						}
  					}
          }

				}
			}
		}
	}
}
else
{
?>

<script>



// window.location.href="home.php";



</script>

    <?php
}

$kv->close();
?>
