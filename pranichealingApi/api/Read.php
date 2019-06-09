<?php

    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../config/Database.php';

    include_once '../Models/Client.php';
  
    
    // instanitate db & connect

    $database=new Database();

    $db=$database->connect();

    $client=new tblClient($db);

    // query client table

    $result= $client->readClient();

    // Get row count

    $num= $result->rowCount();

    //check if any

    if($num>0){
        echo 'record exist';
    }
    else{
        echo 'record not exist';
    }