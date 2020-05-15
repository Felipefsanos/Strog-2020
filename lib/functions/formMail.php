<?php
	
	$f_assunto 		= trim(strip_tags($_POST['f_assunto']));
	$f_nome 		= trim(strip_tags($_POST['f_nome']));
	$f_email 		= trim(strip_tags($_POST['f_email']));
	$f_telefone 	= trim(strip_tags($_POST['f_telefone']));
	$f_mensagem 	= trim(strip_tags($_POST['f_mensagem']));
	
	$title = "Strog Delivery";
	$subtitle = "Contato via site";
	
	$pattern = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i"; 
	
	if($f_assunto==""){
		echo "2";
		return; 
	}
	if($f_nome==""){
		echo "3";
		return; 
	}	
	if (preg_match($pattern, $f_email)) { 
		$f_email = $f_email;
	} else { 
		echo "4";
		return; 
	}
	if($f_telefone==""){
		echo "5";
		return; 
	}
	if($f_mensagem==""){
		echo "6";
		return; 
	}
	
	$message = '';
	$message .= '<html>';
	$message .= '	<body>';
	$message .= '		</ hr>';
	$message .= '		<div>';
	$message .= '			<div>'.$title.'</div>';
	$message .= '			<div>'.$subtitle.'</div>';
	$message .= '		</div>';
	$message .= '		</ hr>';
	$message .= '		<div>Assunto: <span>'.$f_assunto.'</span></div>';
	$message .= '		</ hr>';
	$message .= '		<div>';
	$message .= '			<div>Nome: <span>'.$f_nome.'</span></div>';
	$message .= '			<div>Email: <span>'.$f_email.'</span></div>';
	$message .= '			<div>Telefone: <span>'.$f_telefone.'</span></div>';
	$message .= '			<div>Mensagem: <span>'.$f_mensagem.'</span></div>';	
	$message .= '		</div>';
	$message .= '		</ hr>';
	$message .= '		<div>Obrigado! Em breve iremos responder seu contato!</div>';
	$message .= '		</ hr>';
	$message .= '	</body>';
	$message .= '</html>';
	
	$to = 'contato@strog.com.br';
			
	$subject = $title.' :: '.$subtitle.' :: '.$f_assunto;
	
	$headers = "From: " . $to . "\r\n";
	$headers .= "Reply-To: " . $to . "\r\n";
	$headers .= "Cc: " . $to . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	if (mail($f_email, $subject, $message, $headers)) {
		echo 0;//'Your message has been sent.';
		return;
	} else {
		echo 1;//'There was a problem sending the email.';
		return;
	}
?>