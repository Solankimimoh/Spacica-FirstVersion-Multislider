

<div class="gallery" id="links">

	<?php


$products = $db->allProducts();


?>


	<?php

	if(count($products)>0) {
		foreach($products as $pro) {
			$productPhoto = $db->getproductPhoto($pro['userid']);



			?>

		<a class="gallery-item" href="uploads/<?php echo $productPhoto;  ?>" title="Nature Image 1" data-gallery>
		<div class="image">
			<img src="uploads/<?php echo $productPhoto;  ?>" alt="Nature Image 1" />
			
		</div>
		<div class="meta">
			<strong><?php echo $pro['image-title']; ?></strong>

		</div>
	</a>


	<?php

		}
	}
	else
	{
		?>
	<h2 style="margin: 30px;">No image available!</h2>

	<?php
	}
			?>









</div>
