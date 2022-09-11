$(document).ready(function () {

	$('.header__lang-title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.header__country-title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.burger').click(function (event) {
		$('.burger, body, .nav').toggleClass('active');
	});

	$('.exlog__title').click(function (event) {
		if ($('.exlog__exps, .exlog__logs').hasClass('one')) {
			$('.exlog__title').not($(this)).removeClass('active');
			$('.exlog__content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});

});

const tabBtns = document.querySelectorAll('.exlog__tabs-btn');
const tabItems = document.querySelectorAll('.exlog__tabs-item');

tabBtns.forEach(item => {

	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-id');
		let currentTab = document.querySelector(tabId);

		tabBtns.forEach(item => item.classList.remove('active'));
		tabItems.forEach(item => item.classList.remove('active'));

		currentBtn.classList.add('active');
		currentTab.classList.add('active');

	})
}
)