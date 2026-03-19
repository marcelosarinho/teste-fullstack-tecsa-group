<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Auth
{
    public static function getSecret()
    {
        return Env::get('JWT_SECRET', 'dev_secret_change_me');
    }

    public static function generateToken($username)
    {
        $now = time();

        $payload = [
            'sub' => $username,
            'iat' => $now,
            'exp' => $now + 60 * 60
        ];

        return JWT::encode($payload, self::getSecret(), 'HS256');
    }

    public static function decodeToken($token)
    {
        return JWT::decode($token, new Key(self::getSecret(), 'HS256'));
    }

    public static function getBearerToken()
    {
        $headers = [];

        if (function_exists('getallheaders')) {
            $headers = getallheaders();
        }

        $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? ($_SERVER['HTTP_AUTHORIZATION'] ?? null);
        if (!$authHeader) {
            return null;
        }

        if (!preg_match('/^Bearer\s+(.*)$/i', $authHeader, $matches)) {
            return null;
        }

        return trim($matches[1]);
    }

    public static function requireAuth()
    {
        $token = self::getBearerToken();

        if (!$token) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized'], JSON_UNESCAPED_UNICODE);
            exit;
        }

        try {
            self::decodeToken($token);
        } catch (Throwable $e) {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid token'], JSON_UNESCAPED_UNICODE);
            exit;
        }
    }
}
