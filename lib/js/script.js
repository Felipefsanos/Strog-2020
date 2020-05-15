// JavaScript Document
var sectionSelect = null;
var timeAnimate = 500;

var delay;
var delay_section = "";
var delay_ajust = 1;

var URL_SIST_VENDA = "https://deliverydireto.com.br/strog/mg";

var sendAnalytics = function(){
	ga('set', 'page', location.pathname + location.search  + location.hash);
	ga('send', 'pageview');
	
	//_gaq.push(['_trackPageview',location.pathname + location.search  + location.hash]);	
}
var sendAnalytics_pedidosOnline = function(tagName){
	ga('set', 'page', location.pathname + "#type=PEDIDO&url=" + tagName);
	ga('send', 'pageview');
	
	//_gaq.push(['_trackPageview',location.pathname + "#type=PEDIDO&url=" + tagName]);	
}

var createSocialLink = function(url, title, img, info){
	var url_base = 'http://www.strog.com.br/2016/';//'http://www.strog.com.br/';
	var obj = '';
	
	
	/*
	obj += 'https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&redirect_uri='+encodeURIComponent(url_base+url); 
 	obj += '&link='+encodeURIComponent(url_base+url);
  	obj += '&picture='+encodeURIComponent(url_base+img);
	obj += '&description='+encodeURIComponent(info);
	obj += '&name='+encodeURIComponent(title);
	obj = "window.location='"+obj+"';return false;"
	*/
	
	obj += 'https://www.facebook.com/sharer/sharer.php?s=100';
	obj += '&p[url]='+encodeURIComponent(url_base+url);
	obj += '&p[images][0]='+encodeURIComponent(url_base+img);
	//obj += '&p[images][0]='+url_base+img;
	obj += '&p[title]='+encodeURIComponent(title);
	obj += '&p[summary]='+encodeURIComponent(info);
	
	//obj += 'https://www.facebook.com/sharer/sharer.php?u=?';
	//obj += 'u='+encodeURIComponent(url_base+url);
	
	obj = "window.open('"+obj+"','Compartilhar','width=626,height=436');return false;"
	
	
	return obj;
}


var moveSectionDelayCall = function(){
	
	moveSection(delay_section, delay_ajust);	
	clearInterval(delay); 
}
	
var moveSectionDelay = function(section, ajust){
	delay_section = section;
	delay_ajust = ajust;
	delay = setInterval(moveSectionDelayCall, 1000);
}

var moveSection = function(section, ajust){	
	section = section || "banner";
	
	ajust = ajust || 1;
	timeAnimate = 500;
	if(ajust==2){
		sectionSelect = section;
		timeAnimate = 0;
	}else if(ajust==3){
		sectionSelect = null;
		timeAnimate = 0;
	}else{
		sectionSelect = null;								
	}
	
		
	var cut = $('#section').css('margin-top');
		cut = cut.replace("px", "");		
	
	var movement = 0;
	if($("#section-"+section).offset()){
		if(section=="banner" || section=="strog"){
			movement = $("#section-"+section).offset().top - (2 . cut);
		}else{
			movement = $("#section-"+section).offset().top - cut;
		}				
	}
	
	if(movement != 0){
		if($('html,body').scrollTop()!=movement){
			//alert($("#section-"+section).offset().top);	
			$('html,body').animate(
				{scrollTop: movement},{
					duration: timeAnimate,
					specialEasing:{ marginLeft:'easeOutExpo' },
					complete: function(){
						if(sectionSelect != null){
							moveSection(sectionSelect,1);
						}
					}
				}
			);			
		}
	}
	
				
}

var onClick = function(linkID){
	sendAnalytics();
	
	
	var linkID = "#" + linkID.split("#")[1];
	ID = linkID.split("#")[1];
	
	//var f = ID.split("f")[1].split("=")[1].split("&")[0];
	var i = "";
	var c = "";
	var e = "";
	var s = "";
	
	try{
		i = ID.split("i=")[1].split("&")[0];
	}catch(error){}
	try{
		c = ID.split("c=")[1].split("&")[0];
	}catch(error){}
	try{
		e = ID.split("e=")[1].split("&")[0];
	}catch(error){}
	try{
		s = ID.split("s=")[1].split("&")[0];
	}catch(error){}		
	try{	
		if(e.length>0){			
			selectFilial(linkID);		
			moveSection("entrega", 2);	
			return;
		}
	}catch(error){}
	
	
	try{
		
		if(c.length>0){									
			if(i.length>0){					
				selectCardapioItem(linkID);
			}else{
				selectCardapioCategory(linkID);
			}			
			moveSection("cardapio", 2);
			return;	
		}
	}catch(error){}
	
	
	
	try{
		if(s.length>0){	
			s = ID.split("s=")[1].split("&")[0];	
									
			moveSection(s, 2);	
			return;	
		}
	}catch(error){}
}

$(function() {
	
	
	$('html, body').scrollTop(0);
	
	$('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
		try{
			if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
				 $viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup'); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
			}
		}catch(error){}
	}); 
	
	$("#header #menu #mobile").click(function(){
		if($('#header #menu #nav-inst').css('display') == 'none'){ 
		   $('#header #menu #nav-inst').css({"display":"block"});
		   $('#header #menu #nav').css({"display":"block"}); 
		} else { 
		   $('#header #menu #nav-inst').css({"display":"none"});
		   $('#header #menu #nav').css({"display":"none"});
		}
	});
	
	
	$("#nav ul li a, #nav-inst ul li a, #logo a").click(function(){
		//var rel = $(this).attr('href');		
		//var page = rel.split("#")[0];
		//var section = rel.split("#")[1].split("s=")[1];
		
		//alert(window.location);		
		//moveSection(section,1);			
		//window.location.hash = "#s="+s;	
		
		if($('#header #menu #mobile').css('display') != 'none'){ 
		   $('#header #menu #nav-inst').css({"display":"none"});
		   $('#header #menu #nav').css({"display":"none"}); 
		}		
		
		var rel = $(this).attr('href');
		var linkID = "#"+ rel.split("#")[1];
		
		onClick(linkID);
		
		//return false;
	});	
	
	
	$("#StrogLoja_ZonaSul, #StrogLoja_Floresta").click(function(){
		var urlPedido = 'http://www.pedidosja.com.br/restaurantes/belo-horizonte/strog-delivery-zona-sul-menu';
		sendAnalytics_pedidosOnline(urlPedido);		
		window.open(urlPedido, '_blank');		
	});	
	$("#StrogLoja_Caicara").click(function(){
		var urlPedido = 'http://www.pedidosja.com.br/restaurantes/belo-horizonte/strog-delivery-menu';
		sendAnalytics_pedidosOnline(urlPedido);		
		window.open(urlPedido, '_blank');		
	});	
	
	
	
	try{
		createFilialMenu();
		selectCardapioCategory();
		selectFilial();
	}catch(error){}
	
	var hash = window.location.hash;
	if(hash){
		onClick(hash);
	}
});

$(function () {
	$('.pedidoonline_popup_bt, .pedidoonline_bt').click(function(e){
		e.preventDefault()
		window.open(URL_SIST_VENDA, '_blank');		
	});
	//focus: '#username',
	//,modal: true
});

    


var $borwserList = {i:7,f:15,s:4,n:9};
var $buoop = {vs:$borwserList, newwindow: true, l: "pt-BR"};
$buoop.ol = window.onload; 
window.onload=function(){ 
	 try {if ($buoop.ol) $buoop.ol();}catch (e) {} 
	 var e = document.createElement("script"); 
	 e.setAttribute("type", "text/javascript"); 
	 e.setAttribute("src", "http://browser-update.org/update.js"); 
	 document.body.appendChild(e); 
} 