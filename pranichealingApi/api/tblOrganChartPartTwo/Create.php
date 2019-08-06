<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');

include_once '../../config/Database.php';

// Model to insert
include_once '../../Models/OrgansChartPartTwo.php';

$database=new Database();

$db=$database->connect();

$OrgransChart=new organsChartPartTwo($db);

$data = json_decode(file_get_contents("php://input"));

if(isset($data->clientId)){

    $OrgransChart->clientId=$data->clientId;
    $OrgransChart->LargeIntestine_left=$data->LargeIntestine_left;
    $OrgransChart->Large_Intestine_right=$data->Large_Intestine_right;
    $OrgransChart->Spieen_left=$data->Spieen_left;
    $OrgransChart->Kidneys_left=$data->Kidneys_left;
    $OrgransChart->Kidneys_right=$data->Kidneys_right;
    $OrgransChart->Prostate_M_Uterus_W=$data->Prostate_M_Uterus_W;
    $OrgransChart->Bladder=$data->Bladder;
    $OrgransChart->Perineummchakra=$data->Perineummchakra;
    $OrgransChart->Armpits_left=$data->Armpits_left;
    $OrgransChart->Armpits_right=$data->Armpits_right;
    $OrgransChart->Hands_left=$data->Hands_left;
    $OrgransChart->Hands_right=$data->Hands_right;
    $OrgransChart->Spine=$data->Spine;
    $OrgransChart->HipsmChakra_left=$data->HipsmChakra_left;
    $OrgransChart->HipsmChakra_right=$data->HipsmChakra_right;
    $OrgransChart->Knees_left=$data->Knees_left;
    $OrgransChart->Knees_right=$data->Knees_right;
    
    $OrgransChart->Feet_left=$data->Feet_left;
    $OrgransChart->Feet_right=$data->Feet_right;
    $OrgransChart->graphReport=$data->graphReport;

    $OrganChartPartTwoId=$OrgransChart->Create();

    if($OrganChartPartTwoId>0){
         // set response code - 201 created
    http_response_code(201);
    
    // tell the user
    echo json_encode($OrganChartPartTwoId);
    }
    else{
            // set response code - 500
    http_response_code(500);
   
    // tell the user
    echo json_encode(array("message" => "Unable to Add Graph Data."));

    }
}
?>