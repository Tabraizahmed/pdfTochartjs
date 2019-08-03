<?php

class tblOrgansChartPartOne{

    private $conn;
    private $tblName ="tblorgansminchartpart1";


    public $oransChartPartOneId;
    public $clientId;
    public $Brain_left;
    public $Brain_right;
    public $BackHeadmChakra;
    public $Eyes_left;

    public $Eyes_right;
    public $Ears_left;
    public $Ears_right;
    public $Jawmchakra_left;
    public $Jawmchakra_right;
    public $ThroatmChakra;
   
    public $Heart;
    public $Breast_left;
    public $Breast_right;
    public $Lungs_left;


    public $Lungs_right;
    public $Liver;
    public $Stomach;
    public $Pancreas;

    public $graphReport;

    public function __construct($db){
        $this->conn=$db;
    }

    public function Create(){

        $query="insert into 
        " . $this->tblName ."
        set clientId=:clientId,Brain_left=:Brain_left,Brain_right=:Brain_right,BackHeadmChakra=:BackHeadmChakra,
        Eyes_left=:Eyes_left,Eyes_right=:Eyes_right,Ears_left=:Ears_left,Ears_right=:Ears_right,
        Jawmchakra_left=:Jawmchakra_left,Jawmchakra_right=:Jawmchakra_right,ThroatmChakra=:ThroatmChakra,
        Heart=:Heart,Breast_left=:Breast_left,Breast_right=:Breast_right,Lungs_left=:Lungs_left,
        Lungs_right=:Lungs_right,Liver=:Liver,Stomach=:Stomach,Pancreas=:Pancreas,graphReport=:graphReport";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":clientId", $this->clientId);
        $stmt->bindParam(":Brain_left", $this->Brain_left);
        $stmt->bindParam(":Brain_right", $this->Brain_right);
        $stmt->bindParam(":BackHeadmChakra", $this->BackHeadmChakra);
        $stmt->bindParam(":Eyes_left", $this->Eyes_left);
        $stmt->bindParam(":Eyes_right", $this->Eyes_right);

        $stmt->bindParam(":Eyes_right", $this->Eyes_right);
        $stmt->bindParam(":Ears_left", $this->Ears_left);
        $stmt->bindParam(":Ears_right", $this->Ears_right);
        $stmt->bindParam(":Jawmchakra_left", $this->Jawmchakra_left);
        $stmt->bindParam(":Jawmchakra_right", $this->Jawmchakra_right);
        $stmt->bindParam(":ThroatmChakra", $this->ThroatmChakra);
        $stmt->bindParam(":Heart", $this->Heart);
        $stmt->bindParam(":Breast_left", $this->Breast_left);
        $stmt->bindParam(":Breast_right", $this->Breast_right);
        $stmt->bindParam(":Lungs_left", $this->Lungs_left);
        $stmt->bindParam(":Lungs_right", $this->Lungs_right);

        $stmt->bindParam(":Liver", $this->Liver);
        $stmt->bindParam(":Stomach", $this->Stomach);
        $stmt->bindParam(":Pancreas", $this->Pancreas);
        $stmt->bindParam(":graphReport", $this->graphReport);

      // execute query
      if($stmt->execute()){
                
        $this->oransChartPartOneId=$this->conn->lastInsertId();

        // insert into client graph detail table 

        $this->updateRefrenceTable();
       

        return $this->oransChartPartOneId;
    }

    return false;
    }

    public function updateRefrenceTable(){
        
        $query="Update tblclientgraphsdetail set organsChartPartOneId=:organsChartPartOneId where clientId=:clientId";

        $stmt_detail = $this->conn->prepare($query);

        $stmt_detail->bindParam(":organsChartPartOneId", $this->oransChartPartOneId);
        $stmt_detail->bindParam(":clientId", $this->clientId);

        $stmt_detail->execute();
    }

    public function getOrgansChartPartOneGraphById(){

        $query="SELECT * FROM `tblorgansminchartpart1` WHERE oransChartPartOneId=".$this->oransChartPartOneId." ORDER BY 1 DESC";

        $stmt=$this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

}



?>