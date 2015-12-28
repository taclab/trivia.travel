<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Origin: http://localhost:9000');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $json = file_get_contents("php://input");
  $file = fopen('cities.json','w+');
  fwrite($file, $json);
  fclose($file);
?>