<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $mail = $_POST['mail'];
        $textbox = $_POST['textbox'];

         //メールの内容
        $body .= "この度は、UNTIQUEにお問合わせいただき誠にありがとうございます。 以下の内容でお問合わせ内容を送信しました。\n3営業日以内に、折り返しご連絡させていただきます。\n※こちらのメールにお心当たりのない場合、お手数ですがご連絡いただけますと幸いです。\n\n\n";
        $body .= "お名前:  ".$name."\n";
        $body .= "メールアドレス:  ".$mail."\n";
        $body .= "お問い合わせ内容:  \n".$textbox."\n\n\n";
        $body .= "───────────────────\n";
        $body .= "UNTIQUE\n\n";
        $body .= "Mail:  tegami@untique.grats.jp\n";
        $body .= "URL:  https://untique.grats.jp/\n";
        $body .= "───────────────────\n";

         //メールの送り先,メールの送り元,メールタイトル
        $flg = bSENDMAIL3($mail,"tegami@untique.grats.jp","【UNTIQUE】お問い合わせありがとうございます",$body);
        $flg = bSENDMAIL3("tegami@untique.grats.jp","tegami@untique.grats.jp","【UNTIQUE】お問い合わせありがとうございます",$body);

        if($flg == true) {
            $message = "お問い合わせ内容の送信が完了しました。<br>確認メールをお送りしています。<br>お問い合わせありがとうございました。";
        } else {
            $message = "お問い合わせ内用の送信に失敗しました。<br>大変お手数ですが、もう一度やり直して下さい。";
        }
    }

    function bSENDMAIL3($to,$from,$sub,$body) {
        mb_language("uni");
        mb_internal_encoding("utf-8");
        $Head="";
        $Head.="From: ".$from."\n";
        $Head.="Mime-Version: 1.0\n";
        $Head.="Reply-To: ".$from."\n";
        $Head.="X-Mailer: PHP/" .phpversion();
        $flg = mb_send_mail($to, $sub, $body, $Head);
        return $flg;
    }
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
        <p class="sendmsg">
            <?=$message?>
        </p>
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