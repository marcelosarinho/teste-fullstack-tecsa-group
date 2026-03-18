<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../enums/Status.php';
require_once __DIR__ . '/../utils/Validator.php';

class ValidatorTest extends TestCase
{
    public function testRequiredFields()
    {
      $errors = Validator::validate([]);

      $this->assertArrayHasKey('title', $errors);
      $this->assertArrayHasKey('description', $errors);
      $this->assertArrayHasKey('status', $errors);
    }

    public function testMaxLenghts()
    {
      $data = [
        'title' => str_repeat('a', 256),
        'description' => str_repeat('a', 256),
        'status' => 'pendente'
      ];
      
      $errors = Validator::validate($data);
      
      $this->assertEquals('Título deve ter no máximo 255 caracteres!', $errors['title'] ?? null);
      $this->assertEquals('Descrição deve ter no máximo 255 caracteres!', $errors['description'] ?? null);
    }

    public function testInvalidStatus()
    {
      $data = [
        'title' => 'Minha tarefa',
        'description' => 'Descrição da minha tarefa',
        'status' => 'invalido'
      ];
      
      $errors = Validator::validate($data);
      
      $this->assertEquals('Status deve ser "pendente", "concluido" ou "em_andamento"', $errors['status'] ?? null);
    }

    public function testValidPayload()
    {
      $data = [
        'title' => 'Minha tarefa',
        'description' => 'Descrição da minha tarefa',
        'status' => 'em_andamento'
      ];
      
      $errors = Validator::validate($data);
      
      $this->assertEmpty($errors);
    }
}
