<?php
// Настройки базы данных
$servername = "localhost";
$username = "artemppq_eamils";
$password = "eamils1234@";
$dbname = "artemppq_eamils";

// Создание подключения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Получение email из формы
$email = $_POST['email'];

// Подготовка и выполнение запроса
$stmt = $conn->prepare("INSERT INTO emails (email) VALUES (?)");
$stmt->bind_param("s", $email);

if ($stmt->execute()) {
    // Отправка письма
    mail($email, "Подтверждение подписки", "Ваш email у нас сохранен.");
    echo "Email успешно сохранен и отправлено письмо.";
} else {
    echo "Ошибка: " . $stmt->error;
}

// Закрытие соединения
$stmt->close();
$conn->close();
?>
