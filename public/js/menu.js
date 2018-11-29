$(function(){
	var item = $('.menu_item');
	menuToggle = $('.menu_toggle');
	menuMain = $('.menu_main');
	menuToggle.on('click', function(){
		if(menuMain.hasClass('main_menu_b')){
			menuMain.animate({
				'opacity' : 0
			},300, function(){
				$(this).removeClass('main_menu_b').removeAttr('style');
			});
		}else{
			menuMain.css({
				'display' : 'block'
			}).animate({
				'opacity' : 1
			}, 300, function(){
				$(this).addClass('main_menu_b').removeAttr('style');
			});
		}
	});
	for(var i = 0; i < item.length; i++){
		item.eq(i).on('click', function(){
			if(menuMain.hasClass('main_menu_b')){
				menuMain.animate({
					opacity : 0
				}, 300, function(){
					$(this).removeClass('main_menu_b').removeAttr('style');
				});
			}
		});
	}
});