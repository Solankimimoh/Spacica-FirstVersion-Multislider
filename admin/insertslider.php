<?php
session_start();
?>
<?php
include("includes/dbfunctions.php");
$db = new DB_FUNCTIONS();



//$con = mysqli_connect("localhost", "root", "", "image_gallery");
    
    if(isset($_SESSION['login_user']))
    {
      
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



        <?php


if(isset($_POST['submit']))
{
    
    if($_FILES["photo"]["error"] > 0)
    {
        echo "Error: " . $_FILES["photo"]["error"] . "<br>";
    } 
    else
    {
        
        $path = "uploads/slider/";
        $allowed = array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png");
        $filename = $_FILES["photo"]["name"];
        $filetype = $_FILES["photo"]["type"];
        $filesize = $_FILES["photo"]["size"];
        $filedesc = $_POST['slider_desc'];
    
        // Verify file extension
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        if(!array_key_exists($ext, $allowed)) die("Error: Please select a valid file format.");
    
        // Verify file size - 2MB maximum
        $maxsize = 2 * 1024 * 1024;
        if($filesize > $maxsize) 
        {
            ?>

            <script type="application/javascript">
                alert("Error: File size is larger than the allowed limit.");
                window.location.href="home.php";

            </script>

            <?php
        }
    
        // Verify MYME type of the file
        if(in_array($filetype, $allowed))
        {
            // Check whether file exists before uploading it
            if(file_exists("upload/" . $_FILES["photo"]["name"])){
                echo $_FILES["photo"]["name"] . " is already exists.";
            }
            else
            {
                
                $insert_slider = "INSERT INTO `slider`(`s_id`, `s_desc`, `s_img`, `s_img_type`, `s_img_size`) VALUES ('','$filedesc','$filename','$filetype','$filesize')";
                
                if(mysqli_query($db->con,$insert_slider))
                {
                    
                    $last_id = mysqli_insert_id($db->con);
                    
                     if(move_uploaded_file($_FILES["photo"]["tmp_name"], $path. $_FILES["photo"]["name"]))
                     {
                         
                         ?>
<script type="application/javascript">
    alert("Your file was uploaded successfully.");
    window.location.href = "home.php";
                    </script>

                <?php
                         
                     }
                    else
                    {
                        $delete = "DELETE FROM `slider` WHERE `s_id`='$last_id'";
                        if(mysqli_query($db->con,$delete))
                            {
                                
                                ?>


                    <script type="application/javascript">
                       window.location.href="home.php";

                    </script>

                    <?php
                            }
                        
                    }
                }
                
               
                
            } 
        } 
        else
        {
            ?>

                        <script type="application/javascript">
                            alert("Error: There was a problem uploading your file - please try again.");
                            window.location.href="home.php";

                        </script>

                        <?php
        }
        
        
    }
} 
else
{
    ?>


                            <script type="application/javascript">
                                alert("Error: Invalid parameters - please contact your server administrator.");
                                window.location.href="home.php";

                            </script>

                            <?php
}
?>
