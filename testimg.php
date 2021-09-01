<?php
  $image = 'https://s3.ap-south-1.amazonaws.com/lystloc-img-uploads-dev/profile_update/1126_08:47:06.jpg';
  $imageData = base64_encode(file_get_contents($image));
  echo '<img style="height:40px;width:40px;border-radius:50%;" src="data:image/jpeg;base64,'.$imageData.'">';
?>