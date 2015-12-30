var shop = (function(){
	var init = function() {
		_setUpListeners();
		}, 
		_setUpListeners = function() {
			$('.view__link').on('click', _changeView);
			$('.filter__header_link').on('click', _accordeon);
			$('.reset__brand_link').on('click', _resetFilters);	
			$('.product__image__item').on('click', _changeImage);
			$('.color__item').on('click', _changeColor);
			$('.pseudo-select').on('click', _select);
			$('.pseudo-option').on('click', _option);
			$('.product-type__link').on('click', _typeProduct);
		};

		//Переключение вида отображения
		function _changeView() {
			var productsList = $('.products__item'),
			element = $(this);
			if (element.hasClass('view__link_medium')) {
				productsList.removeClass('small')
						.addClass('medium');
			} else if (element.hasClass('view__link_large')) {
				productsList.removeClass('medium')
							.removeClass('small');
			} else if (element.hasClass('view__link_small')) {
				productsList.removeClass('medium')
							.addClass('small');
			}
			$('.view__link').removeClass('view__link_active');
			element.addClass('view__link_active');
		}

		//Аккордеон (фильтры)
		function _accordeon(event) {
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
		}

		//Сбрасываем фильтры
		function _resetFilters(event) {
			event.preventDefault();
			var element = $(this),
				filter = element.closest('.filter'),
				items = filter.find('.brand__item_input');
			items.prop({"checked": false});
		}

		//Меняем картинки в описании
		function _changeImage() {
			var element = $(this),
				preview = element.find('.small__image'),
				src = preview.attr('src'),
				gallery = element.closest('.product__gallery'),
				img = gallery.find('.main__image');
			img.attr('src', src);
		}

		//Обрабатываем клик по выбору цвета
		function _changeColor() {
			$(this).toggleClass('active__color');
		}

		//Выпадающий список
		function _select() {
			var element = $(this),
				options = $('.pseudo-option__list');
			if (element.hasClass('active_select')) {
				options.slideUp();
				element.removeClass('active_select');
			} else {
				options.slideDown();
				element.addClass('active_select');
			}
		}

		//Смена option
		function _option() {
			var element = $(this),
				optionText = element.text(),
	    		form = element.closest('.sort__form'),
	    		select = form.find('.pseudo-select'),
	    		options = $('.pseudo-option__list');
			select.text(optionText);
			options.slideUp();
			$('.pseudo-select').removeClass('active_select');
		}

		//Переключение активного класса фильтра подукта
		function _typeProduct(event) {
			var element = $(this),
				items = $('.product-type__link');
			event.preventDefault();
			items.removeClass('product-type__link_active');
			element.addClass('product-type__link_active');
		}

		return {
			init: init
		}
})();

shop.init();

