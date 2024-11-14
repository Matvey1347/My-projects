<?php
  // Получение данных из POST запроса
  $postData = file_get_contents("php://input");
  $data = json_decode($postData, true);

  // Получаем данные из base64 строки
  list($type, $data['imagePath']) = explode(';', $data['imagePath']);
  list(, $data['imagePath'])      = explode(',', $data['imagePath']);
  $data['imagePath'] = base64_decode($data['imagePath']);

  // Определяем путь к целевой папке
  $targetDir = __DIR__ . '/user-image'; // Укажите здесь путь к вашей целевой папке
  if (!file_exists($targetDir)) {
      mkdir($targetDir, 0777, true); // Создаем папку, если она не существует
  }

  // Генерируем уникальное имя файла с расширением .png
  $fileName = uniqid('img_', true) . '.png';
  $filePath = $targetDir . '/' . $fileName;

  // Сохраняем данные изображения в файл
  file_put_contents($filePath, $data['imagePath']);

  $relativePath = '/user-image/' . $fileName;

  // Формируем полный URL к изображению
  $scheme = $_SERVER['REQUEST_SCHEME'];
  $host = $_SERVER['HTTP_HOST'];
  $fullUrl = $scheme . '://' . $host . ($host === 'localhost:8888' ? '/Valdy' : '') . $relativePath;

  echo json_encode(["imagePath" => $filePath, "imageUrl" => $fullUrl]);
?>
