// ~~~~~~~~[ JavaScript Files Connecting ]~~~~~~~
// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
// ================[ JavaScript Section Active Link Var Header ]================
document.addEventListener("DOMContentLoaded", function () {

	// Получаем все кнопки
	var buttons = document.querySelectorAll('.menu__var');

	// Добавляем обработчик события для каждой кнопки
	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			// Удаляем активный класс у всех кнопок
			buttons.forEach(function (btn) {
				btn.classList.remove('menu__var--active');
			});

			// Добавляем активный класс к нажатой кнопке
			button.classList.add('menu__var--active');
		});
	});
	// ================[ JavaScript Section Current Date For Header ]================
	function updateCurrentDate() {
		// Получаем элемент, в который будем выводить дату
		const currentDateElement = document.getElementById('currentDate');

		// Получаем текущую дату
		const currentDate = new Date();

		// Опции для форматирования даты
		const options = {
			day: 'numeric',
			month: 'long',
			weekday: 'short',
			year: 'numeric'  // Добавляем опцию для отображения года
		};

		// Форматируем дату с использованием опций
		const formattedDate = currentDate.toLocaleDateString('ru-RU', options);

		// Выводим отформатированную дату на страницу
		currentDateElement.textContent = formattedDate;
	}

	// Вызываем функцию обновления текущей даты
	updateCurrentDate();

	// Обновляем текущую дату каждую минуту
	setInterval(updateCurrentDate, 60000);
	// ================[ JavaScript Section Span Input Active ]================


	var spans = document.querySelectorAll('.form-hero__label span');

	spans.forEach(function (span) {
		var input = span.nextElementSibling;

		input.addEventListener('focus', function () {
			span.classList.add('active');
		});

		input.addEventListener('blur', function () {
			span.classList.remove('active');
		});
	});
	// ================[ JavaScript Section Span Input Active ]================
	const changeInputs = document.querySelector('.form-hero__inputs');
	const changeButton = document.querySelector('.form-hero__change');
	if (changeButton !== null) {
		changeButton.addEventListener('click', () => {
			changeInputs.classList.toggle('form-hero__inputs--reverse')
		})
	}
	// ================[ JavaScript Section Navigation Articles ]================
	const links = document.querySelectorAll('.navigation-articles__link');
	const prevButton = document.querySelector('.navigation-articles__button--prev');
	const nextButton = document.querySelector('.navigation-articles__button--next');

	// Функция для удаления активного класса у всех ссылок
	function removeActiveClass() {
		links.forEach(link => {
			link.classList.remove('navigation-articles__link--active');
		});
	}

	// Функция для установки активного класса на определенную ссылку
	function setActiveLink(index) {
		removeActiveClass();
		links[index].classList.add('navigation-articles__link--active');
	}

	if (prevButton) {
		// Обработчик для кнопки "prev"
		prevButton.addEventListener('click', () => {
			const currentActiveIndex = [...links].findIndex(link => link.classList.contains('navigation-articles__link--active'));
			if (currentActiveIndex > 0) {
				setActiveLink(currentActiveIndex - 1);
			}
		});

		// Обработчик для кнопки "next"
		nextButton.addEventListener('click', () => {
			const currentActiveIndex = [...links].findIndex(link => link.classList.contains('navigation-articles__link--active'));
			if (currentActiveIndex < links.length - 1) {
				setActiveLink(currentActiveIndex + 1);
			}
		});
	}
	// ================[ JavaScript Section Input Active ]================
	const inputs = document.querySelectorAll('.input-actions');
	if (inputs !== null) {
		inputs.forEach(function (input) {
			input.addEventListener("input", function () {
				if (input.value.trim() !== "") {
					input.classList.add('input-actions--active');
				} else {
					input.classList.remove('input-actions--active');
				}
			});
		})
	}
	// ================[ JavaScript Section Review ]================
	const reviewBtn = document.querySelector('.top-review__button');
	const reviewContrl = document.querySelector('.top-review__buttons');
	const reviewArea = document.querySelector('.top-review__area');
	const reviewBtnCancel = document.querySelector('.top-review__cancel');
	if (reviewBtn !== null) {
		reviewBtn.addEventListener("click", () => {
			reviewBtn.classList.add("top-review__button--disable");
			reviewContrl.classList.remove("buttons-review-disable");
			reviewArea.classList.remove("area-review-disable");
		})
		reviewBtnCancel.addEventListener("click", () => {
			reviewBtn.classList.remove("top-review__button--disable");
			reviewContrl.classList.add("buttons-review-disable");
			reviewArea.classList.add("area-review-disable");
		})
	}
});
//--------------------------------------------------------------
