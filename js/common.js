$(document).ready(function() {

	 
		$('.slider').slick({
		// prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left fa-2x " aria-hidden="true"></button>',
  //       nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right fa-2x " aria-hidden="true"></i></button>',
                
		arrows:true,
		dots: false,
		autoplay: true,
		infinite: true,
		speed: 500,
		fade: false,
		cssEase: 'linear'
		});


		$('.navbtn').click(function() {
		$('.modal_container').fadeIn(500)			
		});
		$('.closeModal').click(
		function() { 
			$('.modal_container').fadeOut(500)		 
		}); 
	

	







	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	

})();





