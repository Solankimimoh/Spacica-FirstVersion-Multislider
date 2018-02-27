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




if (isset($_POST['submit']))
	{
    
    
    $img_name = $_POST['i_name'];
    $img_desc = str_replace(array(':', '-', '/', '*',"'"), '', $_POST['i_desc']);
        
    $maxsize = 2 * 1024 * 1024; // 2MB
    
    $img_size_status =array();
    $img_already_status =array();
    $path = "uploads/";
        
    
    $valid_image_size = array("NO");
    $valid_image_check = array("image/gif", "image/jpeg", "image/jpg", "image/png", "image/bmp");    
    $valid_image_already = array("YES"); 

        
        
       
        
        
        $update = "INSERT INTO `parentimginfo`(`image-title`, `image-desc`) VALUES ('$img_name','$img_desc')";
        
        mysqli_query($db->con,$update);
        
        $last_id = mysqli_insert_id($db->con);
        
        
        $updaterow = mysqli_affected_rows($db->con);
        
        

        if($updaterow)
        {
        
                // loop through the file fields
                for ($i = 0; $i < count($_FILES["file-fr"]["name"]); $i++) 
                {
                        // get the image mime type
                    $image_mime = strtolower(image_type_to_mime_type(exif_imagetype($_FILES["file-fr"]["tmp_name"][$i])));
                    
                }
            
            
            
                // loop through the file fields
                for ($i = 0; $i < count($_FILES["file-fr"]["name"]); $i++) 
                {
                        // get the image mime type
                    if($_FILES['file-fr']['size'][$i] > $maxsize)
                    {
                            $img_size_status = "NO";
                    }

                  //  echo  $img_size_status." ".$_FILES["file-fr"]["name"][$i]."<br>";
                }
            
            
            
             // loop through the file fields
                for ($i = 0; $i < count($_FILES["file-fr"]["name"]); $i++) 
                {
            
                    if(file_exists('uploads/' . $_FILES['file-fr']['name'][$i]))
                    {
                            $img_already_status = "YES";
                           
                  
                    }
                    

                 
                }
            
            
            
            
                // TYPE
            if (in_array($image_mime, $valid_image_check))
            {
                
                    // SIZE
                    if(!in_array($img_size_status , $valid_image_size))
                    {
                      
                        // FILE_EXCIST
                        
                        if(!in_array($img_already_status , $valid_image_already))
                        {
                            
                            
                             for ( $i = 0 ; $i < count($_FILES["file-fr"]["name"]) ; $i++ ) 
                             {
                                 
                                 $new_imag_name = strtolower($_FILES["file-fr"]["name"][$i]);
                                 $new_imag_type = $_FILES["file-fr"]["type"][$i];
                                 $new_imag_size = $_FILES["file-fr"]["size"][$i];
                                 
                                 if(move_uploaded_file($_FILES['file-fr']['tmp_name'][$i],
											   $path.$new_imag_name))
                                 {
                                     
                                     $insert_img_data = "INSERT INTO `imageinfo`(`imgname`, `imgtype`, `imgsize`, `parentimgid`) VALUES ('$new_imag_name','$new_imag_type','$new_imag_size','$last_id')";
                                     
                                     if(mysqli_query($db->con, $insert_img_data))
                                     {
                                         ?>
                <script type="application/javascript">
                    alert("Images and Data Inserted");
                    window.location.href = "home.php";
                </script>
                <?php
                                     }
                                     else
                                     {
                                           $delete = "DELETE FROM `imageinfo` WHERE `parentimgid`='$last_id'";

                                            mysqli_query($db->con, $delete);

                                            $deletedata = "DELETE FROM `parentimginfo` WHERE `userid`='$last_id'";

                                            mysqli_query($db->con, $deletedata);
                                     }
                                     
                                 }
                                
                             }
                            
                        
                        }
                        else
                        {
                            
                        $delete = "DELETE FROM `imageinfo` WHERE `parentimgid`='$last_id'";

                        mysqli_query($db->con, $delete);

                        $deletedata = "DELETE FROM `parentimginfo` WHERE `userid`='$last_id'";

                        mysqli_query($db->con, $deletedata);
                            
                            
                           ?>
                    <script type="application/javascript">
                        alert("Some Images Are already uploaded with same Name ! try Again");
                        window.location.href = "home.php";
                    </script>
                    <?php
                        }
                    }
                    else
                    {   
                        
                $delete = "DELETE FROM `imageinfo` WHERE `parentimgid`='$last_id'";

                mysqli_query($db->con, $delete);

				$deletedata = "DELETE FROM `parentimginfo` WHERE `userid`='$last_id'";

				mysqli_query($db->con, $deletedata);

                        
                        
                        ?>
                        <script type="application/javascript">
                            alert("File Size more than 2 MB select less than 2 MB");
                            window.location.href = "home.php";
                        </script>
                        <?php
                    }
            } 
            else 
            {
                
                $delete = "DELETE FROM `imageinfo` WHERE `parentimgid`='$last_id'";

                mysqli_query($db->con, $delete);

				$deletedata = "DELETE FROM `parentimginfo` WHERE `userid`='$last_id'";

				mysqli_query($db->con, $deletedata);

                
                ?>
                            <script type="application/javascript">
                                alert("Image must be in JPG , GIF , PNG ! Try Again");
                                window.location.href = "home.php";
                            </script>
                            <?php
                
            }
        
        

        
        
        
        
    }
}
else
{
    
    
    ?>
                                <script type="application/javascript">
                                    window.location.href = "home.php";
                                </script>
                                <?php
}


?>