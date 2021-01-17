$( document ).ready(function() {
	$('a').click(function(e) {
		e.preventDefault();
	});

	$(".header__burger").click(function() {
   		$(".header__burger, .header__menu").toggleClass("active");
   		$("body").toggleClass("lock");
   	});

	const headerTop = $(".header").offset().top;
	$(window).scroll(function() {
	    var top = $(document).scrollTop();
	    if (top < headerTop || top == 0)
	    {
	    	$(".header").removeClass('sticky');
	    }
		else {
			$(".header").addClass('sticky');
		}
	});

	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}

	ibg();
});