<?php

$router->get("/tasks", function() {
    echo "Hello World";
});
$router->post("/tasks", function() {
    echo "Hello World";
});
$router->put("/tasks/:id", function() {
    echo "Hello World";
});
$router->delete("/tasks/:id", function() {
    echo "Hello World";
});