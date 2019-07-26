<?php
header("Content-Type: application/json; charset=UTF-8");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');


include_once '../../config/Database.php';

// Model to insert
include_once '../../Models/ChakraGraph.php';

$database=new Database();

$db=$database->connect();

$ChakraGraph=new tblChakra($db);

// get product id
$data = json_decode(file_get_contents("php://input"));

$ChakraGraph->clientId=$data->id;

$stmt=$ChakraGraph->getClientGraph();

$num=$stmt->rowCount();

if($num>0){
    // Create array
    $clientGraphArray=array();
    $clientGraphArray["data"]=array();

    while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $graph_data=array(
            "ChakraGraphId" => $ChakraGraphId,
            "clientId" => $clientId,
            "CrownChakra" => $CrownChakra,
            "ForeheadChakra" => $ForeheadChakra,
            "AjnaChakra" => $AjnaChakra,
            "ThroatChakra" => $ThroatChakra,
            "HeartChakra_front" => $HeartChakra_front,
            "HeartChakra_back" => $HeartChakra_back,
            "SolarPlexCharka_front" => $SolarPlexCharka_front,
            "SolarPlexCharka_back" => $SolarPlexCharka_back,
            "SpleenChakra_front" => $SpleenChakra_front,
            "SpleenChakra_back" => $SpleenChakra_back,
            "MengMeinChakra" => $MengMeinChakra,
            "SexChakra" => $SexChakra,
            "BasicChakra" => $BasicChakra,
            "graphReport" => $graphReport
        );

        array_push($clientGraphArray["data"], $graph_data);
    }
        // set response code - 200 OK
        http_response_code(200);
 
     // show products data in json format
     echo json_encode($clientGraphArray);

    }else{
        http_response_code(204);

        array_push($clientGraphArray["data"], null);

        echo json_encode($clientGraphArray);
    }
?>