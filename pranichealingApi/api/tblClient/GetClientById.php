<?php


// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');


include_once '../../config/Database.php';

// Model to insert
include_once '../../Models/Client.php';

$database=new Database();

$db=$database->connect();

$client=new tblClient($db);

$client->clientId= isset($_GET['id'])? $_GET['id'] : die();

// read the client information

$client->GetClientById();

if($client->firstName!=null){

    $client_item=array(
        "id" =>$client->clientId,
        "firstName" =>$client->firstName,
        "lastName" =>$client->lastName,
        "email" =>$client->email,
        "contactNumber" => $client->contactNumber,
        "dateOfBirthInput"=>$client->dateOfBirth,
        "street" => $client->street,
        "aptno" => $client->AptNo,
        "city" => $client->city,
       
        "state" => $client->state,
        "zipcode" => $client->zipCode,
      

        // tblclienthabitsandtendencies model
        
        "purposeOfVisit" => $client->purposeOfVisit,
        "ClientCommentsAfterVisit" => $client->ClientCommentsAfterVisit,
        "isPregrent" => $client->isPregent,
        "isDrugs" => $client->isDrugs,
        "DrugsMedicationsdetails" => $client->drugsDetails,
        "Iscontagiousdisease" => $client->isContagiousDisease,
      
        // tblclienthealthinfo

        "contagiousdisease_details" => $client->contagiousDiseaseDetails,
        "IspsychologicalDisorder" => $client->ispsycho,
        "psychological_disorder_detail" => $client->psychologicalDisorderDetails,
        "isphysicalinjury" => $client->isSeriousInjury,
        "physicalinjury_details"=>$client->seriousInjuryDetails,
        "clientSignature" => $client->clientSignature,
        "formDate" => $client->formDate,
        "habitsTendenciesId"=>$client->habitsTendenciesId,
        "isSmoke"=>$client->isSmoke,
        "isAlcohol"=>$client->isAlcohol,
        "IsBloodPressure"=>$client->isBloodPressure,
    );
    // set response code - 200 OK
    http_response_code(200);
    
    // make it json format
    echo json_encode($client_item);

}
else{
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user product does not exist
    echo json_encode(array("message" => "client does not exist."));
}

?>