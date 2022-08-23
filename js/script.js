$(document).ready(function () {

	$('.burger').click(function (event) {
		$('.burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.exlog__title').click(function (event) {
		if ($('.exlog__exps, .exlog__logs').hasClass('one')) {
			$('.exlog__title').not($(this)).removeClass('active');
			$('.exlog__content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});

});