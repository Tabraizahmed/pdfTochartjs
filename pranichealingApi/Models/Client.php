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
    // public $country;
    // public $skypeId;
    public $dateOfBirth;
    // public $sex;
    // public $martialStaus;
    // public $Occupation;
    // public $imageUrl;
    public $isActive;

    // new fields

    public $street;
    public $AptNo;
    public $city;
    public $state;
    public $zipCode;

    public $Age;

    public $purposeOfVisit;
    public $ClientCommentsAfterVisit;

   public $isBloodPressure;
   public $isPregent;
   public $isDrugs;
   public $drugsDetails;
   public $isContagiousDisease;
   public $contagiousDiseaseDetails;
   public $ispsycho;
   public $psychologicalDisorderDetails;
   public $isSeriousInjury;
   public $seriousInjuryDetails;

   public $clientSignature;
   public $formDate;

    // tblclienthabitsandtendencies model

    public $habitsTendenciesId;
    public $isSmoke;
    public $isAlcohol;
    
    // public $meditationOrSpiritualPractice;
    // public $tendenciesToRemove;

    // tblclienthealthinfo

    // public $healthInfoId;
    // public $typeOfAilment;
    // public $symptomsAndSeverity;
    // public $since;
    // public $isAilmentInherited;
    // public $medicalReport;
    // public $medicineUse;


    // constructor 

    public function __construct($db){
        $this->conn=$db;
    }

    // read method
    public function readClient(){
        //create a query

        $query='select * from '.$this->table_client.' client INNER JOIN tblclienthabitsandtendencies habits on client.clientId=habits.clientId
          where client.isActive=0 order by 1 desc';

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
        street=:street,aptno=:aptno,city=:city,state=:state,zipcode=:zipcode,purposeOfVisit=:purposeOfVisit,
        ClientCommentsAfterVisit=:ClientCommentsAfterVisit,clientSignature=:clientSignature,formDate=:formDate,
        
        isActive=:isActive,dateOfBirth=:dob ";

        // prepare query
    $stmt = $this->conn->prepare($query);

     // sanitize
     $this->firstName=htmlspecialchars(strip_tags($this->firstName));
     $this->lastName=htmlspecialchars(strip_tags($this->lastName));
     $this->email=htmlspecialchars(strip_tags($this->email));
     $this->contactNumber=htmlspecialchars(strip_tags($this->contactNumber));

     $this->street=htmlspecialchars(strip_tags($this->street));
     $this->AptNo=htmlspecialchars(strip_tags($this->AptNo));
     $this->city=htmlspecialchars(strip_tags($this->city));
     $this->state=htmlspecialchars(strip_tags($this->state));
     $this->zipCode=htmlspecialchars(strip_tags($this->zipCode));
     $this->purposeOfVisit=htmlspecialchars(strip_tags($this->purposeOfVisit));

     $this->ClientCommentsAfterVisit=htmlspecialchars(strip_tags($this->ClientCommentsAfterVisit));
     $this->dateOfBirth=htmlspecialchars(strip_tags($this->dateOfBirth));

    // bind values
    $stmt->bindParam(":firstName", $this->firstName);
    $stmt->bindParam(":lastName", $this->lastName);
    $stmt->bindParam(":email", $this->email);
    $stmt->bindParam(":contactNumber", $this->contactNumber);
    $stmt->bindParam(":dob",$this->dateOfBirth);

  
   
    $stmt->bindParam(":street", $this->street);
    $stmt->bindParam(":aptno", $this->AptNo);

    $stmt->bindParam(":city", $this->city);
    $stmt->bindParam(":state", $this->state);
    $stmt->bindParam(":zipcode", $this->zipCode);
    $stmt->bindParam(":purposeOfVisit", $this->purposeOfVisit);
    $stmt->bindParam(":ClientCommentsAfterVisit", $this->ClientCommentsAfterVisit);
      
    $stmt->bindParam(":clientSignature", $this->clientSignature);
    $stmt->bindParam(":formDate", $this->formDate);
    

    $value=0;
    $stmt->bindParam(":isActive",$value);

    
    //$this->UploadImageToDirectory($this->imageUrl,$this->firstName);

    // execute query
    if($stmt->execute()){
    
        $clientId=$this->conn->lastInsertId();
        $this->InsertIntoTblTendencies($clientId);
        //$this->InsertIntoTblHealthInfo($clientId);

        return $clientId;
    }
 
   
    return false;

    }
   
     function UploadImageToDirectory($base64string,$fileName){
        $base_to_php = explode(',', $base64string);
        $data = base64_decode($base_to_php[1]);
        $filepath= getcwd()."\images\\".$fileName.".png";
        echo($filepath);
        file_put_contents($filepath,$data);
    }

    
    private function InsertIntoTblTendencies($clientId){

        $query = "INSERT INTO
        " . $this->table_clienthabitsandtendencies . "
            SET
            clientId=:clientId, isSmoke=:isSmoke, isAlcohol=:isAlcohol, isDrugs=:isDrugs,
            IsBloodPressure=:IsBloodPressure,isPregrent=:isPregrent,DrugsMedicationsdetails=:drugsDetails,
            Iscontagiousdisease=:Iscontagiousdisease,contagiousdisease_details=:contagiousDiseaseDetails,
            IspsychologicalDisorder=:IspsychologicalDisorder,
            psychological_disorder_detail=:psychologicalDisorderDetails,
            isphysicalinjury=:isphysicalinjury,physicalinjury_details=:seriousInjuryDetails";

     

    // prepare query
    $stmt = $this->conn->prepare($query);

     $this->drugsDetails=htmlspecialchars(strip_tags($this->drugsDetails));
     $this->contagiousDiseaseDetails=htmlspecialchars(strip_tags($this->contagiousDiseaseDetails));
     $this->psychologicalDisorderDetails=htmlspecialchars(strip_tags($this->psychologicalDisorderDetails));
     $this->seriousInjuryDetails=htmlspecialchars(strip_tags($this->seriousInjuryDetails));


     $stmt->bindParam(":clientId", $clientId);
     $smoke=$this->isSmoke==true?1:0;
     $stmt->bindParam(":isSmoke", $smoke);

     $aclchol=$this->isAlcohol==true?1:0;
     $stmt->bindParam(":isAlcohol", $aclchol);

     $drugs=$this->isDrugs==true?1:0;
     $stmt->bindParam(":isDrugs", $drugs);

     $bp=$this->isBloodPressure==true?1:0;
     $stmt->bindParam(":IsBloodPressure", $bp);

     $Pregrent=$this->isPregent==true?1:0;
     $stmt->bindParam(":isPregrent", $Pregrent);

     $stmt->bindParam(":drugsDetails",$this->drugsDetails);


     $contagiousdisease=$this->isContagiousDisease==true?1:0;
     $stmt->bindParam(":Iscontagiousdisease", $contagiousdisease);

     $stmt->bindParam(":contagiousDiseaseDetails",$this->contagiousDiseaseDetails);

    
     $psychologicalDisorder=$this->ispsycho==true?1:0;
     $stmt->bindParam(":IspsychologicalDisorder",$psychologicalDisorder);

     $stmt->bindParam(":psychologicalDisorderDetails",$this->psychologicalDisorderDetails);

     $physicalinjury=$this->isSeriousInjury==true?1:0;
     $stmt->bindParam(":isphysicalinjury",$physicalinjury);

    
     $stmt->bindParam(":seriousInjuryDetails",$this->seriousInjuryDetails);



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

    public function Delete(){


    // sanitize
    $this->clientId=htmlspecialchars(strip_tags($this->clientId));

    // delete query
    $query = "Update " . $this->table_client . " SET isActive=1 WHERE clientId =".$this->clientId;
   
    echo($query);
    // prepare query
    $stmt = $this->conn->prepare($query);


    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
    }

    

    private function update_tendencies($clientId){

    $query = "UPDATE
    " . $this->table_clienthabitsandtendencies . "
        SET
        isSmoke=:isSmoke, isAlcohol=:isAlcohol, isDrugs=:isDrugs,
        IsBloodPressure=:IsBloodPressure,isPregrent=:isPregrent,DrugsMedicationsdetails=:drugsDetails,
        Iscontagiousdisease=:Iscontagiousdisease,contagiousdisease_details=:contagiousDiseaseDetails,
        IspsychologicalDisorder=:IspsychologicalDisorder,
        psychological_disorder_detail=:psychologicalDisorderDetails,
        isphysicalinjury=:isphysicalinjury,physicalinjury_details=:seriousInjuryDetails
        
        where clientId=:clientId";

              // prepare query
    $stmt = $this->conn->prepare($query);

    $this->drugsDetails=htmlspecialchars(strip_tags($this->drugsDetails));
    $this->contagiousDiseaseDetails=htmlspecialchars(strip_tags($this->contagiousDiseaseDetails));
    $this->psychologicalDisorderDetails=htmlspecialchars(strip_tags($this->psychologicalDisorderDetails));
    $this->seriousInjuryDetails=htmlspecialchars(strip_tags($this->seriousInjuryDetails));

    $stmt->bindParam(":clientId", $clientId);
    $smoke=$this->isSmoke==true?1:0;
    $stmt->bindParam(":isSmoke", $smoke);

    $aclchol=$this->isAlcohol==true?1:0;
    $stmt->bindParam(":isAlcohol", $aclchol);

    $drugs=$this->isDrugs==true?1:0;
    $stmt->bindParam(":isDrugs", $drugs);

    $bp=$this->isBloodPressure==true?1:0;
    $stmt->bindParam(":IsBloodPressure", $bp);

    $Pregrent=$this->isPregent==true?1:0;
    $stmt->bindParam(":isPregrent", $Pregrent);

    $stmt->bindParam(":drugsDetails",$this->drugsDetails);


    $contagiousdisease=$this->isContagiousDisease==true?1:0;
    $stmt->bindParam(":Iscontagiousdisease", $contagiousdisease);

    $stmt->bindParam(":contagiousDiseaseDetails",$this->contagiousDiseaseDetails);

   
    $psychologicalDisorder=$this->ispsycho==true?1:0;
    $stmt->bindParam(":IspsychologicalDisorder",$psychologicalDisorder);

    $stmt->bindParam(":psychologicalDisorderDetails",$this->psychologicalDisorderDetails);

    $physicalinjury=$this->isSeriousInjury==true?1:0;
    $stmt->bindParam(":isphysicalinjury",$physicalinjury);


   
    $stmt->bindParam(":seriousInjuryDetails",$this->seriousInjuryDetails);
   
    if($stmt->execute()){
        return true;
    }
    return false;
    }

    private function updateClient($clientId){
        
        $query = "UPDATE
        " . $this->table_client . "
            SET
            firstName=:firstName, lastName=:lastName, email=:email, contactNumber=:contactNumber,
            street=:street,aptno=:aptno,city=:city,state=:state,zipcode=:zipcode,purposeOfVisit=:purposeOfVisit,
            ClientCommentsAfterVisit=:ClientCommentsAfterVisit,
            dateOfBirth=:dob,
            clientSignature=:clientSignature,formDate=:formDate
            where  clientId=:clientId";

            $stmt = $this->conn->prepare($query);

            // sanitize
            $this->firstName=htmlspecialchars(strip_tags($this->firstName));
            $this->lastName=htmlspecialchars(strip_tags($this->lastName));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->contactNumber=htmlspecialchars(strip_tags($this->contactNumber));
       
            $this->street=htmlspecialchars(strip_tags($this->street));
            $this->AptNo=htmlspecialchars(strip_tags($this->AptNo));
            $this->city=htmlspecialchars(strip_tags($this->city));
            $this->state=htmlspecialchars(strip_tags($this->state));
            $this->zipCode=htmlspecialchars(strip_tags($this->zipCode));
            $this->purposeOfVisit=htmlspecialchars(strip_tags($this->purposeOfVisit));
       
            $this->ClientCommentsAfterVisit=htmlspecialchars(strip_tags($this->ClientCommentsAfterVisit));
            $this->dateOfBirth=htmlspecialchars(strip_tags($this->dateOfBirth));
       
       
              // bind values
              $stmt->bindParam(":firstName", $this->firstName);
              $stmt->bindParam(":lastName", $this->lastName);
              $stmt->bindParam(":email", $this->email);
              $stmt->bindParam(":contactNumber", $this->contactNumber);
              
              $stmt->bindParam(":street", $this->street);
              $stmt->bindParam(":aptno", $this->AptNo);
          
              $stmt->bindParam(":city", $this->city);
              $stmt->bindParam(":state", $this->state);
              $stmt->bindParam(":zipcode", $this->zipCode);
              $stmt->bindParam(":purposeOfVisit", $this->purposeOfVisit);
              $stmt->bindParam(":ClientCommentsAfterVisit", $this->ClientCommentsAfterVisit);
              $stmt->bindParam(":dob",$this->dateOfBirth);
              $stmt->bindParam(":clientSignature", $this->clientSignature);
              $stmt->bindParam(":formDate", $this->formDate);
              $stmt->bindParam(":clientId",$clientId);

           if($stmt->execute()){

            
            $this->update_tendencies($clientId);

            return 101;
           }

           return false;

    }

    public function update(){
        
        $this->updateClient($this->clientId);

        return true;
    }
    
    public function GetClientById(){

        $query='select * from '.$this->table_client.' client INNER JOIN tblclienthabitsandtendencies habits on client.clientId=habits.clientId
        where client.isActive=0 and client.clientId = ? order by 1 desc';

        // prepare query statement
        $stmt = $this->conn->prepare( $query );
        
        // bind id of client to be updated
        $stmt->bindParam(1, $this->clientId);

         // execute query
        $stmt->execute();
    
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        

        $this->firstName = $row['firstName'];
        $this->lastName = $row['lastName'];
        $this->email = $row['email'];
        $this->contactNumber = $row['contactNumber'];
        $this->dateOfBirth = $row['dateOfBirth'];


        $this->street = $row['street'];
        $this->AptNo = $row['aptno'];
        $this->city = $row['city'];
        $this->state = $row['state'];
        $this->zipCode = $row['zipcode'];
        // $this->Age = $row['Age'];


        $this->purposeOfVisit = $row['purposeOfVisit'];
        $this->ClientCommentsAfterVisit = $row['ClientCommentsAfterVisit'];
        $this->isBloodPressure = $row['IsBloodPressure'];
        $this->isPregent = $row['isPregrent'];
        $this->isDrugs = $row['isDrugs'];

        $this->drugsDetails = $row['DrugsMedicationsdetails'];
        $this->isContagiousDisease = $row['Iscontagiousdisease'];
        $this->contagiousDiseaseDetails = $row['contagiousdisease_details'];
        $this->psychologicalDisorderDetails = $row['psychological_disorder_detail'];
        $this->isSeriousInjury = $row['isphysicalinjury'];
        $this->seriousInjuryDetails = $row['physicalinjury_details'];
        $this->clientSignature = $row['clientSignature'];

        $this->formDate = $row['formDate'];

        $this->habitsTendenciesId = $row['habitsTendenciesId'];
        $this->isSmoke = $row['isSmoke'];
        $this->isAlcohol = $row['isAlcohol'];


    }
}
?>