$(document).ready(function () {

	$('.header__lang-title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
	
	$('.header__country-title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.exlog__title').click(function (event) {
		if ($('.exlog__exps, .exlog__logs').hasClass('one')) {
			$('.exlog__title').not($(this)).removeClass('active');
			$('.exlog__content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});

});