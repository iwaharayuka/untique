function check_contactform() {
	var name = $('input[name="name"]').val();
	var mail = $('input[name="mail"]').val();
	var textbox = $('textarea[name="textbox"]').val();
	var errmsg = "";
	if(name == "") {
		errmsg = "※お名前が未入力です<br>";
	}
	if(mail == "") {
		errmsg = errmsg + "※メールアドレスが未入力です<br>";
	}
	if(!mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
		errmsg = errmsg + "※メールアドレスをご確認下さい<br>";
	}
	if(textbox == "") {
		errmsg = errmsg + "※お問い合わせ内容が未入力です<br>";
	}
	if(errmsg != "") {
        $('.form-container p').replaceWith('<p class="errmsg">' + errmsg + '</p>');
		// alert(errmsg);
		return false;
	}
	$('form[name="form"]').submit();
}