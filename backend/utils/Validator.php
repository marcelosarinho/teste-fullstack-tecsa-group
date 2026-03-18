<?php

class Validator {
    public static function validate($data, $rules) {
        $errors = [];
        
        foreach ($rules as $field => $rule) {
            if (!isset($data[$field])) {
                $errors[$field] = 'Campo obrigatório';
                continue;
            }
            
            $value = $data[$field];
            
            if ($rule['required'] && empty($value)) {
                $errors[$field] = 'Campo obrigatório';
            }
            
            if (!empty($value) && isset($rule['min_length']) && strlen($value) < $rule['min_length']) {
                $errors[$field] = 'Mínimo de ' . $rule['min_length'] . ' caracteres';
            }
            
            if (!empty($value) && isset($rule['max_length']) && strlen($value) > $rule['max_length']) {
                $errors[$field] = 'Máximo de ' . $rule['max_length'] . ' caracteres';
            }
        }
        
        return $errors;
    }
}
