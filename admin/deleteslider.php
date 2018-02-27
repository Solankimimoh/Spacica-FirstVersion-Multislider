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
 $path = "uploads/slider/";




                            $delete_imge = "SELECT * FROM `slider` WHERE `s_id` = '$img_parent_id' ";
                            
                            $result = mysqli_query( $db->con , $delete_imge );
                            

                                $rowcount=mysqli_num_rows($result);


if($rowcount>0)
{
     while( $row = mysqli_fetch_row( $result ) )
                                {
                                   
                                    if( unlink($path.$row[2]) )
                                    {
                                        
                                        $image_name_delete = $row[0];

                                        $delete_imge_DB = "DELETE FROM `slider` WHERE `s_id` = '$image_name_delete' ";
                            
                                       if(mysqli_query( $db->con , $delete_imge_DB )) 
                                       {
                                           ?>

            <script type="application/javascript">
                alert("Delete image slider");
                window.location.href = "home.php";

            </script>
            <?php
                                       }
                                        
                                    
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
