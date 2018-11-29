$(function(){
	menuLink = $('.menu_link');
	menuLink.on('click', function(e){
		e.preventDefault();
		menuLink.removeClass('menu_link_active').filter(this).addClass('menu_link_active');
		var selector = $(this).attr('href');
		var h = $(selector); 
		$('html, body').animate({
			scrollTop: h.offset().top - 180
		}, 400);
	});
	function link_active(){
		var top = $(this).scrollTop();
		if(top < 390){
			menuLink.removeClass('menu_link_active');
			menuLink.eq(0).addClass('menu_link_active');
		}else if(top > 390 && top < 1180){
			menuLink.removeClass('menu_link_active');
			menuLink.eq(1).addClass('menu_link_active');
		}else if(top > 1180 && top < 2000){
			menuLink.removeClass('menu_link_active');
			menuLink.eq(2).addClass('menu_link_active');	
		}else if(top > 2000 && top < 2850){
			menuLink.removeClass('menu_link_active');
			menuLink.eq(3).addClass('menu_link_active');	
		}else if(top > 2850 && top < 4210){
			menuLink.removeClass('menu_link_active');
			menuLink.eq(4).addClass('menu_link_active');	
		}else if(top > 4210 && top < 4650){
			menuLink.removeClass('menu_link_active');
			menuLink.eq(5).addClass('menu_link_active');	
		}else{
			menuLink.removeClass('menu_link_active');
			menuLink.eq(6).addClass('menu_link_active');	
		}
	}
	link_active();
	$(document).on("scroll", link_active);
});