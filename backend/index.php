<?php

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

require_once 'config/database.php';
require_once 'core/Router.php';
require_once 'repositories/TaskRepository.php';
require_once 'services/TaskService.php';
require_once 'utils/Env.php';
require_once 'utils/Auth.php';
require_once 'controllers/TaskController.php';
require_once 'controllers/AuthController.php';

Env::load(__DIR__ . '/.env');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$router = new Router();

$router->add('POST', '/login', [new AuthController(), 'login']);

$router->add('GET', '/tasks', [new TaskController(), 'index']);
$router->add('POST', '/tasks', [new TaskController(), 'create']);
$router->add('PUT', '/tasks/{id}', [new TaskController(), 'update']);
$router->add('DELETE', '/tasks/{id}', [new TaskController(), 'delete']);

$router->run();
