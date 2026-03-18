<?php

class Database {
    public static function connect()
    {
        return new PDO(
            "mysql:host=db;dbname=teste_tecsa",
            "root",
            "root",
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
    }
}