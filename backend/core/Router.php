<?php

class Router {
  private $routes = [];
  
  public function __construct()
  {
    $this->routes = [];
  }

  public function add($method, $path, $callback)
  {
    $this->routes[] = compact('method', 'path', 'callback');
  }
  
  public function get($path, $handler)
  {
    $this->add('GET', $path, $handler);
  }
  
  public function post($path, $handler)
  {
    $this->add('POST', $path, $handler);
  }
  
  public function put($path, $handler)
  {
    $this->add('PUT', $path, $handler);
  }
  
  public function delete($path, $handler)
  {
    $this->add('DELETE', $path, $handler);
  }

  public function run()
  {
    $method = $_SERVER['REQUEST_METHOD'];
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    
    foreach ($this->routes as $route) {
      if ($route['method'] === $method && $route['path'] === $path) {
        call_user_func($route['callback']);
        return;
      }
    }
    
    http_response_code(404);
    echo json_encode(['error' => 'Not Found']);
  }
}
