<?php

class Router {
  private $routes = [];
  
  public function __construct()
  {
    $this->routes = [];
  }

  public function add($method, $path, $callback)
  {
    // Aqui, nesse caso, como estou usando PHP puro tive que mexer com regex para pegar o ID da url em casos como tasks/{id}
    $regex = preg_replace('/\{[a-zA-Z0-9_]+\}/', '([0-9]+)', $path);
    $regex = "#^$regex$#";

    $this->routes[] = compact('method', 'regex', 'callback');
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
      if ($route['method'] === $method && preg_match($route['regex'], $path, $matches)) {
        array_shift($matches);
        call_user_func_array($route['callback'], $matches);
        return;
      }
    }
    
    http_response_code(404);
    echo json_encode(['error' => 'Not Found']);
  }
}
