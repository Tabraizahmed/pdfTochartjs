<?php
class organsChartPartTwo{
    
    private $conn;
    private $tblName ="tblorgansminchartpart2";

    public $oransChartPartTwoId;
    public $clientId;
    public $LargeIntestine_left;
    public $Large_Intestine_right;
    public $Spieen_left;
    public $Kidneys_left;
    public $Kidneys_right;
    public $Prostate_M_Uterus_W;
    public $Bladder;
    public $Perineummchakra;
    public $Armpits_left;
    public $Armpits_right;
    public $Hands_left;
    public $Hands_right;
    public $Spine;
    public $HipsmChakra_left;
    public $HipsmChakra_right;
    public $Knees_right;
    public $Knees_left;
    public $Feet_left;
    public $Feet_right;
    public $graphReport;

    public function __construct($db){
        $this->conn=$db;
    }

    public function Create(){

        $query="Insert into 
        " . $this->tblName ."
        set clientId=:clientId,LargeIntestine_left=:LargeIntestine_left,Large_Intestine_right=:Large_Intestine_right,Spieen_left=:Spieen_left,
        Kidneys_left=:Kidneys_left,Kidneys_right=:Kidneys_right,Prostate_M_Uterus_W=:Prostate_M_Uterus_W,
        Bladder=:Bladder,Perineummchakra=:Perineummchakra,Armpits_left=:Armpits_left,Armpits_right=:Armpits_right,
        Hands_left=:Hands_left,Hands_right=:Hands_right,Spine=:Spine,HipsmChakra_left=:HipsmChakra_left,HipsmChakra_right=:HipsmChakra_right,
        Knees_left=:Knees_left,Knees_right=:Knees_right,Feet_left=:Feet_left,Feet_right=:Feet_right,graphReport=:graphReport";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":clientId", $this->clientId);
        $stmt->bindParam(":LargeIntestine_left", $this->LargeIntestine_left);
        $stmt->bindParam(":Large_Intestine_right", $this->Large_Intestine_right);
        $stmt->bindParam(":Spieen_left", $this->Spieen_left);
        $stmt->bindParam(":Kidneys_left", $this->Kidneys_left);
        $stmt->bindParam(":Kidneys_right", $this->Kidneys_right);

        $stmt->bindParam(":Prostate_M_Uterus_W", $this->Prostate_M_Uterus_W);
        $stmt->bindParam(":Bladder", $this->Bladder);
        $stmt->bindParam(":Perineummchakra", $this->Perineummchakra);
        $stmt->bindParam(":Armpits_left", $this->Armpits_left);
        $stmt->bindParam(":Armpits_right", $this->Armpits_right);
        $stmt->bindParam(":Hands_left", $this->Hands_left);
        $stmt->bindParam(":Hands_right", $this->Hands_right);
        $stmt->bindParam(":Spine", $this->Spine);
        $stmt->bindParam(":HipsmChakra_left", $this->HipsmChakra_left);
        $stmt->bindParam(":HipsmChakra_right", $this->HipsmChakra_right);
        $stmt->bindParam(":Knees_left", $this->Knees_left);
        $stmt->bindParam(":Knees_right",$this->Knees_right);

        $stmt->bindParam(":Feet_left", $this->Feet_left);
        $stmt->bindParam(":Feet_right", $this->Feet_right);
        $stmt->bindParam(":graphReport", $this->graphReport);
        
          // execute query
      if($stmt->execute()){
                
        $this->oransChartPartTwoId=$this->conn->lastInsertId();

        // insert into client graph detail table 

        $this->updateRefrenceTable();
       

        return $this->oransChartPartTwoId;
    }

    return false;
    }
    
    public function updateRefrenceTable(){
        
        $query="Update tblclientgraphsdetail set organsChartPartTwoId=:organsChartPartTwoId where clientId=:clientId";

        $stmt_detail = $this->conn->prepare($query);

        $stmt_detail->bindParam(":organsChartPartTwoId", $this->oransChartPartTwoId);
        $stmt_detail->bindParam(":clientId", $this->clientId);

        $stmt_detail->execute();
    }

    public function getOrgansChartPartTwoGraphById(){

        $query="SELECT * FROM `tblorgansminchartpart2` WHERE oransChartPartTwoId=".$this->oransChartPartTwoId." ORDER BY 1 DESC";

        $stmt=$this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }
}



?>