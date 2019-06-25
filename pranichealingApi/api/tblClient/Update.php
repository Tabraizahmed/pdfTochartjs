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



// Set data values 

// Set values when data is not null
$client->clientId=$data->clientId;
$client->firstName=$data->firstName;
$client->lastName=$data->lastName;
$client->email=$data->email;
$client->contactNumber=$data->contactNumber;
$client->country=$data->country;
$client->skypeId=$data->skypeId;
$client->dateOfBirth=$data->dateOfBirth;
$client->sex=$data->sex;
$client->martialStaus=$data->martialStaus;
$client->Occupation=$data->Occupation;
$client->imageUrl=$data->imageUrl;

// tblclienthabitsandtendencies model
$client->isSmoke=$data->isSmoke;
$client->isAlcohol=$data->isAlcohol;
$client->isDrugs=$data->isDrugs;
$client->meditationOrSpiritualPractice=$data->meditationOrSpiritualPractice;
$client->tendenciesToRemove=$data->tendenciesToRemove;

// tblclienthealthinfo

$client->typeOfAilment=$data->typeOfAilment;
$client->symptomsAndSeverity=$data->symptomsAndSeverity;
$client->since=$data->since;
$client->isAilmentInherited=$data->isAilmentInherited;
$client->medicalReport=$data->medicalReport;
$client->medicineUse=$data->medicineUse;

// update the product

if($client->update()){

    // set http response
    http_response_code(200);
    // tell the user
    echo (json_encode(array("message"=>"client has been updated")));

}
else{
    http_response_code(503);

    echo (json_encode(array("message"=>"Error in application")));
}
?>