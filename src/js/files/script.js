// ~~~~~~~~[ JavaScript Files Connecting ]~~~~~~~
// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
// ================[ JavaScript Section Active Link Var Header ]================
document.addEventListener("DOMContentLoaded", function () {
	// ================[ JavaScript Section Current Date For Header ]================
	function updateCurrentDate() {
		// Получаем все элементы с классом "currentDate"
		const currentDateElements = document.querySelectorAll('#currentDate');

		// Получаем текущую дату
		const currentDate = new Date();

		// Опции для форматирования даты
		const options = {
			day: 'numeric',
			month: 'long',
			weekday: 'short',
			year: 'numeric'
		};

		// Форматируем дату с использованием опций
		const formattedDate = currentDate.toLocaleDateString('ru-RU', options);

		// Обновляем каждый элемент с классом "currentDate"
		currentDateElements.forEach(element => {
			element.textContent = formattedDate;
		});
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
	// ================[ JavaScript Section Methods Active ]================
	const payButtons = document.querySelectorAll('.payment__button');
	// Добавляем слушатель событий для каждой кнопки
	payButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			// Убираем активный класс у всех кнопок
			payButtons.forEach(function (btn) {
				btn.classList.remove('payment__button--active');
			});
			// Добавляем активный класс только к текущей кнопке
			button.classList.add('payment__button--active');
		});
	});
});
//--------------------------------------------------------------
