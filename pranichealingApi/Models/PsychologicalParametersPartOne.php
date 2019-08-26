<?php

class tblpsychologicalparameterspart1{

    private $conn;
    private $tblName ="tblpsychologicalparameterspart1";

    public $PsychologicalParametersId;
    public $clientId;
    public $Dynamism;
    public $Abilitytoattractmoney;
    public $Productivity;
    public $SexualDrive;
    public $PhysicalViolence;
    public $SixthSense;
    public $Depression;
    public $graphReport;

    public function __construct($db){
        $this->conn=$db;
    }

    public function Create(){
        $query="Insert into
        " .$this->tblName ."
        set clientId=:clientId,Dynamism=:Dynamism,Abilitytoattractmoney=:Abilitytoattractmoney,
        Productivity=:Productivity,SexualDrive=:SexualDrive,PhysicalViolence=:PhysicalViolence,
        SixthSense=:SixthSense,Depression=:Depression,graphReport=:graphReport";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":clientId", $this->clientId);
        $stmt->bindParam(":Dynamism", $this->Dynamism);
        $stmt->bindParam(":Abilitytoattractmoney", $this->Abilitytoattractmoney);
        $stmt->bindParam(":Productivity", $this->Productivity);
        $stmt->bindParam(":SexualDrive", $this->SexualDrive);
        $stmt->bindParam(":PhysicalViolence", $this->PhysicalViolence);
        $stmt->bindParam(":SixthSense", $this->SixthSense);
        $stmt->bindParam(":Depression", $this->Depression);
        $stmt->bindParam(":graphReport", $this->graphReport);

        if($stmt->execute()){
                
            $this->PsychologicalParametersId=$this->conn->lastInsertId();
    
            // insert into client graph detail table 
    
            $this->updateRefrenceTable();
           
    
            return $this->PsychologicalParametersId;
        }
        return false;
    }
    public function updateRefrenceTable(){
        
        $query="Update tblclientgraphsdetail set PsychologicalParametersId=:PsychologicalParametersId where clientId=:clientId";

        $stmt_detail = $this->conn->prepare($query);

        $stmt_detail->bindParam(":PsychologicalParametersId", $this->PsychologicalParametersId);
        $stmt_detail->bindParam(":clientId", $this->clientId);

        $stmt_detail->execute();
    }

    public function Read(){

        $query="SELECT * FROM `tblpsychologicalparameterspart1` WHERE PsychologicalParametersId=".$this->PsychologicalParametersId." ORDER BY 1 DESC";

        $stmt=$this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

}


?>