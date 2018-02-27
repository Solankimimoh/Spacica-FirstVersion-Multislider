<?php
session_start();




?>


<?php

if(session_destroy())
{
    ?>

<script type="application/javascript">
window.location.href="index.php";

</script>

<?php
}

?>