<?php

class tblClientGraphDetails{

    // Private members
    private $conn;
    private $table_client='tblclient';

    // Public members
    public $ChakraGraphId;
    public $ChakraActivationGraphId;
    public $organsChartPartOneId;
    public $organsChartPartTwoId;
    public $PsychologicalParametersId;
    public $PsychologicalParametersPart2Id;
    public $clientId;

    public function __construct($db){
        $this->conn=$db;
    }

    public function getClientGraphsDetails(){
        
        $query="Select * from tblclientgraphsdetail where clientId = ?";

        // prepare the query statment 

        $stmt = $this->conn->prepare( $query );

        $stmt->bindParam(1, $this->clientId);

        // execute query
        $stmt->execute();

        return $stmt;
    }
}



?>