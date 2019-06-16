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
         INNER JOIN tblclienthealthinfo healing on client.clientId=healing.clientId order by 1 desc';

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
    
        $clientId=$this->conn->lastInsertId();
        $this->InsertIntoTblTendencies($clientId);
        $this->InsertIntoTblHealthInfo($clientId);

        return $clientId;
    }
 
   
    return false;

    }

    private function InsertIntoTblTendencies($clientId){

        $query = "INSERT INTO
        " . $this->table_clienthabitsandtendencies . "
            SET
            clientId=:clientId, isSmoke=:isSmoke, isAlcohol=:isAlcohol, isDrugs=:isDrugs,
            meditationOrSpiritualPractice=:meditationOrSpiritualPractice,tendenciesToRemove=:tendenciesToRemove";

    // prepare query
    $stmt = $this->conn->prepare($query);

     $this->isSmoke=htmlspecialchars(strip_tags($this->isSmoke));
     $this->isAlcohol=htmlspecialchars(strip_tags($this->isAlcohol));
     $this->isDrugs=htmlspecialchars(strip_tags($this->isDrugs));
     $this->meditationOrSpiritualPractice=htmlspecialchars(strip_tags($this->meditationOrSpiritualPractice));
     $this->tendenciesToRemove=htmlspecialchars(strip_tags($this->tendenciesToRemove));

     $stmt->bindParam(":clientId", $clientId);
     $smoke=$this->isSmoke==true?1:0;
     $stmt->bindParam(":isSmoke", $smoke);
     $aclchol=$this->isAlcohol==true?1:0;
     $stmt->bindParam(":isAlcohol", $aclchol);
     $drugs=$this->isDrugs==true?1:0;
     $stmt->bindParam(":isDrugs", $drugs);
     $stmt->bindParam(":meditationOrSpiritualPractice", $this->meditationOrSpiritualPractice);
     $stmt->bindParam(":tendenciesToRemove", $this->tendenciesToRemove);
    
     $stmt->execute();

    }

    private function InsertIntoTblHealthInfo($clientId){

        $query = "INSERT INTO
        " . $this->table_clienthealthinfo . "
            SET
            typeOfAilment=:typeOfAilment, symptomsAndSeverity=:symptomsAndSeverity, since=:since, isAilmentInherited=:isAilmentInherited,
            medicalReport=:medicalReport,medicineUse=:medicineUse,clientId=:clientId";

    // prepare query
    $stmt = $this->conn->prepare($query);

     $this->typeOfAilment=htmlspecialchars(strip_tags($this->typeOfAilment));
     $this->symptomsAndSeverity=htmlspecialchars(strip_tags($this->symptomsAndSeverity));
     $this->since=htmlspecialchars(strip_tags($this->since));
     $this->isAilmentInherited=htmlspecialchars(strip_tags($this->isAilmentInherited));
     $this->medicalReport=htmlspecialchars(strip_tags($this->medicalReport));
     $this->medicineUse=htmlspecialchars(strip_tags($this->medicineUse));


     $stmt->bindParam(":typeOfAilment", $typeOfAilment);
     $stmt->bindParam(":symptomsAndSeverity", $this->symptomsAndSeverity);
     $stmt->bindParam(":since", $this->since);
     $isIherited=$this->isAilmentInherited==true?1:0;
     $stmt->bindParam(":isAilmentInherited", $isIherited);
     $stmt->bindParam(":medicalReport", $this->medicalReport);
     $stmt->bindParam(":medicineUse", $this->medicineUse);
     $stmt->bindParam(":clientId", $clientId);
    
     $stmt->execute();

    }
}




?>