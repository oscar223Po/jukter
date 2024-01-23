// ~~~~~~~~[ JavaScript Files Connecting ]~~~~~~~
// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLockToggle, bodyUnlock, isMobile } from "./functions.js";
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
	// ================[ JavaScript Section Chekbox All Items ]================
	var mainCheckbox = document.getElementById('stock_1');
	var archiveButtons = document.querySelector(".top-main-offer__buttons")
	if (mainCheckbox !== null) {
		mainCheckbox.addEventListener("change", () => {
			var checkboxes = document.querySelectorAll(".checkbox-function")
			for (let i = 0; i < checkboxes.length; i++) {
				checkboxes[i].checked = mainCheckbox.checked;
			}
		})
	}
	if (archiveButtons !== null) {
		mainCheckbox.addEventListener("change", () => {
			archiveButtons.classList.toggle("offer-buttons-disable")
		})
	}
	// ================[ JavaScript Section For Password Input ]================
	var passwordInputs = document.querySelectorAll('.password-input');
	var eyeIcons = document.querySelectorAll('.eye-form');

	// Добавляем обработчик событий для каждого элемента
	passwordInputs.forEach(function (passwordInput, index) {
		eyeIcons[index].addEventListener('click', function () {
			if (passwordInput.type === 'password') {
				passwordInput.type = 'text';
				eyeIcons[index].classList.add("eye-form--active");
			} else {
				passwordInput.type = 'password';
				eyeIcons[index].classList.remove("eye-form--active");
			}
		});
	});
	// ================[ JavaScript Section ]================
	var conductBlock = document.querySelector('.conduct');
	var messageItems = document.querySelectorAll('.messages-chat__item');
	var backButton = document.querySelector('.conduct__back');
	if (backButton !== null) {
		messageItems.forEach(function (item) {
			item.addEventListener('click', function (event) {
				event.preventDefault();
				bodyLockToggle();
				conductBlock.classList.add('conduct-active');
			});
		});
		// Обработчик события для кнопки "Назад"
		backButton.addEventListener('click', function () {
			// Удаление активного класса у блока conduct
			bodyUnlock();
			conductBlock.classList.remove('conduct-active');
		});
	}
});
//--------------------------------------------------------------
