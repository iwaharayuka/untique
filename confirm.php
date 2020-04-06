<?php
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $textbox = $_POST['textbox'];
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UNTIQUE</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="_inc/css/common.css">
    <link rel="stylesheet" href="css/contact.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP|Ovo&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="/img/favicon.ico">
    <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="/img/android-chrome-256x256.png">
</head>
<body>
    <header>
        <div class="header">
            <!-- header -->
        </div>
    </header>
    <main>
        <h2 class="second-ttl">CONFIRM</h2>
        <h3 class="sub-ttl">送信内容をご確認ください</h3>
        <div class="form-container">
            <form action="submit.php" method="post" name="form">
                <input type="text" class="name" name="name" value="<?=$name?>" readonly="readonly" style="border: solid 1px #887559; background: #edeceb; color: #887559;">
                <input type="text" class="mail" name="mail" value="<?=$mail?>" readonly="readonly" style="border: solid 1px #887559; background: #edeceb; color: #887559;">
                <textarea class="textbox" name="textbox" readonly="readonly" style="border: solid 1px #887559; background: #edeceb; color: #887559;"><?=$textbox?></textarea>
                <div class="btn-area">
                    <input type="submit" class="btn send" value="送信する">
                </div>
            </form>
        </div>
    </main>
    <div class="footer">
        <!-- footer読み込み -->
    </div>

    <script type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="_inc/js/header.js"></script>
    <script src="_inc/js/footer.js"></script>
    <script src="js/contact.js"></script>
    <script src="_inc/js/common.js"></script>
</body>
</html>