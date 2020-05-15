// JavaScript Document

var entrega_select = 0;

var list_entrega = [
						[ //############## SION 	
							["Zona Sul / Floresta","strog_loja_sion.jpg","31","3227 7999","Rua Montes Claros, 288, Carmo-Sion","Belo Horizonte, MG","30310-160"],
							[ 	
								["ANCHIETA","R$ 8,90"],
								["BARRO PRETO","R$ 7,90"],
								["BARROCA*","R$ 8,90"],
								["BELVEDERE","R$ 8,90"],
								["BURITIS*","R$ 9,90"],
								["CALAFATE","R$ 7,90"],
								["CARMO SION","R$ 8,90"],
								["CENTRO","R$ 8,90"],
								["CIDADE JARDIM","R$ 8,90"],
								["CIDADE NOVA*","R$ 9,90"],
								["COLÉGIO BATISTA","R$ 8,90"],
								["CONCÓRDIA*","R$ 9,90"],
								["CORAÇÃO DE JESUS","R$ 8,90"],
								["CRUZEIRO","R$ 8,90"],
								["ESPLANADA*","R$ 8,90"],
								["ESTORIL*","R$ 9,90"],
								["ESTRELA DALVA*","R$ 9,90"],
								["FLORESTA","R$ 8,90"],
								["FUNCIONÁRIOS","R$ 8,90"],
								["GRAÇA*","R$ 9,90"],
								["GRAJAÚ*","R$ 8,90"],
								["GUTIERREZ","R$ 7,90"],
								["HORTO","R$ 9,90"],
								["JARDIM AMÉRICA*","R$ 9,90"],
								["LAGOINHA","R$ 8,90"],
								["LOURDES","R$ 8,90"],
								["LUXEMBURGO","R$ 8,90"],
								["MANGABERIAS","R$ 8,90"],
								["NOVA FLORESTA*","R$ 8,90"],
								["NOVA SUÍSSA","R$ 9,90"],
								["PRADO","R$ 8,90"],
								["RENASCENÇA*","R$ 9,90"],
								["SAGRADA FAMÍLIA","R$ 8,90"],
								["SANTA EFIGÊNIA","R$ 8,90"],
								["SANTA LÚCIA","R$ 8,90"],
								["SANTA TEREZA","R$ 8,90"],
								["SANTO AGOSTINHO","R$ 8,90"],
								["SANTO ANTÔNIO","R$ 7,90"],
								["SÃO BENTO","R$ 8,90"],
								["SÃO LUCAS","R$ 8,90"],
								["SÃO PEDRO","R$ 8,90"],
								["SERRA","R$ 8,90"],
								["SILVEIRA*","R$ 9,90"],
								["SION","R$ 8,90"],
								["UNIÃO","R$ 13,90"],
								["VALE DO SERENO","R$ 9,90"],
								["VILA DA SERRA","R$ 9,90"],
								["VILA PARIS","R$ 8,90"]
							]
						],//############## SION FIM
						[ //############## CAIÇARA 	
							["Caiçara / Pampulha","strog_loja_caicara.jpg","31","3464 3030","Rua Conselheiro Luiz Barbosa, 25, Caiçara","Belo Horizonte, MG","30770-590"],
							[ 	
								["Aeroporto","R$9,90"],
								["Alípio de Melo","R$12,90"],
								["Alto Caiçara","R$7,90"],
								["Anchieta","R$7,90"],
								["Angares","R$9,90"],
								["Aparecida","R$7,90"],
								["Bandeirantes","R$12,90"],
								["Bom Jesus","R$8,90"],
								["Bonfim","R$8,90"],
								["Cachoeirinha","R$9,90"],
								["Caiçara","R$7,90"],
								["Carlos Prates","R$8,90"],
								["Carmo","R$7,90"],
								["Castelo","R$9,90"],
								["Coração Eucarístico","R$11,90"],
								["Cruzeiro","RS7,90"],
								["Dom Cabral","R$8,90"],
								["Don Bosco","R$8,90"],
								["Dona Clara","R$9,90"],
								["Engenho Nogueira","R$9,90"],
								["Ermelinda","R$8,90"],
								["Estoril","R$8,90"],
								["Glória","R$9,90"],
								["Ipanema","R$9,90"],
								["Ipiranga","R$12,90"],
								["Itapoã","R$14,90"],
								["Jaraguá","R$13,90"],
								["Jardim Alvorada","R$8,90"],
								["Jardim Montanhês","R$7,90"],
								["João Pinheiro","R$9,90"],
								["Lagoinha","R$8,90"],
								["Liberdade","R$13,90"],
								["Manacás","R$9,90"],
								["Minas Brasil","R$8,90"],
								["Monsenhor Messias","R$7,90"],
								["Nova Cachoeirinha","R$8,90"],
								["Nova Esperança","R$7,90"],
								["Ouro Preto","R$9,90"],
								["Padre Eustáquio","R$8,90"],
								["Palmares","R$9,90"],
								["Pampulha","R$9,90"],
								["Paquetá","R$11,90"],
								["Parque Riachuelo","R$7,90"],
								["Pedro II","R$7,90"],
								["Santa Amélia","R$14,90"],
								["Santa Branca","R$14,90"],
								["Santa Cruz","R$8,90"],
								["Santa Rosa","R$9,90"],
								["Santa Terezinha","R$12,90"],
								["Santo André","R$6,90"],
								["São Francisco","R$13,90"],
								["São José","R$12,90"],
								["São Luiz","R$12,90"],
								["Serrano","R$9,90"],
								["Sion","R$7,90"]
							]
						]//############## CAIÇARA FIM
						/*[ //############## FLORESTA 	
							["Floresta","strog_loja_floresta2.jpg","31","3442 4020","Agora atendido pela unidade Zona Sul","",""],
							[ 	
								["BARRO PRETO","R$ 7,90"],
								["CALAFATE","R$ 7,90"],
								["CENTRO","R$ 7,90"],
								["CIDADE NOVA*","R$ 8,90"],
								["COLÉGIO BATISTA","R$ 7,90"],
								["CONCÓRDIA*","R$ 8,90"],
								["ESPLANADA*","R$ 8,90"],
								["FLORESTA","R$ 7,90"],
								["GRAÇA*","R$ 8,90"],
								["HORTO","R$ 7,90"],
								["NOVA FLORESTA*","R$ 8,90"],
								["RENASCENÇA*","R$ 9,90"],
								["SAGRADA FAMÍLIA","R$ 7,90"],
								["SANTA EFIGÊNIA","R$ 7,90"],
								["SANTA TEREZA","R$ 7,90"],
								["SÃO LUCAS","R$ 7,90"],
								["SILVEIRA*","R$ 8,90"]		
							]
						]//############## FLORESTA FIM*/
					];
					

function createFilialTitle(title, img, ddd, tel, address, city, cep){	
	var obj = '';
	//obj += '<img src="image/lojas/'+img+'" alt="Loja '+title+'" id="thumb">';
	obj += '<div id="thumb" style="background: url(image/lojas/'+img+') no-repeat center center #e0e0e0; background-size: cover;" />';
	
    obj += '<div id="title">'+title+'</div>';
    obj += '<div id="phone">'+ddd+' <span>'+tel+'</span></div>';
	obj += '<div id="address">'+address+'</div>';
	obj += '<div id="city">'+city+'</div>';
	obj += '<div id="cep">'+cep+'</div>';
	obj += '<div id="info">*Bairros não atendidos em horários de grande movimento.</div>';	
	
	return obj;		
}
function createFiliaisLine(title, price){		
	var obj = '';
	obj += '<tr>';
	obj += '	<td><div id="title">'+title+'</div></td>';
	obj += '	<td><div id="price">'+price+'</div></td>';
	obj += '</tr>';
	
	return obj;		
}
function createFiliaisLineDouble(title1, price1, title2, price2){		
	var obj = '';
	obj += '<tr>';
	obj += '	<td><div id="title">'+title1+'</div></td>';
	obj += '	<td><div id="price">'+price1+'</div></td>';
	obj += '	<td><div id="title">'+title2+'</div></td>';
	obj += '	<td><div id="price">'+price2+'</div></td>';
	obj += '</tr>';
	
	return obj;		
}
function createFiliais(lisOptions){	
	var obj = '';
	obj += '<table>';
	obj += '	<tr>';
   	obj += '		<td>Bairro</td>';
    obj += '		<td>Valor</td>';
    obj += '	</tr>';
	
	for(i=0;i<lisOptions.length;i++){
		var title1 = lisOptions[i][0];
		var price1 = lisOptions[i][1];
		
		obj += '	'+createFiliaisLine(title1,price1);
		//var title2 = "";
		//var price2 = "";
		
		//if(lisOptions.length>(i+1)){
			//title2 = lisOptions[i+1][0];
			//price2 = lisOptions[i+1][1];
		//}
		//obj += '	'+createFiliaisLineDouble(title1,price1,title2,price2);
		//i++;
	}
	obj += '</table>';
	
	return obj;		
}

function selectFilial(linkID){
	
	
	if(!linkID){
		linkID = "#!e=0";				
	}
	
	//alert(linkID);
	
		
	ID = linkID.split("#")[1];
	var e = ID.split("e=")[1].split("&")[0];
	
	$("#section-entrega #content #left #areas ul li a").each(function(n) {
		var rel_tmp = $(this).attr('href');
		ID_tmp = rel_tmp.split("#")[1];		
		var e_tmp = ID_tmp.split("e=")[1].split("&")[0];
		
		//alert(e_tmp+" = "+e);
		
		if(e_tmp == e){
			$(this).parent().addClass("selectMenu");
		}else{
			$(this).parent().removeClass("selectMenu");
		}		
	});
	
	//$(this).parent().addClass("selectMenu");

	$('#section-entrega #content #right #item #content-item #content-item-left').html(createFilialTitle(list_entrega[e][0][0],list_entrega[e][0][1],list_entrega[e][0][2],list_entrega[e][0][3],list_entrega[e][0][4],list_entrega[e][0][5],list_entrega[e][0][6]));
	$('#section-entrega #content #right #item #content-item #content-item-right #table-place').html(createFiliais(list_entrega[e][1]));
	
	
	
}

function createFilialMenuButton(title, index){	
	var obj = '';
	obj += '<li><a href="#!e='+index+'" title="Ver área de atendimento"><img src="image/icons/lojas_icone.png" alt="'+title+'"><span>'+title+'</span></a></li>';
	
	return obj;		
}
function createFilialMenu(){	
	var obj = '';	
	for(i=0;i<list_entrega.length;i++){
		obj += '	'+createFilialMenuButton(list_entrega[i][0][0],i);
	}	
	
	$('#section-entrega #content #left #areas ul').html(obj);
	
	$('#section-entrega #content #left #areas ul li a').click(function(){
		var rel = $(this).attr('href');
		var linkID = "#"+ rel.split("#")[1];	
		
		//selectFilial(linkID);		
		//moveSection("entrega", 3);		
		
		onClick(linkID);
		
		//return false;
	});		
}


$(function() {
	
	//createFilialMenu();
	
	
	//selectFilial();
	//selectItem(1);		
})