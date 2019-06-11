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

if(!empty($data->firstName) && !empty($data->lastName) && !empty($data->email) && !empty($data->contactNumber) && !empty($data->dateOfBirth) &&
    !empty($data->sex) && !empty($data->martialStaus) && !empty($data->Occupation) && !empty($data->imageUrl) && !empty($data->country) && !empty($data->skypeId))  
    {
        // Set values when data is not null
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

        if($client->create()){
 
            // set response code - 201 created
            http_response_code(201);
     
            // tell the user
            echo json_encode(array("message" => "Product was created."));
        }
     
        // if unable to create the product, tell the user
        else{
     
            // set response code - 503 service unavailable
            http_response_code(503);
     
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
    echo json_encode(array("message" => "Unable to create product. Data is incomplete."));
    }

?>