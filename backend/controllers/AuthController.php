<?php

class AuthController
{
    public function login()
    {
        $body = json_decode(file_get_contents('php://input'), true);

        $username = $body['username'] ?? null;
        $password = $body['password'] ?? null;

        $expectedUsername = Env::get('AUTH_USERNAME', 'admin');
        $expectedPassword = Env::get('AUTH_PASSWORD', '123456');

        if ($username !== $expectedUsername || $password !== $expectedPassword) {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid credentials'], JSON_UNESCAPED_UNICODE);
            return;
        }

        $token = Auth::generateToken($username);

        echo json_encode([
            'token' => $token
        ], JSON_UNESCAPED_UNICODE);
    }
}
