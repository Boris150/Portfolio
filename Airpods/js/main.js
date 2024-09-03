const choseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content-item');


choseColor.forEach(function (element) {
	element.addEventListener('click', open) // пробигаем циклом по всем элементов и смотрим где тыкнули и где тыкнули выполняем open
})

function open(evt) { // пишем что делает наша функция open

	const target = evt.currentTarget; //берем элемент на который тыкнули и пихаем его в target
	const button = target.dataset.button; // дата атрибут и его содержимое
	const contentActive = document.querySelectorAll(`.${button}`);

	choseColor.forEach(function (item) {
		item.classList.remove('choose__color-btn--active') // удаляем класс у всех элементов
	})

	target.classList.add('choose__color-btn--active') // добавляет класс к элементу на который тыкнули

	contentItem.forEach(function (item) {
		item.classList.remove('content-item__active')
	});

	contentActive.forEach(function (item) {
		item.classList.add('content-item__active')
	})

}