<?php

class tblClient
{
    //db params
    private $conn;
    private $table='tblclient';

    //model variables

    public $clientId;
    public $firstName;
    public $lastName;
    public $email;
    public $contactNumber;
    public $dateOfBirth;
    public $sex;
    public $martialStaus;
    public $Occupation;
    public $imageUrl;
 

    // constructor 

    public function __construct($db){
        $this->conn=$db;
    }

    //read method
    public function readClient(){
        //create a query

        $query='select * from '.$this->table;

        // prepare statment

        $stmt=$this->conn->prepare($query);

        // Execuate query

        $stmt->execute();

        return $stmt;

    }

}




?>