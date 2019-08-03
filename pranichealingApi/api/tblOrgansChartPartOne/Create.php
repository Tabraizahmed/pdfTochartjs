<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');


include_once '../../config/Database.php';

// Model to insert
include_once '../../Models/OrgansChartPartOne.php';

$database=new Database();

$db=$database->connect();

$OrgransChart=new tblOrgansChartPartOne($db);

$data = json_decode(file_get_contents("php://input"));

if(isset($data->clientId)){

    // Data mapping

$OrgransChart->clientId=$data->clientId;
$OrgransChart->Brain_left=$data->Brain_left;
$OrgransChart->Brain_right=$data->Brain_right;
$OrgransChart->BackHeadmChakra=$data->BackHeadmChakra;
$OrgransChart->Eyes_left=$data->Eyes_left;
$OrgransChart->Eyes_right=$data->Eyes_right;
$OrgransChart->Ears_left=$data->Ears_left;

$OrgransChart->Ears_right=$data->Ears_right;
$OrgransChart->Jawmchakra_left=$data->Jawmchakra_left;
$OrgransChart->Jawmchakra_right=$data->Jawmchakra_right;

$OrgransChart->ThroatmChakra=$data->ThroatmChakra;
$OrgransChart->Heart=$data->Heart;
$OrgransChart->Breast_left=$data->Breast_left;
$OrgransChart->Breast_right=$data->Breast_right;

$OrgransChart->Lungs_left=$data->Lungs_left;
$OrgransChart->Lungs_right=$data->Lungs_right;
$OrgransChart->Liver=$data->Liver;

$OrgransChart->Stomach=$data->Stomach;
$OrgransChart->Stomach=$data->Stomach;
$OrgransChart->Pancreas=$data->Pancreas;
$OrgransChart->graphReport=$data->graphReport;

$OrganChartPartOneId=$OrgransChart->Create();

if($OrganChartPartOneId>0){
    // set response code - 201 created
    http_response_code(201);
    
    // tell the user
    echo json_encode($OrganChartPartOneId);
}
else{
    // set response code - 500
    http_response_code(500);
   
    // tell the user
    echo json_encode(array("message" => "Unable to Add Graph Data."));
}

}

?>