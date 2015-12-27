$('.view__link').on('click', function() {
	if ($(this).hasClass('view__link_medium')) {
		$('.products__item').addClass('medium');
	}
	else if ($(this).hasClass('view__link_large')) {
		$('.products__item').removeClass('medium');
	}
	$('.view__link').removeClass('view__link_active');
	$(this).addClass('view__link_active');
});