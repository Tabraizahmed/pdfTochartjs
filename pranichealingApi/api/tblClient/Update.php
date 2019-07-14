<?php
// required headers
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

// get posted data
$data = json_decode(file_get_contents("php://input"));

// Set values when data is not null
$client->clientId=$data->clientId;
$client->firstName=$data->firstName;
$client->lastName=$data->lastName;
$client->email=$data->email;
$client->contactNumber=$data->telephone;
$client->dateOfBirth=$data->dateOfBirth;

$client->street=$data->street;
$client->AptNo=$data->AptNo;
$client->city=$data->city;
$client->state=$data->state;
$client->zipCode=$data->zipCode;

$client->purposeOfVisit=$data->purposeOfVisit;
$client->ClientCommentsAfterVisit=$data->clientCommentsAfterExamination;



// $client->country=$data->country;
// $client->skypeId=$data->skypeId;
// $client->sex=$data->sex;
// $client->martialStaus=$data->martialStaus;
// $client->Occupation=$data->Occupation;
// $client->imageUrl=$data->imageUrl;

// tblclienthabitsandtendencies model
        $client->isSmoke=$data->isSmoke;
        $client->isAlcohol=$data->isAlcohol;
        $client->isDrugs=$data->isDrugs;
        $client->drugsDetails=$data->DrugsDetails;
        $client->isContagiousDisease=$data->isContagiousDisease;

        $client->isBloodPressure=$data->isBloodPressure;
        $client->isPregent=$data->isPregent;


        $client->contagiousDiseaseDetails=$data->contagiousDiseaseDetails;
        $client->ispsycho=$data->ispsychologicalDisorder;
        $client->psychologicalDisorderDetails=$data->psychologicalDisorderDetails;
        $client->isSeriousInjury=$data->isSeriousInjury;

        $client->seriousInjuryDetails=$data->seriousInjuryDetails;
      
        $client->clientSignature=$data->clientSignature;
        $client->formDate=$data->formDate;



// update the product



if($client->update()==101){

    // set http response
    http_response_code(201);
    // tell the user
    echo (json_encode(array("message"=>"client has been updated")));

}
else{
    http_response_code(503);

    echo (json_encode(array("message"=>"Error in application")));
}
?>