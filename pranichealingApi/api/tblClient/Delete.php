<?php
// headers

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/Database.php';

// Model to insert
include_once '../../Models/Client.php';

$database=new Database();

$db=$database->connect();

$client=new tblClient($db);

// get product id
$data = json_decode(file_get_contents("php://input"));

// set product id to be deleted
$client->clientId = $data->id;

if($client->Delete()){

  // set response code - 200 ok
  http_response_code(200);
 
  // tell the user
  echo json_encode(array("message" => "Product was deleted."));


}else{
      // set response code - 503 service unavailable
      http_response_code(503);
 
      // tell the user
      echo json_encode(array("message" => "Unable to delete product."));
}

?>