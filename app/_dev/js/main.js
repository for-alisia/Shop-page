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