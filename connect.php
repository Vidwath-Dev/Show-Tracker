<?php
    //Database connection
    $server   = "localhost";
    $username  = "root";
    $password   = "";
    $dbname     = "devcoding";

    $con  = mysqli_connect($server, $username, $password, $dbname);

    if(!$con)
    {
        echo "not connected";
    }

    //store(html-php fetch)

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $city = $_POST['city'];
    $password = $_POST['pass'];

    //to insert in sql

    //query

    $sql = "INSERT INTO `test`(`name`, `email`, `phone`, `city`, `password`) VALUES ('$name','$email','$phone','$city','$password')";

    $result = mysqli_query($con , $sql);

    if($result)
    {
        echo "data submitted";
    }
    
    else
    {
        echo "error";
    }
?>