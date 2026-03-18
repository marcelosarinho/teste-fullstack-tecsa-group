<?php

require_once 'config/database.php';
require_once 'core/Router.php';
require_once 'repositories/TaskRepository.php';
require_once 'services/TaskService.php';
require_once 'controllers/TaskController.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$router = new Router();

$router->add('GET', '/tasks', [new TaskController(), 'index']);
$router->add('POST', '/tasks', [new TaskController(), 'create']);
$router->add('PUT', '/tasks/{id}', [new TaskController(), 'update']);
$router->add('DELETE', '/tasks/{id}', [new TaskController(), 'delete']);

$router->run();
