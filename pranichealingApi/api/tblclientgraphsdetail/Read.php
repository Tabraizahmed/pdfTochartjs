<?php 

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');


include_once '../../config/Database.php';

include_once '../../Models/ClientGraphsdetail.php';

$database=new Database();

$db=$database->connect();

$clientGraphDetails=new tblClientGraphDetails($db);

$stmt= $clientGraphDetails->getClientGraphsDetails();

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id)){

    $clientGraphDetails->clientId=$data->id;

    $stmt= $clientGraphDetails->getClientGraphsDetails();

    $num=$stmt->rowCount();
    
    if($num>0){
             // products array
             $clientDetails=array();
             $clientDetails["records"]=array();
    
             while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                
                extract($row);

                $client_item=array(
                    "ChakraGraphId" => $ChakraGraphId,
                    "ChakraActivationGraphId" => $ChakraActivationGraphId,
                    "organsChartPartOneId" => $organsChartPartOneId,
                    "organsChartPartTwoId" => $organsChartPartTwoId,
                    "PsychologicalParametersId" => $PsychologicalParametersId,
                    "PsychologicalParametersPart2Id" => $PsychologicalParametersPart2Id,
                    "clientId" => $clientId

                );

                array_push($clientDetails["records"], $client_item);
             }

             http_response_code(200);
     
             // show products data in json format
             echo json_encode($clientDetails);
        
            }else{
                http_response_code(204);
        
                array_push($clientDetails["records"], null);
        
                echo json_encode($clientDetails);
            }
    }


?>