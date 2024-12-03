<?php
// Настройки базы данных
$host = 'localhost';
$dbname = 'artemppq_eamils';
$user = 'artemppq_eamils';
$pass = 'eamils1234@';

try {
    // Подключение к базе данных через PDO
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Проверяем метод запроса
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Получаем данные из запроса
        $email = $_POST['email'];

        if ($email) {
            // Подготовка SQL-запроса
            $sql = "INSERT INTO emails (email) VALUES (:email)";
            $stmt = $conn->prepare($sql);

            // Выполнение запроса
            $stmt->execute([':email' => $email]);

            // Отправка письма (убедитесь, что mail() настроен правильно)
            mail($email, "Added to whitelist", "You are on the whitelist. Wait for an email to confirm your wallet and gain access to ONLYMILF");

            // Возвращаем успешный ответ
            echo json_encode([
                'status' => 'success',
                'message' => 'Email успешно сохранен и отправлено письмо.'
            ]);
        } else {
            // Ошибка: Email не указан
            echo json_encode([
                'status' => 'error',
                'message' => 'Email не указан.'
            ]);
        }
    } else {
        // Ошибка метода
        echo json_encode([
            'status' => 'error',
            'message' => 'Метод запроса не поддерживается.'
        ]);
    }
} catch (PDOException $e) {
    // Обработка ошибок подключения или SQL
    echo json_encode([
        'status' => 'error',
        'message' => 'Ошибка базы данных: ' . $e->getMessage()
    ]);
}
?>