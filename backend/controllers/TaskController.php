<?php

require_once __DIR__ . '/../utils/getIdFromUri.php';
require_once __DIR__ . '/../utils/Validator.php';
require_once __DIR__ . '/../enums/Status.php';

class TaskController {
  private $service;

  public function __construct()
  {
    $this->service = new TaskService();
  }
  
  public function index()
  {    
    try {
      $tasks = $this->service->index();
      echo json_encode([
          'success' => true,
          'data' => $tasks
      ], JSON_UNESCAPED_UNICODE);
    } catch (Exception $e) {
      http_response_code(500);
      echo json_encode([
          'error' => $e->getMessage()
      ], JSON_UNESCAPED_UNICODE);
    }
  }
  
  public function create()
  {
    $task = json_decode(file_get_contents('php://input'), true);

    $errors = Validator::validate($task ?? []);
    if (!empty($errors)) {
      http_response_code(422);
      echo json_encode([
        'success' => false,
        'errors' => $errors
      ], JSON_UNESCAPED_UNICODE);
      return;
    }

    $this->service->create($task);

    echo json_encode(['message' => 'Task criada'], JSON_UNESCAPED_UNICODE);
  }
  
  public function update()
  {
    $id = getIdFromUri();
    $task = json_decode(file_get_contents('php://input'), true);

    $errors = Validator::validate($task ?? []);
    if (!empty($errors)) {
      http_response_code(422);
      echo json_encode([
        'success' => false,
        'errors' => $errors
      ], JSON_UNESCAPED_UNICODE);
      return;
    }

    $this->service->update($id, $task);

    echo json_encode(['message' => 'Task atualizada'], JSON_UNESCAPED_UNICODE);
  }
  
  public function delete()
  {
    $id = getIdFromUri();

    $this->service->delete($id);

    echo json_encode(['message' => 'Task deletada']);
  }
}
