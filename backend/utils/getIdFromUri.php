<?php

function getIdFromUri() {
    $uri = $_SERVER['REQUEST_URI'];
    $parts = explode('/', $uri); // separa por /
    $id = (int) end($parts);
    return $id;
}