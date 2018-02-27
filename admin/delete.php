<?php
session_start();
?>
    <?php
include("includes/dbfunctions.php");
$db = new DB_FUNCTIONS();
//$con = mysqli_connect("localhost", "root", "", "image_gallery");
    
    if(isset($_SESSION['login_user'])  && !empty($_GET['id']) )
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

 $img_parent_id = $_GET['id'];
 $path = "uploads/";




                            $delete_imge = "SELECT * FROM `imageinfo` WHERE `parentimgid` = '$img_parent_id' ";
                            
                            $result = mysqli_query( $db->con , $delete_imge );
                            

                                $rowcount=mysqli_num_rows($result);


if($rowcount>0)
{
     while( $row = mysqli_fetch_row( $result ) )
                                {
                                   
                                    if( unlink($path.$row[1]) )
                                    {
                                        
                                        $image_name_delete = $row[1];

                                        $delete_imge_DB = "DELETE FROM `imageinfo` WHERE `imgname` = '$image_name_delete' ";
                            
                                        mysqli_query( $db->con , $delete_imge_DB );
                                        
                                    
                                    }
                                    
                                }
    
    
                          
        $deletedata = "DELETE FROM `parentimginfo` WHERE `userid`='$img_parent_id'";

        if(mysqli_query($db->con, $deletedata))
        {
            ?>
                <script type="application/javascript">
                    alert("Selected Image and subimage deleted");
                    window.location.href = "home.php";
                </script>
                <?php
            
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