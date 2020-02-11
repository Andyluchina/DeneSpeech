<?php
require("./config.php");

$conn = new mysqli($servername, $username, $password, $dbname);
//echo 'right';
if ($conn->connect_error) {
    $res=array(
            'status' => 0
      );
    echo json_encode($res);
}else{
  $input = $_GET["path"];
  // query database here
   // 0: database connection connect_error
   //    1: success with data
   //    2: page not found
   //    3: wrong entry in the database
   $sql = "SELECT configuration FROM data where path=" .$input;
   $result = $conn->query($sql);

   echo $result;
  // if ($result->num_rows == 0) {
  //   $res=array(
  //           'status' => 2
  //     );
  //   echo json_encode($res);
  // } else if($result->num_rows == 1){
  //   $res=array(
  //           'status' => 1,
  //           'payload' => $result
  //     );
  //   echo json_encode($res);
  // }else{
  //   $res=array(
  //           'status' => 3
  //     );
  //   echo json_encode($res);
  // }

$conn->close();

}



?>
