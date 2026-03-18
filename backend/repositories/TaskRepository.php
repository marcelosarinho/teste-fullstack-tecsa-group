<?php

class TaskRepository {
  private $db;

  public function __construct()
  {
    $this->db = Database::connect();
  }

  public function index()
  {
    $stmt = $this->db->query("SELECT * FROM tasks");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function create($task)
  {
    $stmt = $this->db->prepare("INSERT INTO tasks (title, description, status, created_at, updated_at) VALUES (:title, :description, :status, :created_at, :updated_at)");

    $now = date('Y-m-d H:i:s');

    $stmt->bindParam(':title', $task['title'], PDO::PARAM_STR);
    $stmt->bindParam(':description', $task['description'], PDO::PARAM_STR);
    $stmt->bindParam(':status', $task['status'], PDO::PARAM_STR);
    $stmt->bindParam(':created_at', $now, PDO::PARAM_STR);
    $stmt->bindParam(':updated_at', $now, PDO::PARAM_STR);
    $stmt->execute();

    return $this->db->lastInsertId();
  }

  public function update($id, $task)
  {
    $stmt = $this->db->prepare("UPDATE tasks SET title = :title, description = :description, status = :status, updated_at = :updated_at WHERE id = :id");

    $now = date('Y-m-d H:i:s');

    $stmt->bindParam(':title', $task['title'], PDO::PARAM_STR);
    $stmt->bindParam(':description', $task['description'], PDO::PARAM_STR);
    $stmt->bindParam(':status', $task['status'], PDO::PARAM_STR);
    $stmt->bindParam(':updated_at', $now, PDO::PARAM_STR);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    return $stmt->rowCount();
  }

  public function delete($id)
  {
    $stmt = $this->db->prepare("DELETE FROM tasks WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    return $stmt->rowCount();
  }
}
