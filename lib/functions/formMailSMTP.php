<?php
	// E_ALL -> debugging
	// false -> public
	error_reporting(false);
	// 0 -> no time limit
	set_time_limit(0);

	
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
	$message .= '		<div style="font-size: 12px; font-family: arial;">';	
	$message .= '			<div style="width: 100%; background: #FFA314; overflow: hidden;">';		
	$message .= '				<div style="float: left;"><img src="http://strog.com.br/2013/image/icons/strog_delivery_logo.jpg" alt="Strog Delivery" style="width: 100px; height: 100px;"></div>';			
	$message .= '				<div style="float: left; margin: 40px 0px 0px 20px; font-weight: bold; font-size: 18px; color: #770206; text-transform: uppercase;">';
	$message .= '					<div>Contato via site</div>';
	$message .= '					<div style="color: #000; font-size: 14px;">Assunto: <span>'.$f_assunto.'</span></div>';	
	$message .= '				</div>';
	$message .= '				<div style="float: right; margin: 40px 20px 0px 0px; font-weight: bold; text-transform: uppercase;">';
	$message .= '					<a href="http://www.strog.com.br" title="Strog Delivery" style="color: #770206; text-decoration: none;">www.strogdelivery.com.br</a>';
	$message .= '				</div>';		
	$message .= '			</div>';			
	$message .= '			<div style="background: #FCD07F; color: #770206; text-align: center; padding: 10px; text-transform: uppercase; font-weight: bold;"><div>Obrigado!</div><div>Em breve iremos responder seu contato!</div></div>';
	$message .= '			<div style="padding: 0px 20px 20px 20px; background: #FCD07F; text-transform: uppercase; color:#770206;">';
	$message .= '				<div style="margin: 0px 0px 10px 0px; padding: 20px; background: #fff;">	';		
	$message .= '					<div>Nome: <span style="font-weight: bold;">'.$f_nome.'</span></div>';
	$message .= '					<div>Email: <span style="font-weight: bold;">'.$f_email.'</span></div>';
	$message .= '					<div>Telefone: <span style="font-weight: bold;">'.$f_telefone.'</span></div>';
	$message .= '				</div>';	
	$message .= '				<div style="padding: 20px; background: #fff;">';
	$message .= '					<div>Mensagem:</div>';
	$message .= '					<div style="font-weight: bold;">'.$f_mensagem.'</div>';
	$message .= '				</div>';
	$message .= '			</div>';
	$message .= '			<div style="background: #FFA314; text-align: center; padding: 10px; text-transform: uppercase; font-weight: bold;"><a href="http://www.strog.com.br" title="Strog Delivery" style="color: #770206; text-decoration: none;">Strog Delivery - www.strogdelivery.com.br</a></div>';
	$message .= '		</div>';
	$message .= '	</body>';
	$message .= '</html>';	
	
	
	
	$usuario = 'contato@strog.com.br';
	$senha = 'strog200';
	$to = 'contato@strog.com.br';
	$toName = 'Contato Strog Delivery';
	$smtp = 'smtp.bhz.terra.com.br';
	
	$subject = $title.' :: '.$subtitle.' :: '.$f_assunto;
		
	require_once("phpmailer/class.phpmailer.php");
	define('GUSER', $usuario);	// <-- Insira aqui o seu GMail
	define('GPWD', $senha);		// <-- Insira aqui a senha do seu GMail
	
	global $error;
	$mail = new PHPMailer();
	$mail->IsSMTP();		// Ativar SMTP
	$mail->SMTPDebug = 0;		// Debugar: 1 = erros e mensagens, 2 = mensagens apenas
	$mail->SMTPAuth = true;		// Autenticação ativada
	$mail->SMTPSecure = '';	// SSL REQUERIDO pelo GMail
	$mail->Host = $smtp;	// SMTP utilizado
	$mail->Port = 587;  		// A porta 465 deverá estar aberta em seu servidor
	$mail->Username = GUSER;
	$mail->Password = GPWD;
	$mail->SetFrom($to, $toName);
	$mail->AddCC($to, $toName);
	$mail->Subject = $subject;
	$mail->IsHTML(true);
	$mail->Body = $message;
	$mail->CharSet = 'UTF-8';
	$mail->ContentType = 'text/html';
	$mail->Encoding = '8bit';
	$mail->AddAddress($f_email,$f_nome);
	if($mail->Send()) {
		//$error = 'Mensagem enviada!';
		echo 0;
	} else {
		$error = 'Mail error: '.$mail->ErrorInfo; 
		echo $error;		
	}
	
?>