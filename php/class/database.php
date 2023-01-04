<?php 
class Database {
    private static $host = "localhost";
    private static $user = "root";
    private static $pwd = "";
    private static $dbName = "gestion_quiz";

    public  function connect() {
        $dsn = 'mysql:host=' . self::$host . ';dbname=' . self::$dbName;
        $pdo = new PDO($dsn, self::$user, self::$pwd);
        try{
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $pdo;
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    }
}

