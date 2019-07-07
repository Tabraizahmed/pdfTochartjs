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
include_once '../../Models/Client.php';

$database=new Database();

$db=$database->connect();

$client=new tblClient($db);



// get posted data
$data = json_decode(file_get_contents("php://input"));


if(!empty($data->firstName) && !empty($data->lastName) && !empty($data->email) && !empty($data->contactNumber) 
    && !empty($data->dateOfBirth)  && !empty($data->state))  
    {
        // Set values when data is not null
        $client->firstName=$data->firstName;
        $client->lastName=$data->lastName;
        $client->email=$data->email;
        $client->contactNumber=$data->contactNumber;
        $client->dateOfBirth=$data->dateOfBirth;
        $client->street=$data->street;
        $client->AptNo=$data->AptNo;
        $client->state=$data->state;
        $client->city=$data->city;
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
        $client->drugsDetails=$data->drugsDetails;
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


       
        // tblclienthealthinfo

        // $client->typeOfAilment=$data->typeOfAilment;
        // $client->symptomsAndSeverity=$data->symptomsAndSeverity;
        // $client->since=$data->since;
        // $client->isAilmentInherited=$data->isAilmentInherited;
        // $client->medicalReport=$data->medicalReport;
        // $client->medicineUse=$data->medicineUse;


        $clientId=$client->create();
        if($clientId>0){
 
            
            // set response code - 201 created
            http_response_code(201);
     
            // tell the user
            echo json_encode(array("clientId" => $clientId));
        }
     
        // if unable to create the product, tell the user
        else{
     
            // set response code - 500
            http_response_code(500);
     
            // tell the user
            echo json_encode(array("message" => "Unable to create product."));
        }
    }

    // tell the user data is incomplete
    else
    {
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(array("message" => "Unable to create client. Data is incomplete."));
    }

?>