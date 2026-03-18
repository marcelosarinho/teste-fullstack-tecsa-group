<?php

class Database {
    public static function connect() {
        return new PDO(
            "mysql:host=db;dbname=tasks_db",
            "root",
            "",
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
    }
}