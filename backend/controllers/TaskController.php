<?php

class TaskController {
  private $service;

  public function __construct()
  {
    $this->service = new TaskService();
  }
  
  public function index()
  {
    echo json_encode($this->service->index());
  }
  
  public function create()
  {
    $task = json_decode(file_get_contents('php://input'), true);

    $this->service->create($task);

    echo json_encode(['message' => 'Task criada']);
  }
  
  public function update()
  {
    $uri = $_SERVER['REQUEST_URI'];
    $parts = explode('/', $uri); // separa por /
    $id = (int) end($parts);
    $task = json_decode(file_get_contents('php://input'), true);

    $this->service->update($id, $task);

    echo json_encode(['message' => 'Task atualizada']);
  }
  
  public function delete()
  {
    $uri = $_SERVER['REQUEST_URI'];
    $parts = explode('/', $uri); // separa por /
    $id = (int) end($parts);

    $this->service->delete($id);

    echo json_encode(['message' => 'Task deletada']);
  }
}
