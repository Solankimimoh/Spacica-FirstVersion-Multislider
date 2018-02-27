<?php


include("includes/dbfunctions.php");
$db = new DB_FUNCTIONS();

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    $parentid  = (int)$request->recordId;


    $response = array();




        $parentdata = "SELECT * FROM `parentimginfo` WHERE `userid`='$parentid'";



    $result = mysqli_query($db->con,$parentdata);



    while($row=mysqli_fetch_row($result))
    {
        $response['pid'] = $row[0];
        $response['title'] = $row[1];
        $response['desc'] = $row[2];

    }



    $getimg = "SELECT `imgname` FROM `imageinfo` WHERE `parentimgid`='$parentid'";



    $imageresult = mysqli_query($db->con,$getimg);
    $i=1;

    while($rowimg = mysqli_fetch_row($imageresult))
    {




        $response['img']['img'.$i] = $rowimg[0];
        $i++;

    }



    echo json_encode($response);



    exit;



}
else
{
    echo "sdsad";

}


?>
