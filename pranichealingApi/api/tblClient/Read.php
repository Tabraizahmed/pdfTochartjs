<?php

    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

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
            "country" => $country,
            "skypeId" => $skypeId,
            "dateOfBirth" => $dateOfBirth,
            "sex" => $sex,
            "martialStaus" => $martialStaus,
            "Occupation" => $Occupation,
            "imageUrl" => $imageUrl,

            // tblclienthabitsandtendencies model
            
            "habitsTendenciesId" => $habitsTendenciesId,
            "isSmoke" => $isSmoke,
            "isAlcohol" => $isAlcohol,
            "isDrugs" => $isDrugs,
            "meditationOrSpiritualPractice" => $meditationOrSpiritualPractice,
            "tendenciesToRemove" => $tendenciesToRemove,
          
            // tblclienthealthinfo

            "healthInfoId" => $healthInfoId,
            "typeOfAilment" => $typeOfAilment,
            "symptomsAndSeverity" => $symptomsAndSeverity,
            "since" => $since,
            "medicalReport" => $medicalReport,
            "medicineUse" => $medicineUse,


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