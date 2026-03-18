<?php

require_once __DIR__ . '/../utils/getIdFromUri.php';

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

    $this->service->create($task);

    echo json_encode(['message' => 'Task criada']);
  }
  
  public function update()
  {
    $id = getIdFromUri();
    $task = json_decode(file_get_contents('php://input'), true);

    $this->service->update($id, $task);

    echo json_encode(['message' => 'Task atualizada']);
  }
  
  public function delete()
  {
    $id = getIdFromUri();

    $this->service->delete($id);

    echo json_encode(['message' => 'Task deletada']);
  }
}
