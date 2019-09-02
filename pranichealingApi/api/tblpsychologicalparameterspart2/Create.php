<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');

include_once '../../config/Database.php';

// Model to insert
include_once '../../Models/PsychologicalParametersPartTwo.php';


$database=new Database();

$db=$database->connect();

$PsychologicalGraph=new tblpsychologicalparameterspart2($db);

$data = json_decode(file_get_contents("php://input"));

if(isset($data->clientId)){

$PsychologicalGraph->clientId=$data->clientId;
$PsychologicalGraph->ChakraStress=$data->ChakraStress;
$PsychologicalGraph->ChakraAnger=$data->ChakraAnger;
$PsychologicalGraph->ChakraFear_phobia=$data->ChakraFear_phobia;
$PsychologicalGraph->ChakraCourage=$data->ChakraCourage;
$PsychologicalGraph->ChakraPerseverance=$data->ChakraPerseverance;
$PsychologicalGraph->ChakraObession=$data->ChakraObession;
$PsychologicalGraph->ChakraSelf_Confidence=$data->ChakraSelf_Confidence;
$PsychologicalGraph->graphReport=$data->graphReport;

$Ident=$PsychologicalGraph->Create();

if($Ident>0){
    // set response code - 201 created
    http_response_code(201);
    
    // tell the user
    echo json_encode($Ident);
}
else{
    // set response code - 500
    http_response_code(500);
   
    // tell the user
    echo json_encode(array("message" => "Unable to Add Graph Data."));
}


}

?>