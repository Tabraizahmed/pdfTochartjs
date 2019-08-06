<?php
header("Content-Type: application/json; charset=UTF-8");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');


include_once '../../config/Database.php';

// Model to insert
include_once '../../Models/OrgansChartPartTwo.php';

$database=new Database();

$db=$database->connect();

$OrganGraph=new organsChartPartTwo($db);

$data = json_decode(file_get_contents("php://input"));


if(isset($data->id)){
    
    $OrganGraph->oransChartPartTwoId=$data->id;

    $stmt=$OrganGraph->getOrgansChartPartTwoGraphById();

    $num=$stmt->rowCount();

    if($num>0){
    
        $clientGraphArray=array();
        $clientGraphArray["data"]=array();

        while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $graph_data=array(
                "oransChartPartOneId" => $oransChartPartTwoId,
                "clientId" => $clientId,
                "LargeIntestine_left" => $LargeIntestine_left,
                "Large_Intestine_right" => $Large_Intestine_right,
                "Spieen_left" => $Spieen_left,
                "Kidneys_left" => $Kidneys_left,
                "Kidneys_right" => $Kidneys_right,
                "Prostate_M_Uterus_W" => $Bladder,
                "Perineummchakra" => $Perineummchakra,
                "Armpits_left" => $Armpits_left,
                "Armpits_right" => $Armpits_right,
                "Hands_left" => $Hands_left,
                "Hands_right" => $Hands_right,
                "Spine" => $Spine,
                "HipsmChakra_left" => $HipsmChakra_left,
                "HipsmChakra_right" => $HipsmChakra_right,
                "Knees_left" => $Knees_left,
                "Knees_right"=>$Knees_right,
                "Feet_left" => $Feet_left,
                "Feet_right" => $Feet_right,
                "graphReport" => $graphReport

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

?>