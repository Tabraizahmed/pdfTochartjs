<?php 
header("Content-Type: application/json; charset=UTF-8");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');

include_once '../../config/Database.php';

// Model to insert
include_once '../../Models/PsychologicalParametersPartTwo.php';

$database=new Database();

$db=$database->connect();

$PsychologicalGraph=new tblpsychologicalparameterspart2($db);

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id)){

    $PsychologicalGraph->PsychologicalParametersPart2Id=$data->id;

    $stmt=$PsychologicalGraph->Read();

    $num=$stmt->rowCount();

    if($num>0){
        $clientGraphArray=array();
        $clientGraphArray["data"]=array();

        while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $graph_data=array(
                    "PsychologicalParametersPart2Id"=>$PsychologicalParametersPart2Id,
                    "clientId"=>$clientId,
                    "ChakraStress"=>$ChakraStress,
                    "ChakraAnger"=>$ChakraAnger,
                    "ChakraFear_phobia"=>$ChakraFear_phobia,
                    "ChakraCourage"=>$ChakraCourage,
                    "ChakraPerseverance"=>$ChakraPerseverance,
                    "ChakraObession"=>$ChakraObession,
                    "ChakraSelf_Confidence"=>$ChakraSelf_Confidence,
                    "graphReport"=>$graphReport
            );

            array_push($clientGraphArray["data"], $graph_data);

        }

        
        http_response_code(200);
     
        // show products data in json format
        echo json_encode($clientGraphArray);
    }else{
        http_response_code(204);

        array_push($clientGraphArray["data"], null);

        echo json_encode($clientGraphArray);
    }


}