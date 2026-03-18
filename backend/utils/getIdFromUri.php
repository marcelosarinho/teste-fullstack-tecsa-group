<?php

function getIdFromUri() {
    $uri = $_SERVER['REQUEST_URI'];
    $parts = explode('/', $uri);
    $id = (int) end($parts);
    return $id;
}