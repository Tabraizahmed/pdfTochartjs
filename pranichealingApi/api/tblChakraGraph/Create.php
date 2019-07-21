<?php

// required headers
header("Content-Type: application/json; charset=UTF-8");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

include_once '../../config/Database.php';

// Model to insert
include_once '../../Models/ChakraGraph.php';


$database=new Database();

$db=$database->connect();

$ChakraGraph=new tblChakra($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));


// Data mapping 
$ChakraGraph->clientId=$data->clientId;
$ChakraGraph->CrownChakra=$data->CrownChakra;

$ChakraGraph->ForeheadChakra=$data->ForeheadChakra;
$ChakraGraph->AjnaChakra=$data->AjnaChakra;
$ChakraGraph->ThroatChakra=$data->ThroatChakra;
$ChakraGraph->HeartChakra_front=$data->HeartChakra_front;
$ChakraGraph->HeartChakra_back=$data->HeartChakra_back;
$ChakraGraph->SolarPlexCharka_front=$data->SolarPlexCharka_front;
$ChakraGraph->SolarPlexCharka_back=$data->SolarPlexCharka_back;
$ChakraGraph->SpleenChakra_front=$data->SpleenChakra_front;

$ChakraGraph->SpleenChakra_back=$data->SpleenChakra_back;
$ChakraGraph->MengMeinChakra=$data->MengMeinChakra;
$ChakraGraph->SexChakra=$data->SexChakra;
$ChakraGraph->BasicChakra=$data->BasicChakra;
$ChakraGraph->BasicChakra=$data->graphReport;

$chakraGraphId=$ChakraGraph->Create();

if($chakraGraphId>0){
     // set response code - 201 created
     http_response_code(201);
     
     // tell the user
     echo json_encode(array("Chakra Graph id" => $chakraGraphId));
}
else{
      // set response code - 500
      http_response_code(500);
     
      // tell the user
      echo json_encode(array("message" => "Unable to Add Graph Data."));
}



?>