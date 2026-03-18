<?php

class TaskService {
  private $repository;

  public function __construct()
  {
    $this->repository = new TaskRepository();
  }

  public function index()
  {
    return $this->repository->index();
  }

  public function create($task)
  {
    return $this->repository->create($task);
  }

  public function update($id, $task)
  {
    return $this->repository->update($id, $task);
  }

  public function delete($id)
  {
    return $this->repository->delete($id);
  }
}