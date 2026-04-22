<?php
   $file = $_GET['file'];
   if(isset($file))
   {
       // snyk-ignore-line  
       include("pages/$file"); 
   }
   else
   {
       include("index.php");
   }
?>
