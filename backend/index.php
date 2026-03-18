<?php

require_once 'config/database.php';
require_once 'core/Router.php';
require_once 'controllers/TaskController.php';

$router = new Router();

$router->add('GET', '/tasks', [TaskController::class, 'index']);
$router->add('POST', '/tasks', [TaskController::class, 'create']);
$router->add('PUT', '/tasks/{id}', [TaskController::class, 'update']);
$router->add('DELETE', '/tasks/{id}', [TaskController::class, 'delete']);

$router->run();
