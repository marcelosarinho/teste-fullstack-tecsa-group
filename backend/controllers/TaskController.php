<?php

class TaskController {
  private $service;

  public function __construct()
  {
    $this->service = new TaskService();
  }
  
  public function findAll()
  {
    echo json_encode($this->service->findAll());
  }
  
  public function create()
  {
    $task = json_decode(file_get_contents('php://input'), true);

    $this->service->create($task);

    echo json_encode(['message' => 'Task criada']);
  }
  
  public function update()
  {
    $id = $_GET['id'];
    $task = json_decode(file_get_contents('php://input'), true);

    $this->service->update($id, $task);

    echo json_encode(['message' => 'Task atualizada']);
  }
  
  public function delete()
  {
    $id = $_GET['id'];

    $this->service->delete($id);

    echo json_encode(['message' => 'Task deletada']);
  }
}
