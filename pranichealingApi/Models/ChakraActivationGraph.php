<?php

class tblChakraActivationGraph{

    private $conn;
    private $tblName ="tblchakaraactivationgraph";

    public $ChakraActivationGraphId;
    public $clientId;
    public $CrownChakra;
    public $ForeheadChakra;
    public $AjnaChakra;
    public $ThroatChakra;

    public $HeartChakra_front;
    public $HeartChakra_back;
    public $SolarPlexCharka_front;
    public $SolarPlexCharka_back;
    public $SpleenChakra_front;
    public $SpleenChakra_back;
   
    public $MengMeinChakra;
    public $SexChakra;
    public $BasicChakra;

    public $graphReport;

    public function __construct($db){
        $this->conn=$db;
    }

    public function Create(){

        $query="INSERT INTO
        " . $this->tblName ."
            SET 
            clientId=:clientId,CrownChakra=:CrownChakra,ForeheadChakra=:ForeheadChakra,
            AjnaChakra=:AjnaChakra,ThroatChakra=:ThroatChakra,HeartChakra_front=:HeartChakra_front,
            HeartChakra_back=:HeartChakra_back,SolarPlexCharka_front=:SolarPlexCharka_front,
            SolarPlexCharka_back=:SolarPlexCharka_back,SpleenChakra_front=:SpleenChakra_front,
            SpleenChakra_back=:SpleenChakra_back,MengMeinChakra=:MengMeinChakra,SexChakra=:SexChakra,
            BasicChakra=:BasicChakra,graphReport=:graphReport";

            $stmt = $this->conn->prepare($query);
            
            $stmt->bindParam(":clientId", $this->clientId);
            $stmt->bindParam(":CrownChakra", $this->CrownChakra);
            $stmt->bindParam(":ForeheadChakra", $this->ForeheadChakra);
            $stmt->bindParam(":AjnaChakra", $this->AjnaChakra);
            $stmt->bindParam(":ThroatChakra", $this->ThroatChakra);
            $stmt->bindParam(":ThroatChakra", $this->ThroatChakra);


            $stmt->bindParam(":HeartChakra_front", $this->HeartChakra_front);
            $stmt->bindParam(":HeartChakra_back", $this->HeartChakra_back);
            $stmt->bindParam(":SolarPlexCharka_front", $this->SolarPlexCharka_front);

            $stmt->bindParam(":SolarPlexCharka_back", $this->SolarPlexCharka_back);
            $stmt->bindParam(":SpleenChakra_front", $this->SpleenChakra_front);
            $stmt->bindParam(":SpleenChakra_back", $this->SpleenChakra_back);
            $stmt->bindParam(":MengMeinChakra", $this->MengMeinChakra);
            $stmt->bindParam(":SexChakra", $this->SexChakra);

            $stmt->bindParam(":BasicChakra", $this->BasicChakra);
            $stmt->bindParam(":graphReport", $this->graphReport);

            // execute query
            if($stmt->execute()){
                
                $this->ChakraActivationGraphId=$this->conn->lastInsertId();

                // insert into client graph detail table 

                $this->updateRefrenceTable();
               

                return $this->ChakraActivationGraphId;
            }

            return false;
    }

    public function updateRefrenceTable(){
        
        $query="Update tblclientgraphsdetail set ChakraActivationGraphId=:ChakraActivationGraphId where clientId=:clientId";

        $stmt_detail = $this->conn->prepare($query);

        $stmt_detail->bindParam(":ChakraActivationGraphId", $this->ChakraActivationGraphId);
        $stmt_detail->bindParam(":clientId", $this->clientId);

        $stmt_detail->execute();
    }

    
    public function getActivationGraphById(){

        $query="SELECT * FROM `tblchakaraactivationgraph` WHERE ChakraActivationGraphId=".$this->ChakraActivationGraphId." ORDER BY 1 DESC";

        $stmt=$this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }
}



?>