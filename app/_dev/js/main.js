//Переключение видов отображения товаров
$('.view__link').on('click', function() {
	var productsList = $('.products__item'),
		element = $(this);
	if (element.hasClass('view__link_medium')) {
		productsList.removeClass('small')
					.addClass('medium');
	}
	else if (element.hasClass('view__link_large')) {
		productsList.removeClass('medium')
					.removeClass('small');
	}
	else if (element.hasClass('view__link_small')) {
		productsList.removeClass('medium')
					.addClass('small');
	}
	$('.view__link').removeClass('view__link_active');
	element.addClass('view__link_active');
});

//Аккордион
$('.filter__header_link').on('click', function(event) {
	event.preventDefault();
	var element = $(this),
		header = element.closest('.filter__header'),
		filter = header.siblings('.filter');
	if (filter.hasClass('closed')) {
		filter.removeClass('closed').slideDown(300);
		element.removeClass('active_link');
	} else {
		filter.slideUp(300).addClass('closed');
		element.addClass('active_link');
	}
});

//Сбрасываем фильтры
$('.reset__brand_link').on('click', function(event) {
	event.preventDefault();
	var element = $(this),
		filter = element.closest('.filter'),
		items = filter.find('.brand__item_input');
	items.prop({"checked": false});
});

//Переключаем картинки в описании
$('.product__image__item').on('click', function() {
	var element = $(this),
		preview = element.find('.small__image'),
		src = preview.attr('src'),
		gallery = element.closest('.product__gallery'),
		img = gallery.find('.main__image');
	img.attr('src', src);
});

//Подключаем ползунок
(function () {
	var slide = $('.slider'),
		form = slide.closest('.price__form'),
		inputs = form.find('input'),
		inputFrom = form.find('#from'),
		inputTo = form.find('#to'),
		minVal = 1000,
		maxVal = 50000;
	slide.slider({range: true,
				  values: [5000,25000],
				  min: minVal,
				  max: maxVal,
				  change: changeValues,
				  create: changeValues
				   });
	function changeValues(min, max) {
		var min, max;
		min = slide.slider("values", 0);
		max = slide.slider("values", 1);
		inputFrom.val(min);
		inputTo.val(max);
	}
	//Меняем значения ползунка по вводу в поля
	inputs.on('change', function() {
		var min = inputFrom.val(),
			max = inputTo.val();
		if (min < minVal) {
			inputFrom.val(minVal);
		}
		else if (max > maxVal) {
			inputTo.val(maxVal);
		}
		slide.slider("values",[min, max]);
	});
	
	
})();

//Обрабатываем клик по выбору цвета
$('.color__item').on('click', function() {
	$(this).toggleClass('active__color');
});

//Выпадающий список
$('.pseudo-select').on('click', function() {
	var element = $(this),
		options = $('.pseudo-option__list');
	if (element.hasClass('active_select')) {
		options.slideUp();
		element.removeClass('active_select');
	} else {
		options.slideDown();
		element.addClass('active_select');
	}
});
$('.pseudo-option').on('click', function() {
	var element = $(this),
		optionText = element.text(),
	    form = element.closest('.sort__form'),
	    select = form.find('.pseudo-select');
	select.text(optionText);
});