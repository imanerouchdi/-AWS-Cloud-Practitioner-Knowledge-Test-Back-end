<?php
header('Content-Type: application/json');
    include_once 'database.php';
    class Question{
      
        public function get(){
            $database = new Database();
            $sql = "SELECT * FROM `questions`";
            $stmt = $database->connect()->prepare($sql);
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data, JSON_PRETTY_PRINT);

        }
    }


    $question = new Question();
    $question->get();












?>