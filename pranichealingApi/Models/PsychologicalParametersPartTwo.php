<?php

class tblpsychologicalparameterspart2{

    private $conn;
    private $tblName ="tblpsychologicalparameterspart2";

    public $PsychologicalParametersPart2Id;
    public $clientId;
    public $ChakraStress;
    public $ChakraAnger;
    public $ChakraFear_phobia;
    public $ChakraCourage;
    public $ChakraPerseverance;
    public $ChakraObession;
    public $ChakraSelf_Confidence;
    public $graphReport;

    public function __construct($db){
        $this->conn=$db;
    }

    public function Create(){
        $query="Insert into
        " .$this->tblName ."
        set clientId=:clientId,ChakraStress=:ChakraStress,ChakraAnger=:ChakraAnger,
        ChakraFear_phobia=:ChakraFear_phobia,ChakraCourage=:ChakraCourage,ChakraPerseverance=:ChakraPerseverance,
        ChakraObession=:ChakraObession,ChakraSelf_Confidence=:ChakraSelf_Confidence,graphReport=:graphReport";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":clientId", $this->clientId);
        $stmt->bindParam(":ChakraStress", $this->ChakraStress);
        $stmt->bindParam(":ChakraAnger", $this->ChakraAnger);
        $stmt->bindParam(":ChakraFear_phobia", $this->ChakraFear_phobia);
        $stmt->bindParam(":ChakraCourage", $this->ChakraCourage);
        $stmt->bindParam(":ChakraPerseverance", $this->ChakraPerseverance);
        $stmt->bindParam(":ChakraObession", $this->ChakraObession);
        $stmt->bindParam(":ChakraSelf_Confidence", $this->ChakraSelf_Confidence);
        $stmt->bindParam(":graphReport", $this->graphReport);

        if($stmt->execute()){
                
            $this->PsychologicalParametersPart2Id=$this->conn->lastInsertId();
    
            // insert into client graph detail table 
    
            $this->updateRefrenceTable();
           
    
            return $this->PsychologicalParametersPart2Id;
        }
        return false;
    }
    public function updateRefrenceTable(){
        
        $query="Update tblclientgraphsdetail set PsychologicalParametersPart2Id=:PsychologicalParametersPart2Id where clientId=:clientId";

        $stmt_detail = $this->conn->prepare($query);

        $stmt_detail->bindParam(":PsychologicalParametersPart2Id", $this->PsychologicalParametersPart2Id);
        $stmt_detail->bindParam(":clientId", $this->clientId);

        $stmt_detail->execute();
    }
    public function Read(){

        $query="SELECT * FROM `tblpsychologicalparameterspart2` WHERE PsychologicalParametersPart2Id=".$this->PsychologicalParametersPart2Id." ORDER BY 1 DESC";

        $stmt=$this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

}

?>