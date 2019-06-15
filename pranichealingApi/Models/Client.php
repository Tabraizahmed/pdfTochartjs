<?php

class tblClient
{
    //db params
    private $conn;
    private $table_client='tblclient';
    private $table_clienthabitsandtendencies='tblclienthabitsandtendencies';
    private $table_clienthealthinfo='tblclienthealthinfo';



    //model variables

    public $clientId;
    public $firstName;
    public $lastName;
    public $email;
    public $contactNumber;
    public $country;
    public $skypeId;
    public $dateOfBirth;
    public $sex;
    public $martialStaus;
    public $Occupation;
    public $imageUrl;
    // tblclienthabitsandtendencies model

    public $habitsTendenciesId;
    public $isSmoke;
    public $isAlcohol;
    public $isDrugs;
    public $meditationOrSpiritualPractice;
    public $tendenciesToRemove;

    // tblclienthealthinfo

    public $healthInfoId;
    public $typeOfAilment;
    public $symptomsAndSeverity;
    public $since;
    public $isAilmentInherited;
    public $medicalReport;
    public $medicineUse;


    // constructor 

    public function __construct($db){
        $this->conn=$db;
    }

    // read method
    public function readClient(){
        //create a query

        $query='select * from '.$this->table_client.' client INNER JOIN tblclienthabitsandtendencies habits on client.clientId=habits.clientId
         INNER JOIN tblclienthealthinfo healing on client.clientId=healing.clientId';

        // prepare statment

        $stmt=$this->conn->prepare($query);

        // Execuate query

        $stmt->execute();

        return $stmt;

    }
    // write method

    public function create()
    {
         // query to insert record
    $query = "INSERT INTO
    " . $this->table_client . "
        SET
        firstName=:firstName, lastName=:lastName, email=:email, contactNumber=:contactNumber,
        country=:country,skypeId=:skypeId,
        dateOfBirth=:dateOfBirth, sex=:sex,martialStaus=:martialStaus,Occupation=:Occupation,imageUrl=:imageUrl ";

        // prepare query
    $stmt = $this->conn->prepare($query);

     // sanitize
     $this->firstName=htmlspecialchars(strip_tags($this->firstName));
     $this->lastName=htmlspecialchars(strip_tags($this->lastName));
     $this->email=htmlspecialchars(strip_tags($this->email));
     $this->contactNumber=htmlspecialchars(strip_tags($this->contactNumber));

     $this->country=htmlspecialchars(strip_tags($this->country));
     $this->skypeId=htmlspecialchars(strip_tags($this->skypeId));
     
     $this->dateOfBirth=htmlspecialchars(strip_tags($this->dateOfBirth));
     $this->sex=htmlspecialchars(strip_tags($this->sex));
     $this->martialStaus=htmlspecialchars(strip_tags($this->martialStaus));
     $this->Occupation=htmlspecialchars(strip_tags($this->Occupation));
     $this->imageUrl=htmlspecialchars(strip_tags($this->imageUrl));

       // bind values
    $stmt->bindParam(":firstName", $this->firstName);
    $stmt->bindParam(":lastName", $this->lastName);
    $stmt->bindParam(":email", $this->email);
    $stmt->bindParam(":contactNumber", $this->contactNumber);

    $stmt->bindParam(":country", $this->country);
    $stmt->bindParam(":skypeId", $this->skypeId);

    $stmt->bindParam(":dateOfBirth", $this->dateOfBirth);
    $stmt->bindParam(":sex", $this->sex);
    $stmt->bindParam(":martialStaus", $this->martialStaus);
    $stmt->bindParam(":Occupation", $this->Occupation);
    $stmt->bindParam(":imageUrl", $this->imageUrl);

    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;

    }

}




?>