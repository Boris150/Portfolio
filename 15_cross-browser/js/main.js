const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 70,
	centeredSlides: true,
	// autoplay: {
	// 	delay: 2500,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	ally: {
		paginationBulletMesage: 'Перейти к слайду {{index}}',
	},
});

document.querySelectorAll('.work__item').forEach(function (tabsBtn) {
	tabsBtn.addEventListener('click', function (e) {
		const path = e.currentTarget.dataset.path;
		document.querySelectorAll('.work__item').forEach(function (btn) {
			btn.classList.remove('work__item-active')
		});
		e.currentTarget.classList.add('work__item-active');
		document.querySelectorAll('.work__info').forEach(function (tabsBtn) {
			tabsBtn.classList.remove('work__info-active')
		});
		document.querySelector(`[data-target="${path}"]`).classList.add('work__info-active');
	});
});

new Accordion('.accordion');


let burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link')

burger.addEventListener('click', function () {
	menu.classList.toggle('header__nav--active');
	document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {
	el.addEventListener('click', function () {
		menu.classList.remove('header__nav--active');
		document.body.classList.remove('stop-scroll')
	})
})

document.querySelector(".header__nav-close").addEventListener("click", function () {
	document.querySelector(".header__nav").classList.remove("header__nav--active");
})

let search = document.querySelector('.header__search-btn');
let header__search = document.querySelector('.header__search');
let closed = document.querySelector('.search-close')

search.addEventListener('click', function () {
	header__search.classList.add('header__search--active');
});

closed.addEventListener('click', function () {
	header__search.classList.remove('header__search--active');
});
