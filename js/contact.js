function check_contactform() {
	var name = $('input[name="name"]').val();
	var mail = $('input[name="mail"]').val();
	var textbox = $('textarea[name="textbox"]').val();
	var errmsg = "";
	if(name == "") {
		errmsg = "※お名前をご確認ください<br>";
	}
	if(mail == "" || !mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
		errmsg = errmsg + "※メールアドレスをご確認ください<br>";
	}
	if(textbox == "") {
		errmsg = errmsg + "※お問い合わせ内容をご確認ください<br>";
	}
	if(errmsg != "") {
        $('.form-container p').replaceWith('<p class="errmsg">' + errmsg + '</p>');
		return false;
	}
	$('form[name="form"]').submit();
}