var typed = new Typed ("#eu", {
    strings: ["Nayara,"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

$('.navegação a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});