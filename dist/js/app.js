let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {

	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if (header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				let id = setInterval(setPedding, 200);
				setTimeout(() => {
					clearInterval(id);
				}, 1000)
				window.addEventListener('resize', setPedding);
			}

		}
	}
	// ==== AND ADD PADDING-TOP ================================

	//SlideToggle
function _slideUp(target, duration = 500) {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
function _slideDown(target, duration = 500) {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
function _slideToggle(target, duration = 500) {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================







//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];

			if (spoller.classList.contains('_active')) {
				_slideDown(spoller.nextElementSibling);
			}

			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				if (spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
spollerInit()
// === // Spollers ==================================================================






function createTabs(containerName = false, triggersName = false, tabsName = false) {
	let container = document.querySelector(`${containerName}`);
	if (container) {
		let allTriggers = container.querySelectorAll(`${triggersName}`);
		let allTabs = container.querySelectorAll(`${tabsName}`);

		if (allTriggers.length) {
			allTriggers.forEach(trigger => {
				trigger.addEventListener('click', (e) => {
					e.preventDefault();
					const id = trigger.getAttribute('href').replace('#', '');

					trigger.classList.add('active');

					allTriggers.forEach(i => {
						if (i == trigger) {
							return
						}
						i.classList.remove('active');
					});

					allTabs.forEach(tab => {
						if (tab.id == id) {
							tab.classList.add('active')
						} else {
							tab.classList.remove('active');
						}
					})

				})
			})
		}

	}
}

//createTabs('.tabs', '.tab-trigger', '.tab-content')


function setSameHeight(items) {
	if (!items.length) return;
	Array.from(items).map(i => {
		console.log(i.clientHeight);
	} )
	let maxHeight = Math.max(...Array.from(items).map(i => i.clientHeight));
	items.forEach(i => i.style.minHeight = maxHeight + 'px');
}

function setCounterAnim() {
	let couterItems = document.querySelectorAll('[data-counter]');
	if (couterItems) {
		couterItems.forEach(item => {
			let animation = anime({
				targets: item,
				textContent: [0, item.dataset.counter || 0],
				round: 1,
				easing: 'linear',
				autoplay: false,
				duration: 1000
			});
			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.intersectionRatio >= 0.7) {
							animation.play();
							observer.disconnect();
						}
					});
				},
				{
					threshold: 0.7
				}
			);

			observer.observe(item);
		})
	}
}

setCounterAnim();

let anchors = document.querySelectorAll('.anchor');
if (anchors.length) {
	anchors.forEach(anchor => {
		if (!anchor.getAttribute('href').match(/#\w+$/gi)) return;

		let id = anchor.getAttribute('href').match(/#\w+$/gi).join('').replace('#', '');
		anchor.addEventListener('click', (e) => {

			let el = document.getElementById(id);
			if (el) {
				e.preventDefault();
				window.scrollTo({
					top: el.offsetTop,
					behavior: 'smooth',
				})
			}

		})
	})
}

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function trimString(el, stringLength = 0) {
	let str = el.innerText;
	if(str.length <= stringLength) return;
	el.innerText = [...str].slice(0, stringLength).join('') + '...';
};
	// //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
// let forms = document.querySelectorAll('form');
// if (forms.length > 0) {
// 	for (let index = 0; index < forms.length; index++) {
// 		const el = forms[index];
// 		el.addEventListener('submit', form_submit);
// 	}
// }
// function form_submit(e) {
// 	let btn = event.target;
// 	let form = btn.closest('form');
// 	let message = form.getAttribute('data-message');
// 	let error = form_validate(form);
// 	if (error == 0) {
// 		//SendForm
// 		form_clean(form);
// 		if (message) {
// 			popup_open('message-' + message);
// 			e.preventDefault();
// 		}
// 	} else {
// 		let form_error = form.querySelectorAll('._error');
// 		if (form_error && form.classList.contains('_goto-error')) {
// 			_goto(form_error[0], 1000, 50);
// 		}
// 		event.preventDefault();
// 	}
// }
// function form_validate(form) {
// 	let error = 0;
// 	let form_req = form.querySelectorAll('._req');
// 	if (form_req.length > 0) {
// 		for (let index = 0; index < form_req.length; index++) {
// 			const el = form_req[index];
// 			if (!_is_hidden(el)) {
// 				error += form_validate_input(el);
// 			}
// 		}
// 	}
// 	return error;
// }
// function form_validate_input(input) {
// 	let error = 0;
// 	let input_g_value = input.getAttribute('data-value');

// 	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
// 		if (input.value != input_g_value) {
// 			let em = input.value.replace(" ", "");
// 			input.value = em;
// 		}
// 		if (email_test(input) || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
// 		form_add_error(input);
// 		error++;
// 	} else {
// 		if (input.value == '' || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	}
// 	return error;
// }
// function form_add_error(input) {
// 	input.classList.add('_error');
// 	input.parentElement.classList.add('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// 	let input_error_text = input.getAttribute('data-error');
// 	if (input_error_text && input_error_text != '') {
// 		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
// 	}
// }
// function form_remove_error(input) {
// 	input.classList.remove('_error');
// 	input.parentElement.classList.remove('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// }
// function form_clean(form) {
// 	let inputs = form.querySelectorAll('input,textarea');
// 	for (let index = 0; index < inputs.length; index++) {
// 		const el = inputs[index];
// 		el.parentElement.classList.remove('_focus');
// 		el.classList.remove('_focus');
// 		el.value = el.getAttribute('data-value');
// 	}
// 	let checkboxes = form.querySelectorAll('.checkbox__input');
// 	if (checkboxes.length > 0) {
// 		for (let index = 0; index < checkboxes.length; index++) {
// 			const checkbox = checkboxes[index];
// 			checkbox.checked = false;
// 		}
// 	}
// 	let selects = form.querySelectorAll('select');
// 	if (selects.length > 0) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_default_value = select.getAttribute('data-default');
// 			select.value = select_default_value;
// 			select_item(select);
// 		}
// 	}
// }

// let viewPass = document.querySelectorAll('.form__viewpass');
// for (let index = 0; index < viewPass.length; index++) {
// 	const element = viewPass[index];
// 	element.addEventListener("click", function (e) {
// 		if (element.classList.contains('_active')) {
// 			element.parentElement.querySelector('input').setAttribute("type", "password");
// 		} else {
// 			element.parentElement.querySelector('input').setAttribute("type", "text");
// 		}
// 		element.classList.toggle('_active');
// 	});
// }


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';

				let event = new Event("change", {bubbles: true}); 
				original.dispatchEvent(event);
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];

			if (input.classList.contains('_mask')) {
				//'+7(999) 999 9999'
				//'+38(999) 999 9999'
				//'+375(99)999-99-99'
				let maskValue = input.dataset.mask;
				input.classList.add('_mask');
				Inputmask('+9(999) 999 9999', {
					//"placeholder": '',
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function () {
						//input_clear_mask(input, input_g_value);
					}
				}).mask(input);
			}
			if (input.classList.contains('_date')) {
				datepicker(input, {
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}

			//const input_g_value = input.getAttribute('data-value');
			//input_placeholder_add(input);
			// if (input.value != '' && input.value != input_g_value) {
			// 	input_focus_add(input);
			// }
			// input.addEventListener('focus', function (e) {
			// 	if (input.value == input_g_value) {
			// 		input_focus_add(input);
			// 		input.value = '';
			// 	}
			// 	if (input.getAttribute('data-type') === "pass") {
			// 		input.setAttribute('type', 'password');
			// 	}
			// 	if (input.classList.contains('_date')) {
			// 		/*
			// 		input.classList.add('_mask');
			// 		Inputmask("99.99.9999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 		*/
			// 	}
			// 	if (input.classList.contains('_phone')) {
			// 		//'+7(999) 999 9999'
			// 		//'+38(999) 999 9999'
			// 		//'+375(99)999-99-99'
			// 		input.classList.add('_mask');
			// 		Inputmask("+375 (99) 9999999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	if (input.classList.contains('_digital')) {
			// 		input.classList.add('_mask');
			// 		Inputmask("9{1,}", {
			// 			"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	form_remove_error(input);
			// });
			// input.addEventListener('blur', function (e) {
			// 	if (input.value == '') {
			// 		input.value = input_g_value;
			// 		input_focus_remove(input);
			// 		if (input.classList.contains('_mask')) {
			// 			input_clear_mask(input, input_g_value);
			// 		}
			// 		if (input.getAttribute('data-type') === "pass") {
			// 			input.setAttribute('type', 'text');
			// 		}
			// 	}
			// });
			// if (input.classList.contains('_date')) {
			// 	datepicker(input, {
			// 		customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			// 		customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			// 		formatter: (input, date, instance) => {
			// 			const value = date.toLocaleDateString()
			// 			input.value = value
			// 		},
			// 		onSelect: function (input, instance, date) {
			// 			input_focus_add(input.el);
			// 		}
			// 	});
			// }
		}
	}
}
// function input_placeholder_add(input) {
// 	const input_g_value = input.getAttribute('data-value');
// 	if (input.value == '' && input_g_value != '') {
// 		input.value = input_g_value;
// 	}
// }
// function input_focus_add(input) {
// 	input.classList.add('_focus');
// 	input.parentElement.classList.add('_focus');
// }
// function input_focus_remove(input) {
// 	input.classList.remove('_focus');
// 	input.parentElement.classList.remove('_focus');
// }
// function input_clear_mask(input, input_g_value) {
// 	input.inputmask.remove();
// 	input.value = input_g_value;
// 	input_focus_remove(input);
// }

// ==  QUANTITY =====================================================
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
// == // QUANTITY =====================================================

// == PRICE SLIDER =====================================================
let priceSlider = document.querySelector('.price-filter');

if(priceSlider) {
	let inputNumFrom = document.getElementById('priceStart');
	let inputNumTo = document.getElementById('priceEnd');
	let value = document.querySelector('.values-price-filter');

	let min = value.dataset.min;
	let max = value.dataset.max;
	let numStart = value.dataset.start;
	let numEnd = value.dataset.end;
	noUiSlider.create(priceSlider, {
		start: [+numStart, +numEnd],  
		connect: true,
		tooltips:[wNumb({decimals: 0, thousand: ','}) , wNumb({decimals: 0, thousand: ','})], 
		range: {
			'min': [+min],
			'1%': [100,100],
			'max': [+max],
		}
	});

	priceSlider.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    if (handle) {
	        inputNumTo.value = Math.round(value);
	    } else {
	        inputNumFrom.value = Math.round(value);
	    }
	});

	inputNumTo.onchange = function() {
		setPriceValues()
	}

	inputNumFrom.onchange = function() {
		setPriceValues()
	}

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if(inputNumFrom.value != '') {
			priceStartValue = inputNumFrom.value;
		}

		if(inputNumTo.value != '') {
			priceEndValue = inputNumTo.value;
		}

		  priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
	}
}

// == // PRICE SLIDER =====================================================;
	{
    let header = document.querySelector('.header');
    if (header) {
        let menu = document.querySelector('.main-menu .menu');
        let btnMenuClose = menu.querySelector('.menu__close');
        let burger = burgerHandler();
        let sideOpenMenuBtn = document.querySelector('.side-panel__item.open-menu-btn');

        const menuOpen = () => {
            menu.classList.add('open');
            burger.open();
        }
        const menuClose = () => {
            menu.classList.remove('open');
            burger.close();
        }
        const menuToggle = () => {
            menu.classList.toggle('open');
        }

        burger.el.addEventListener('click', () => {
            menuToggle();
            burger.toggle();
        })

        btnMenuClose.addEventListener('click', menuClose);
        sideOpenMenuBtn.addEventListener('click', menuOpen);

        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 50);
        })


        let slideItems = document.querySelectorAll('.main-menu .menu-item-has-children');
        if (slideItems.length) {
            slideItems.forEach(item => {
                
                let title = item.querySelector('.menu__link');
                let subMenu = item.querySelector('.sub-menu');

                title.addEventListener('click', (e) => {

                    e.preventDefault();
                    title.classList.toggle('open');
                    _slideToggle(subMenu);

                    slideItems.forEach(i => {
                        if (i === item) return;

                        let title = i.querySelector('.menu__link');
                        let subMenu = i.querySelector('.sub-menu');

                        title.classList.remove('open');
                        _slideUp(subMenu);
                    })

                })
            })
        }
    }
}


;
	function burgerHandler() {
    let burger = document.querySelector('.burger');
    if(burger) {
        let span1 = burger.querySelector('span:nth-child(1)');
        let span2 = burger.querySelector('span:nth-child(2)');
        let span3 = burger.querySelector('span:nth-child(3)');
        let span4 = burger.querySelector('span:nth-child(4)');

        return {
            el: burger,
            toggle() {
                span1.classList.toggle('first');
                span2.classList.toggle('second');
                span3.classList.toggle('third');
                span4.classList.toggle('fourth');
            },
            close() {
                span1.classList.remove('first');
                span2.classList.remove('second');
                span3.classList.remove('third');
                span4.classList.remove('fourth');
            },
            open() {
                span1.classList.add('first');
                span2.classList.add('second');
                span3.classList.add('third');
                span4.classList.add('fourth');
            }
        }
    }
};
	{
    let container = document.querySelector('.container');
    if (container) {
        let asidePanel = document.querySelector('.side-panel');
        if (asidePanel) {
            const setAsidePanelPosition = () => {
                if (document.documentElement.clientWidth > 992) {
                    let containerLeft = container.getBoundingClientRect().left;
                    if (containerLeft > 60) {
                        asidePanel.style.left = containerLeft - 40 + 'px';
                    } else {
                        asidePanel.style.left = '20px';
                    }
                }
            }

            setAsidePanelPosition();

            window.addEventListener('resize', setAsidePanelPosition);
        }
    }
};
	{
    let partnersSlider = document.querySelector('.partners__slider');
    if(partnersSlider) {
        let sliderData = new Swiper(partnersSlider.querySelector('.swiper-container'), {
            
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            
            speed: 800,
            loop: true,
            pagination: {
            	el: partnersSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: partnersSlider.querySelector('.partners__slider-btn-next'),
                prevEl: partnersSlider.querySelector('.partners__slider-btn-prev'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
            },
        });
    }
};
	{
    let servicesSlider = document.querySelector('.services__slider');
    if(servicesSlider) {
        let sliderData = new Swiper(servicesSlider.querySelector('.swiper-container'), {
            
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 800,
            loop: true,
            pagination: {
            	el: servicesSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: servicesSlider.querySelector('.partners__slider-btn-next'),
                prevEl: servicesSlider.querySelector('.partners__slider-btn-prev'),
            },
            watchSlidesVisibility: true,
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1268: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            },
            on: {
                afterInit: function() {
                    let cardTitleAll = servicesSlider.querySelectorAll('.services-card__title');
                    if(cardTitleAll.length) {
                        setSameHeight(cardTitleAll);
                    }
                }
            }
        });

        let id = setInterval(() => {
            sliderData.update();
        }, 200)
        setTimeout(() => {
            clearInterval(id);
        }, 1000)
    }
};
	{
    let teamSlider = document.querySelector('.team__slider');
    if(teamSlider) {
        let sliderData = new Swiper(teamSlider.querySelector('.swiper-container'), {
            
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            
            speed: 800,
            loop: true,
            pagination: {
            	el: teamSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: teamSlider.querySelector('.partners__slider-btn-next'),
                prevEl: teamSlider.querySelector('.partners__slider-btn-prev'),
            },
            
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            },
            on: {
                afterInit: function() {
                    let teamCardAll = document.querySelectorAll('.team-card');
                    if(teamCardAll.length) {
                        teamCardAll.forEach(card => {
                            let title = card.querySelector('.team-card__title');
                            let bottomLine = card.querySelector('.team-card__bottom');
                            let padding = 28;

                            const setPadding = () => {
                                if(document.documentElement.clientWidth < 576) {
                                    padding = 8;
                                }
                            }

                            const setBottomHeight = () => {
                                bottomLine.style.height = title.clientHeight + padding + 'px';
                            }

                            const setPositionTitle = () => {
                                let bottomLength = card.clientHeight - title.clientHeight - title.offsetTop - (padding / 2);
                                title.style.transform = `translateY(${bottomLength}px)`;
                            }

                            setPadding();
                            setBottomHeight();
                            setPositionTitle();

                            window.addEventListener('resize', () => {
                                setPadding();
                                setBottomHeight();
                                setPositionTitle();
                            })
                        })
                    }
                }
            }
        });
    }
};
	{
    let testimonialsSlider = document.querySelector('.testimonials__slider');
    if(testimonialsSlider) {
        let sliderData = new Swiper(testimonialsSlider.querySelector('.swiper-container'), {
            
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,

            //loop: true,
            pagination: {
            	el: testimonialsSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: testimonialsSlider.querySelector('.testimonials__slider-btn-next'),
                prevEl: testimonialsSlider.querySelector('.testimonials__slider-btn-prev'),
            },
        });
        
    }
};
	{
    let verifyCardSlider = document.querySelector('.verify-card__slider');
    if(verifyCardSlider) {
        let sliderData = new Swiper(verifyCardSlider.querySelector('.swiper-container'), {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            loop: true,
            navigation: {
                nextEl: verifyCardSlider.querySelector('.partners__slider-btn-next'),
                prevEl: verifyCardSlider.querySelector('.partners__slider-btn-prev'),
            },
        });
        
    }

    let verifyFormItems = document.querySelector('.verify-form__items');
    let verifyFormCard = document.querySelector('.verify-form__card');
    if(verifyFormItems && verifyFormCard) {
        const setFromCardPosition = () => {
            verifyFormCard.style.top = verifyFormItems.offsetTop + 14 + 'px';
        }

        setFromCardPosition();

        window.addEventListener('resize', setFromCardPosition);
    }
};
	function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


const $cookieEl = document.getElementById('cookieMessage');
if ($cookieEl) {
    let closeBtn = document.querySelector('.cookies-message__agree');

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        $cookieEl.classList.remove('show');

        document.cookie = encodeURIComponent('hide-cookie') + "=" + encodeURIComponent('true') + "; path=/; max-age=86400";
    })


    if (!getCookie('hide-cookie')) {
        setTimeout(() => {
            $cookieEl.classList.add('show');
        }, 1000);
    }

};
	{
    let valueCardAllText = document.querySelectorAll('.values-card__text');
    if(valueCardAllText.length) {
        setSameHeight(valueCardAllText);
    }

    let couterItems = document.querySelectorAll('.values-card__num');
    if (couterItems) {
        couterItems.forEach(item => {
            let animation = anime({
                targets: item,
                textContent: [0, +item.innerText || 0],
                round: 1,
                easing: 'linear',
                autoplay: false,
                duration: 1000
            });
            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio >= 0.7) {
                            animation.play();
                            observer.disconnect();
                        }
                    });
                },
                {
                    threshold: 0.7
                }
            );

            observer.observe(item);
        })
    }
};
	{
    let specializationsSlider = document.querySelector('.specializations__slider');
    if(specializationsSlider) {
        let sliderData = new Swiper(specializationsSlider.querySelector('.swiper-container'), {
            
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 800,
            loop: true,
            pagination: {
            	el: specializationsSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: specializationsSlider.querySelector('.partners__slider-btn-next'),
                prevEl: specializationsSlider.querySelector('.partners__slider-btn-prev'),
            },
            watchSlidesVisibility: true,
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1268: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            },
        });

        
        let id = setInterval(() => {
            sliderData.update();
        }, 200)
        setTimeout(() => {
            clearInterval(id);
        }, 1000)
    }
};



	let quoteTextAll = document.querySelectorAll('.team-photo__quote-text');
	if(quoteTextAll) {
		quoteTextAll.forEach(quoteText => {
			trimString(quoteText, 121);
		})
	}
});

window.addEventListener('DOMContentLoaded', function () {
	if (isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}

	"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];

	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);

					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};

					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}

	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {

				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {

				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	dynamicAdapt();


	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}

	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}

	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {

				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}

	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}

	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());;

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	{
    let allSvgLeftSmall = {
        "0": '<svg width="371" height="373" viewBox="0 0 371 373" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M369.734 92.6044C350.454 30.7033 169.407 -33.9913 53.629 21.1872C-38.5684 65.1273 5.3063 245.338 67.8604 322.865C212.32 501.9 384.45 139.852 369.734 92.6044Z" fill="#AAC9AF" fill-opacity="0.15" /></svg>',
        "1": '<svg width="371" height="373" viewBox="0 0 371 373" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M369.734 92.6044C350.454 30.7033 169.407 -33.9913 53.629 21.1872C-38.5684 65.1273 5.3063 245.338 67.8604 322.865C212.32 501.9 384.45 139.852 369.734 92.6044Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "2": '<svg width="369" height="381" viewBox="0 0 369 381" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M219.697 379.399C156.418 393.514 10.1405 268.75 0.31718 140.872C-7.50539 39.0393 170.613 -12.6799 268.996 2.94569C496.196 39.0307 267.997 368.626 219.697 379.399Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "3": '<svg width="369" height="381" viewBox="0 0 369 381" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M219.697 379.399C156.418 393.514 10.1405 268.75 0.31718 140.872C-7.50539 39.0393 170.613 -12.6799 268.996 2.94569C496.196 39.0307 267.997 368.626 219.697 379.399Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "4": '<svg width="354" height="373" viewBox="0 0 354 373" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M352.209 291.669C329.485 352.391 145.092 406.821 32.5938 345.23C-56.9917 296.184 -3.07061 118.72 63.7366 44.8274C218.018 -125.817 369.554 245.323 352.209 291.669Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>'
    }

    let allSvgLeftGig = {
        "0": '<svg width="915" height="848" viewBox="0 0 915 848" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M894.608 692.178C974.268 559.749 802.537 134.864 520.807 16.1653C296.457 -78.358 45.1207 285.358 6.21843 519.6C-83.62 1060.55 833.805 793.258 894.608 692.178Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "1": '<svg width="909" height="875" viewBox="0 0 909 875" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M904.936 543.182C943.685 393.577 658.307 34.9997 354.462 1.24307C112.501 -25.6382 -25.1309 394.501 4.12703 630.142C71.6941 1174.32 875.359 657.372 904.936 543.182Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "2": '<svg width="731" height="729" viewBox="0 0 731 729" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M729.912 485.217C709.569 610.462 376.542 785.589 137.032 710.498C-53.6963 650.701 -18.221 289.448 81.6769 122.031C312.376 -264.595 745.438 389.621 729.912 485.217Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "3": '<svg width="741" height="689" viewBox="0 0 741 689" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M691.042 31.5105C784.865 116.936 749.755 491.561 556.074 651.221C401.841 778.363 118.556 551.401 32.8379 376.299C-165.114 -28.0729 619.431 -33.6923 691.042 31.5105Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "4": '<svg width="905" height="768" viewBox="0 0 905 768" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M882.424 608.789C965.513 487.001 809.198 109.974 534.191 12.1491C315.196 -65.7516 54.7821 269.785 8.76223 481.93C-97.5132 971.848 819.005 701.747 882.424 608.789Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
    }

    let allSvgRightSmall = {
        "0": '<svg width="371" height="373" viewBox="0 0 371 373" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.7555 92.6044C21.0358 30.7033 202.083 -33.9913 317.861 21.1872C410.058 65.1273 366.183 245.338 303.629 322.865C159.17 501.9 -12.9606 139.852 1.7555 92.6044Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "1": '<svg width="352" height="381" viewBox="0 0 352 381" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.1366 20.4982C70.8399 -24.4716 260.668 6.00011 335.574 110.108C395.223 193.012 269.998 329.832 177.844 367.66C-34.9713 455.019 -11.5106 54.8224 24.1366 20.4982Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "2": '<svg width="369" height="381" viewBox="0 0 369 381" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M148.53 379.399C211.809 393.514 358.087 268.75 367.91 140.872C375.733 39.0393 197.615 -12.6799 99.2318 2.94569C-127.968 39.0307 100.231 368.626 148.53 379.399Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "3": '<svg width="361" height="375" viewBox="0 0 361 375" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.54715 325.013C37.7635 380.692 228.917 401.272 328.589 320.557C407.96 256.282 323.174 91.3207 244.23 30.5652C61.9217 -109.74 -20.806 282.515 4.54715 325.013Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "4": '<svg width="369" height="381" viewBox="0 0 369 381" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M148.531 379.399C211.81 393.514 358.088 268.75 367.911 140.872C375.733 39.0393 197.615 -12.6799 99.2323 2.94569C-127.968 39.0307 100.231 368.626 148.531 379.399Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
    }
    let allSvgRightBIg = {
        "0": '<svg width="909" height="875" viewBox="0 0 909 875" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.57801 543.182C-35.1715 393.577 250.207 34.9997 554.052 1.24307C796.013 -25.6382 933.645 394.501 904.387 630.142C836.82 1174.32 33.1545 657.372 3.57801 543.182Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "1": '<svg width="916" height="858" viewBox="0 0 916 858" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.079 645.262C-53.2194 505.663 159.326 99.6547 451.333 9.13848C683.867 -62.9421 898.347 323.655 914.105 560.582C950.495 1107.73 63.6829 751.814 13.079 645.262Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "2": '<svg width="732" height="729" viewBox="0 0 732 729" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.3814 485.217C21.7238 610.462 354.751 785.589 594.261 710.498C784.989 650.701 749.514 289.448 649.616 122.031C418.917 -264.595 -14.1454 389.621 1.3814 485.217Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "3": '<svg width="694" height="738" viewBox="0 0 694 738" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7125 673.832C99.4293 773.349 475.587 764.29 648.288 582.141C785.814 437.091 579.033 138.756 410.293 41.1081C20.6143 -184.395 -39.37 597.873 20.7125 673.832Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
        "4": '<svg width="890" height="887" viewBox="0 0 890 887" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.506844 295.992C25.5792 143.497 431.606 -69.0133 723.142 23.0106C955.3 96.2918 911.238 536.199 789.171 739.87C507.275 1210.22 -18.6302 412.387 0.506844 295.992Z" fill="#AAC9AF" fill-opacity="0.15"/></svg>',
    }

    let allDecor = document.querySelectorAll('._decor');
    if(allDecor.length) {
        const createHtml = (leftSide = true) => {
            let wrap = document.createElement('div');
            let img1 = document.createElement('div');
            let img2 = document.createElement('div');
            wrap.className = '_decor__wrap';
            img1.className = '_decor__img-1 layer';
            img2.className = '_decor__img-2 layer';
            img1.setAttribute('data-depth', '0.25');
            img2.setAttribute('data-depth', '0.15');
            img1.innerHTML = leftSide ? allSvgLeftSmall[randomInteger(0, 4)] : allSvgRightSmall[randomInteger(0, 4)];
            img2.innerHTML = leftSide ? allSvgLeftGig[randomInteger(0, 4)] :  allSvgRightBIg[randomInteger(0, 4)];
           
            wrap.append(img1, img2);
            return wrap;
        }

        allDecor.forEach(decor => {
            let leftSide = decor.classList.contains('left') ? true : false;
            let wrap = createHtml(leftSide);
            decor.prepend(wrap);
        })
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
};
});
