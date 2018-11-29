$(function(){
	var btn = $('.scroll_to_top');
	var move = false;
	function scrollToTop(){
		var top = $(this).scrollTop();
		if($(this).scrollTop() > 100){
			btn.addClass('vis');
		}else{
			btn.removeClass('vis');
		}
	}
	scrollToTop();
	$(window).on('scroll', scrollToTop);
	btn.on('click', function(){
		if(move){
			return;
		}
		move = true;
		$('body, html').animate({
			scrollTop: 0
		}, 700, function(){
			move = false;
		});
	});
});