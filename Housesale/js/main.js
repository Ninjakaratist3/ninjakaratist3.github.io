$( document ).ready(function() {
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}

	$('a').click(function(e) {
		e.preventDefault();
	});

	$(".header__burger").click(function() {
   		$(".header__burger, .header-menu").toggleClass("active");
   		$("body").toggleClass("lock");
   	});

   	$(window).scroll(function() {
		var headerTop = $(".header__top").offset().top;
	    var top = $(document).scrollTop();
	    if (top < headerTop || top == 0)
	    {
	    	$(".header__top").removeClass('sticky');
	    }
		else {
			$(".header__top").addClass('sticky');
		}
	});

   	$('.gallery__body').magnificPopup({
   		delegate: '.gallery__body-item a',
	  	type:'image',
	  	gallery:{enabled:true}
	});

	ibg();
});