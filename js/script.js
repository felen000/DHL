// Header

document.querySelector('.header__lang').addEventListener('click', (event) => {
	toggleAcitveClass('.header__lang')
})

document.querySelector('.header__country').addEventListener('click', (event) => {
	toggleAcitveClass('.header__country')
})

// Burger 

document.querySelector('.burger').addEventListener('click', () => {
	toggleAcitveClass('.burger')
	toggleAcitveClass('body')
	toggleAcitveClass('.nav')
})

function toggleAcitveClass(selector) {
	document.querySelector(selector).classList.toggle('active')
}

// Exlog Tabs 

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

// Exlog Accordion

document.querySelectorAll('.exlog__trigger').forEach(trigger => {
	trigger.addEventListener('click', () => {
		const parent = trigger.parentElement;

		if (parent.classList.contains('active')) {
			parent.classList.remove('active')
		} else {
			document.querySelectorAll('.exlog__item').forEach(item => item.classList.remove('active'))
			parent.classList.add('active')
		}
	})
})