<?php
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$telefone = $_POST['telefone'];
	$mensagem = $_POST['mensagem'];
	
	$para = "contato@repartinc.com.br";
	$assunto = "Contato pelo site";
	$msg = "
		<b>Nome:</b> $nome<br />
		<b>E-mail:</b> $email<br />
		<b>Telefone:</b> $telefone<br />
		<b>Mensagem:</b> $mensagem<br />
	";
	
	$header = "From: $email \r\n";
	$header .= "Content-Type: text/html; charset=utf-8 \r\n";
	
	mail($para,$assunto,$msg,$header);
?>