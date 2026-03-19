<?php

class Validator {
    public static function validate($data) {
        $errors = [];

        if (!isset($data['title']) || empty($data['title'])) {
            $errors['title'] = 'Título é obrigatório';
        }

        if (isset($data['title']) && strlen($data['title']) > 255) {
            $errors['title'] = 'Título deve ter no máximo 255 caracteres!';
        }

        if (!isset($data['description']) || empty($data['description'])) {
            $errors['description'] = 'Descrição é obrigatória';
        }

        if (isset($data['description']) && strlen($data['description']) > 255) {
            $errors['description'] = 'Descrição deve ter no máximo 255 caracteres!';
        }

        if (!isset($data['status']) || empty($data['status'])) {
            $errors['status'] = 'Status é obrigatório';
        }

        if (isset($data['status'])) {
            $status = Status::tryFrom($data['status']);
            if ($status === null) {
                $errors['status'] = 'Status inválido';
            }
        }

        return $errors;
    }
}
