<?php 
header("Content-Type: application/json; charset=UTF-8");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials:true");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');


include_once '../../config/Database.php';

// Model to insert
include_once '../../Models/OrgansChartPartOne.php';

$database=new Database();

$db=$database->connect();

$OrganGraph=new tblOrgansChartPartOne($db);

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id)){

    $OrganGraph->oransChartPartOneId=$data->id;

    $stmt=$OrganGraph->getOrgansChartPartOneGraphById();

    $num=$stmt->rowCount();

    if($num>0){

        $clientGraphArray=array();
        $clientGraphArray["data"]=array();

        while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $graph_data=array(
                "oransChartPartOneId" => $oransChartPartOneId,
                "clientId" => $clientId,
                "Brain_left" => $Brain_left,
                "Brain_right" => $Brain_right,
                "BackHeadmChakra" => $BackHeadmChakra,
                "Eyes_left" => $Eyes_left,
                "Eyes_right" => $Eyes_right,
                "Ears_left" => $Ears_left,
                "Ears_right" => $Ears_right,
                "Jawmchakra_left" => $Jawmchakra_left,
                "Jawmchakra_right" => $Jawmchakra_right,
                "ThroatmChakra" => $ThroatmChakra,
                "Heart" => $Heart,
                "Breast_left" => $Breast_left,
                "Breast_right" => $Breast_right,
                "Lungs_left" => $Lungs_left,
                "Lungs_right"=>$Lungs_right,
                "Liver"=>$Liver,
                "Stomach"=>$Stomach,
                "Pancreas"=>$Pancreas,
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

?>