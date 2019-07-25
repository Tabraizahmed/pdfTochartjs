<?php

    // Headers
    header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');

    include_once '../../config/Database.php';

    include_once '../../Models/Client.php';
  
    
    // instanitate db & connect

    $database=new Database();

    $db=$database->connect();

    $client=new tblClient($db);

    // query client table

    $stmt= $client->readClient();

    
    // Get row count

    $num= $stmt->rowCount();

    //check if any

    if($num>0){
      // products array
    $clients_arr=array();
    $clients_arr["records"]=array();
 
   
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
      
        $client_item=array(
            "id" => $clientId,
            "firstName" => $firstName,
            "lastName" => $lastName,
            "email" => $email,
            "contactNumber" => $contactNumber,
            "dateOfBirthInput"=>$dateOfBirth,
            "street" => $street,
            "aptno" => $aptno,
            "city" => $city,
           
            "state" => $state,
            "zipcode" => $zipcode,
          

            // tblclienthabitsandtendencies model
            
            "purposeOfVisit" => $purposeOfVisit,
            "ClientCommentsAfterVisit" => $ClientCommentsAfterVisit,
            "isPregrent" => $isPregrent,
            "isDrugs" => $isDrugs,
            "DrugsMedicationsdetails" => $DrugsMedicationsdetails,
            "Iscontagiousdisease" => $Iscontagiousdisease,
          
            // tblclienthealthinfo

            "contagiousdisease_details" => $contagiousdisease_details,
            "IspsychologicalDisorder" => $IspsychologicalDisorder,
            "psychological_disorder_detail" => $psychological_disorder_detail,
            "isphysicalinjury" => $isphysicalinjury,
            "physicalinjury_details"=>$physicalinjury_details,
            "clientSignature" => $clientSignature,
            "formDate" => $formDate,
            "habitsTendenciesId"=>$habitsTendenciesId,
            "isSmoke"=>$isSmoke,
            "isAlcohol"=>$isAlcohol,
            "IsBloodPressure"=>$IsBloodPressure,
            "isPregrent"=>$isPregrent,
            "isDrugs"=>$isDrugs


        );
 
        array_push($clients_arr["records"], $client_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show products data in json format
    echo json_encode($clients_arr);
    }
    else{
        http_response_code(204);

        array_push($clients_arr["records"], null);

        echo json_encode($clients_arr);
    }