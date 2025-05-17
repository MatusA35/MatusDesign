<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Cargar PHPMailer
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Verificar que los campos estén definidos
    $nombre = htmlspecialchars($_POST['name'] ?? '');
    $correo = htmlspecialchars($_POST['email'] ?? '');
    $mensaje = htmlspecialchars($_POST['message'] ?? '');

    // Validación básica
    if (empty($nombre) || empty($correo) || empty($mensaje)) {
        exit("Todos los campos son obligatorios.");
    }

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'augustocastillodg@gmail.com'; // Tu correo Gmail
        $mail->Password = 'evnb qkez bwwb camt'; // Tu contraseña o App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Configurar el mensaje
        $mail->setFrom($correo, $nombre);
        $mail->addAddress('augustocastillodg@gmail.com', 'Augusto Castillo');

        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje desde tu formulario web';
        $mail->Body = "
            <h3>Mensaje de contacto</h3>
            <p><strong>Nombre:</strong> {$nombre}</p>
            <p><strong>Correo:</strong> {$correo}</p>
            <p><strong>Mensaje:</strong><br>{$mensaje}</p>
        ";

        $mail->send();
        echo "Mensaje enviado correctamente.";
    } catch (Exception $e) {
        echo "El mensaje no pudo enviarse. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Acceso no permitido.";
}
