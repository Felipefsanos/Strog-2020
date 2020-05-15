// JavaScript Document

var validator;

var container_error;
var container_fail;
var container_success;

var delay_contato;



function close_container_form(){
	container_fail.css({'display': 'none'});
	container_success.css({'display': 'none'});
	
	clearInterval(delay_contato); 
}




$().ready(function(){
	
	function disabledItens(value){
		if(value==true){	
			$("#send").prop('disabled', true);	
			$("#send").css({'background': '#e0e0e0'});			
			$("#loader").css({'display': 'block'});	
		}else{
			$("#send").prop('disabled', false);
			$("#send").css({'background': '#770206'});			
			$("#loader").css({'display': 'none'});
		}		
	}
	
	jQuery.validator.addMethod("notEqual", function(value, element, param) {
	  	return this.optional(element) || value != param;
	}, "Please specify a different (non-default) value");
	
	
	container_error = $('#section-contato #content #left #error');
	container_fail = $('#section-contato #content #left #fail');
	container_success = $('#section-contato #content #left #success');
		
	validator = $('#form_contato').validate({
		rules:{
			f_assunto: 	{ required: true },
			f_nome:		{ notEqual: "nome" },
			f_email:	{ email: true, notEqual: "e-mail" },
			f_telefone:	{ notEqual: "telefone" },
			f_mensagem:	{ notEqual: "mensagem" }
		},
		messages:{
			f_assunto: { required: "Selecione um assunto." },
			f_nome:{ notEqual: "Digite o seu nome."},
			f_email: { notEqual: "Digite o seu email.", email: "Digite um email válido." },
			f_telefone: { notEqual: "Digite o seu telefone." },
			f_mensagem:{ notEqual: "Digite a mensagem." }
		},
		showErrors: function(errorMap, errorList) {
			moveSection("contato", 1);	
			
			container_fail.css({'display': 'none'});
			container_success.css({'display': 'none'});
			
			this.defaultShowErrors();
			//alert('not valid!')
		},		
		errorContainer: container_error,
		errorLabelContainer: $("ul", container_error),
		submitHandler: function(form){
			disabledItens(true);
			
			$('#section-contato #content #left #fail #code').html();
						
			var dados = $(form).serialize(); 
			$.ajax({
				type: "POST",
				url: "http://www.strog.com.br/2016/lib/functions/formMailSMTP.php",
				data: dados,
				success: function(data){
					moveSection("contato", 1);
					
					validator.resetForm();
					$('#form_contato').validate().resetForm();
					
					$("#form_contato").each(function(){
					   this.reset(); //Cada volta no laço o form atual será resetado
					});
					
					
					container_error.css({'display': 'none'});
					container_fail.css({'display': 'none'});
					container_success.css({'display': 'none'});
					
					if(data==0 || data=="0"){
						//$("#f_assunto").val("");
						//$("#f_nome").val("nome");
						//$("#f_email").val("e-mail");
						//$("#f_telefone").val("telefone");
						//$("#f_mensagem").val("mensagem");
						
						container_success.css({'display': 'block'});
						
												
					}else{
						$('#section-contato #content #left #fail #code').html("data="+data);
						container_fail.css({'display': 'block'});
					}
					
					delay_contato = setInterval(close_container_form, 5000);
					
					disabledItens(false);
				}
			}); 
			return false;
		}
	});
	
	
	disabledItens(false);
});
