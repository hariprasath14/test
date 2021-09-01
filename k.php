<?php

// Created by NerdsOfTech



// Step 1 - Start with image as layer 1 (canvas).

$img1 = ImageCreateFromjpeg("https://s3.ap-south-1.amazonaws.com/lystloc-img-uploads-dev/profile_update/1126_08:47:06.jpg");

$x=imagesx($img1)-$width ;

$y=imagesy($img1)-$height;





 // Step 2 - Create a blank image.

 $img2 = imagecreatetruecolor($x, $y);

$bg = imagecolorallocate($img2, 255, 255, 255); // white background

 imagefill($img2, 0, 0, $bg);





 // Step 3 - Create the ellipse OR circle mask.

 $e = imagecolorallocate($img2, 0, 0, 0); // black mask color



 // Draw a ellipse mask

 // imagefilledellipse ($img2, ($x/2), ($y/2), $x, $y, $e);



 // OR 

 // Draw a circle mask

$r = $x <= $y ? $x : $y; // use smallest side as radius & center shape

imagefilledellipse ($img2, ($x/2), ($y/2), $r, $r, $e); 





 // Step 4 - Make shape color transparent

 imagecolortransparent($img2, $e);





 // Step 5 - Merge the mask into canvas with 100 percent opacity

 imagecopymerge($img1, $img2, 0, 0, 0, 0, $x, $y, 100);




 // Step 6 - Make outside border color around circle transparent

imagecolortransparent($img1, $bg);



 // Step 7 - Output merged image

 header("Content-type: image/png"); // output header

 $input = imagepng($img1); // output merged image

 $output = 'vola.png';

 file_put_contents($output, file_get_contents($input));

// Step 8 - Cleanup memory

 imagedestroy($img2); // kill mask first

 imagedestroy($img1); // kill canvas last

 ?>