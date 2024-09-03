const element = document.querySelector('#SelectCustom');
const choices = new Choices(element, {
	searchEnabled: false,
	placeholder: true,

});


ymaps.ready(init);
function init() {
	var myMap = new ymaps.Map("myMap1", {
		center: [48.87218507, 2.35422400],
		zoom: 14
	});

	var myGeoObject = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/location.svg',
		iconImageSize: [28, 40]
	});

	// Размещение геообъекта на карте.
	myMap.geoObjects.add(myGeoObject);
};

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

const validation = new JustValidate('.form', {
	errorLabelStyle: {
		color: '#FF5C00',
	}
});

validation.onSuccess(function () {
	document.getElementById("form").submit();
});

validation
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Как вас зовут?',
		},
		{
			rule: 'minLength',
			value: 3,
			errorMessage: 'Не короче 3 символов',
		},
		{
			rule: 'maxLength',
			value: 30,
			errorMessage: 'Слишком длинное имя',
		},
	])
	.addField('#email', [
		{
			rule: 'required',
			errorMessage: 'Укажите ваш e-mail',
		},
		{
			rule: 'email',
			errorMessage: 'Email не корректный!',
		}
	])
	.addField('#tel', [
		{
			rule: 'required',
			errorMessage: 'Укажите ваш телефон',
		},
		{
			validator: (value) => {
				const phone = selector.inputmask.unmaskedvalue()
				console.log(phone)
				return Number(phone) && phone.length === 10;
			},
			errorMessage: 'Телефон не корректный!',
		},
	]);
