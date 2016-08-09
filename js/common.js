$(document).ready(function() {

	 
		$('.slider').slick({
		// prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left fa-2x " aria-hidden="true"></button>',
  //       nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right fa-2x " aria-hidden="true"></i></button>',
                
		arrows:true,
		dots: false,
		autoplay: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
		});
	

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

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

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	
});



$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});



$(window).scrollTop(function() { 
	var st = $(this).scrollTop();
	
	$(".headertext").css({
		"transform" : "translate 0%, -" + st*50 + "%" 
	});
	
		// "transform" : "translate3d(0px, " + st /2 + "%, 0px)"

	});


(function() { 
	var os=$(".headertext").offset();
	alert("Top: " + x.top + " Left: " + x.left); 

	console.log()

})();





