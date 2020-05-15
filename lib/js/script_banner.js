// JavaScript Document
$(function() {

	//banner-slider
	$("#banner-slider").responsiveSlides({
		auto: true,
		pager: true,
		speed: 300
	});
	
	$("#section-banner #banner ul li a, #section-banner #boxes ul li a").click(function(){
		var rel = $(this).attr('href');		
		onClick(rel);
	});
	
});