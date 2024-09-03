document.addEventListener('DOMContentLoaded', function () {
	let burger = document.querySelector('.header__burger');
	let menu = document.querySelector('.header__nav');
	let menuClose = document.querySelector('.header__nav-close');
	let menuLinks = document.querySelectorAll('.header__link');

	burger.addEventListener('click', function () {
		menu.classList.toggle('header__nav--active');
		document.body.classList.toggle('stop-scroll');
	});

	menuLinks.forEach(function (el) {
		el.addEventListener('click', function () {
			document.body.classList.remove('stop-scroll');
			menu.classList.remove('header__nav--active');
		});
		menuClose.addEventListener('click', function () {
			menu.classList.remove('header__nav--active');
			document.body.classList.remove('stop-scroll');
		})
	})

});
