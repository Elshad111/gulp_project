$(function(){
	var item = $('.portfolio_item');
	for(var i = 0; i < item.length; i++){
		item.eq(i).on('mouseenter', function(event){
			$(this).find('.portfolio_item_text').stop(true,true);
			$(this).find('.portfolio_item_text').css({
				'display' : 'block'
			}).animate({
				'opacity' : 1
			}, 300, function(){
				$(this).addClass('text_show').removeAttr('style');
			});
		}).on('mouseleave', function(event){
			$(this).find('.portfolio_item_text').stop(true, true);
			$(this).find('.portfolio_item_text').animate({
				'opacity' : 0
			}, 300, function(){
				$(this).removeClass('text_show').removeAttr('style');
			});
		});
	}
});